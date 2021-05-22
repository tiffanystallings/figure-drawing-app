import FileUploadSection from "./FileUploadSection";
import StyledContentParent from "../styled/StyledContentParent";
import FilePreviewSection from "./FilePreviewSection";
import { useState } from "react";
import SelectSessionSection from "./SelectSessionSection";
import { withTheme } from "styled-components";
import Header from "./Header";
import { withRouter } from "react-router";
import Introduction from "./Introduction";


function Main({theme}) {
    const [images, setSelectedImages] = useState([]);

    return(
        <main style={{backgroundColor: theme?.body?.bg}}>
            <Header />
            <StyledContentParent flexDirection="column">
                <Introduction />
                <FileUploadSection setSelectedImages={setSelectedImages} images={images} />
                <FilePreviewSection setSelectedImages={setSelectedImages} images={images} />
                <SelectSessionSection images={images} />
            </StyledContentParent>
        </main>
    )
}

export default withRouter(withTheme(Main));