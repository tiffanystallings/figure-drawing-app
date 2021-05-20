import StyledContentArea from "../styled/StyledContentArea";
import StyledFilePicker from "../styled/StyledFilePicker";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function FileUploadSection(props) {

    return(
        <section>
            <StyledContentArea
                flexDirection="column"
                justify="center"
                margin="0"
                padding="0">
                <StyledSubHeading>Start by choosing the directory containing your references:</StyledSubHeading>
                <StyledFilePicker onChange={(e) => console.log(e)} />
            </StyledContentArea>
        </section>
    )
}