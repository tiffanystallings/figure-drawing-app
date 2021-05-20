import StyledContentArea from "../styled/StyledContentArea";
import StyledFilePicker from "../styled/StyledFilePicker";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function FileUploadSection(props) {
    const {setSelectedImages} = props;

    return(
        <section>
            <StyledContentArea
                width="1400px"
                flexDirection="column"
                justify="center"
                margin="15px auto">
                <StyledSubHeading>Start by choosing the directory containing your references:</StyledSubHeading>
                <StyledFilePicker onChange={(e) => setSelectedImages(e)} />
            </StyledContentArea>
        </section>
    )
}