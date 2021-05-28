import FileUploadSection from "./FileUploadSection";
import StyledContentParent from "../styled/StyledContentParent";
import FilePreviewSection from "./FilePreviewSection";
import SelectSessionSection from "./SelectSessionSection";
import { withTheme } from "styled-components";
import Header from "./Header";
import { withRouter } from "react-router";
import Introduction from "./Introduction";


function Main({theme}) {
    return(
        <main style={{backgroundColor: theme?.body?.bg, backgroundImage: 'url("/background.png")'}}>
            <Header />
            <StyledContentParent flexDirection="column">
                <Introduction />
                <FileUploadSection />
                <FilePreviewSection />
                <SelectSessionSection />
            </StyledContentParent>
        </main>
    )
}

export default withRouter(withTheme(Main));