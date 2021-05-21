import _ from "lodash";
import StyledAlternateContentArea from "../styled/StyledAlternateContentArea";
import StyledContentArea from "../styled/StyledContentArea";
import StyledImageThumbnail from "../styled/StyledImageThumbnail";
import StyledLink from "../styled/StyledLink";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function FilePreviewSection(props) {
    const {setSelectedImages, images} = props;

    const ThumbnailList = () => {
        console.count('ThumnailList called: ')
        return _.map(images, (image) => (  
            <StyledImageThumbnail 
                src={image.src} 
                key={image.id}
                onRemove={() => setSelectedImages(images.filter((img) => img.id !== image.id ))}
            />
        ))
    };

    return (
        <section>
            <StyledContentArea
                width="1400px"
                margin="0 auto"
                flexDirection="column"
                justify="center">
                <StyledSubHeading>Selected Images ({images.length}):</StyledSubHeading>
                <StyledAlternateContentArea 
                    width="1000px"
                    margin="0">
                    <ThumbnailList />
                </StyledAlternateContentArea>
                <StyledLink onClick={() => setSelectedImages([])}>Remove All</StyledLink>
            </StyledContentArea>
        </section>
    )
}