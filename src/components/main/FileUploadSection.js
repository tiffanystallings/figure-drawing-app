import _ from "lodash";
import { useState } from "react";
import StyledContentArea from "../styled/StyledContentArea";
import StyledFilePicker from "../styled/StyledFilePicker";
import StyledLoadingBar from "../styled/StyledLoadingBar";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function FileUploadSection(props) {
    const {setSelectedImages, images} = props;

    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        let uploadedImages = []

        setLoading(true);

        _.forEach(e, (file, idx) => {
            let reader = new FileReader();

            reader.onloadend = ev => {
                uploadedImages.push({ name: file.name, src: ev.target.result, id: _.uniqueId() });

                setProgress((uploadedImages.length / e.length) * 100);

                // Wait for last image to be pushed, then set state
                if (uploadedImages.length === e.length) {
                    setSelectedImages([...images, ...uploadedImages]);
                    setLoading(false);
                }
            }

            reader.readAsDataURL(file);
        })
    }

    return(
        <section>
            <StyledContentArea
                width="1400px"
                flexDirection="column"
                justify="center"
                margin="15px auto">
                <StyledSubHeading>Add reference images you would like included in your practice:</StyledSubHeading>
                <StyledFilePicker
                    disabled={loading} 
                    onChange={(e) => handleChange(e)} 
                />
                {loading && (<StyledLoadingBar percent={progress} />)}
            </StyledContentArea>
        </section>
    )
}