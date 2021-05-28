import _ from "lodash";
import { connect } from "react-redux";
import { removeAllImages, removeImage } from "../../redux/reducers";
import StyledAlternateContentArea from "../styled/StyledAlternateContentArea";
import StyledContentArea from "../styled/StyledContentArea";
import StyledImageThumbnail from "../styled/StyledImageThumbnail";
import StyledLink from "../styled/StyledLink";
import StyledSubHeading from "../styled/StyledSubHeading";

function FilePreviewSection(props) {
    const {images, removeImage, removeAll} = props;

    const ThumbnailList = () => {
        return _.map(images, (image) => (  
            <StyledImageThumbnail 
                src={image.src} 
                key={image.id}
                onRemove={() => removeImage(image)}
            />
        ))
    };

    return (
        <section>
            <StyledContentArea
                margin="30px 0">
                <StyledContentArea
                    width="1400px"
                    margin="0 auto"
                    flexDirection="column"
                    justify="center">
                    <StyledSubHeading>Selected Images ({images.length}):</StyledSubHeading>
                    <StyledAlternateContentArea 
                        width="1300px"
                        margin="0">
                        <ThumbnailList />
                    </StyledAlternateContentArea>
                    <StyledLink onClick={() => removeAll()}>Remove All</StyledLink>
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}

const mapStateToProps = (state) => ({
    images: state.images
});

const mapDispatchToProps = (dispatch) => ({
    removeImage: (image) => dispatch(removeImage(image)),
    removeAll: () => dispatch(removeAllImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilePreviewSection);