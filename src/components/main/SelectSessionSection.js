import StyledContentArea from "../styled/StyledContentArea";
import StyledSubHeading from "../styled/StyledSubHeading";

export default function SelectSessionSection (props) {
    return(
        <section>
            <StyledContentArea
                width="1400px"
                margin="15px auto"
                flexDirection="column"
                justify="center">
                <StyledSubHeading>Construct Your Session:</StyledSubHeading>
            </StyledContentArea>
        </section>
    )
}