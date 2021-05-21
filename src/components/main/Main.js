import FileUploadSection from "./FileUploadSection";
import StyledContentParent from "../styled/StyledContentParent";
import FilePreviewSection from "./FilePreviewSection";
import { useState } from "react";
import SelectSessionSection from "./SelectSessionSection";

export default function Main(props) {
    const [images, setSelectedImages] = useState([]);

    return(
        <main>
            <StyledContentParent flexDirection="column">
                <FileUploadSection setSelectedImages={setSelectedImages} images={images} />
                <FilePreviewSection setSelectedImages={setSelectedImages} images={images} />
                <SelectSessionSection />
            </StyledContentParent>
        </main>
    )
}