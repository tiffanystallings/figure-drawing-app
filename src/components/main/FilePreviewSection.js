import StyledContentArea from "../styled/StyledContentArea";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function FilePreviewSection(props) {
    const {images} = props;

    return (
        <section>
            <StyledContentArea
                width="1400px"
                margin="0 auto"
                flexDirection="column"
                justify="center">
                <StyledSubHeading>Selected Images ({images.length}):</StyledSubHeading>
            </StyledContentArea>
        </section>
    )
}