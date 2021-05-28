import _ from "lodash";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../../redux/reducers";
import StyledContentArea from "../styled/StyledContentArea";
import StyledFilePicker from "../styled/StyledFilePicker";
import StyledLoadingBar from "../styled/StyledLoadingBar";
import StyledSubHeading from "../styled/StyledSubHeading";

function FileUploadSection(props) {
    const {images, addImage} = props;

    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [totalLoading, setTotalLoading] = useState(0);
    const [initialImageCount, setInitialImageCount] = useState(images.length);

    const handleChange = (e) => {
        if (!!e.length) {
            setLoading(true);
            setTotalLoading(e.length);
            setInitialImageCount(images.length);
    
            _.forEach(e, (file) => {
                let reader = new FileReader();
    
                reader.onloadend = ev => {
                    addImage({ name: file.name, src: ev.target.result, id: _.uniqueId() });
                }
    
                reader.readAsDataURL(file);
            })
        }
    }

    useEffect(() => {
        if (totalLoading > 0) {
            let expectedLength = initialImageCount + totalLoading
            setProgress((images.length / expectedLength) * 100);

            if (loading && images.length === expectedLength) {
                setLoading(false);
                setTotalLoading(0);
            }
        }
    }, [images, totalLoading, initialImageCount, loading])

    return(
        <section>
            <StyledContentArea
                margin="30px 0"
            >
                <StyledContentArea
                    width="1400px"
                    flexDirection="column"
                    justify="center"
                    margin="0 auto">
                    <StyledSubHeading>Add reference images you would like included in your practice:</StyledSubHeading>
                    <StyledFilePicker
                        disabled={loading} 
                        onChange={(e) => handleChange(e)} 
                    />
                    {loading && (<StyledLoadingBar percent={progress} />)}
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}

const mapStateToProps = (state) => ({
    images: state.images
});

const mapDispatchToProps = (dispatch) => ({
    addImage: (image) => dispatch(addImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadSection);