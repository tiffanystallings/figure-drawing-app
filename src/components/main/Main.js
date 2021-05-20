import FileUploadSection from "./FileUploadSection";
import StyledContentParent from "../styled/StyledContentParent";
import FilePreviewSection from "./FilePreviewSection";
import { useState } from "react";

export default function Main(props) {
    const [images, setSelectedImages] = useState([]);

    return(
        <main>
            <StyledContentParent flexDirection="column">
                <FileUploadSection setSelectedImages={setSelectedImages} />
                <FilePreviewSection images={images} />
            </StyledContentParent>
        </main>
    )
}