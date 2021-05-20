import FileUploadSection from "./FileUploadSection";
import StyledContentArea from "../styled/StyledContentArea";
import StyledContentParent from "../styled/StyledContentParent";
import FilePreviewSection from "./FilePreviewSection";

export default function Main(props) {
    return(
        <main>
            <StyledContentParent flexDirection="column">
                <StyledContentArea 
                    width="1400px" 
                    height="500px" 
                    flexDirection="column" 
                    justify="center">
                    <FileUploadSection />
                    <FilePreviewSection />
                </StyledContentArea>
            </StyledContentParent>
        </main>
    )
}