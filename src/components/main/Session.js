import { useCallback, useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router";
import StyledControlBar from "../styled/StyledControlBar";
import StyledControlIcon from "../styled/StyledControlIcon";
import StyledSessionContainer from "../styled/StyledSessionContainer";
import StyledSessionImage from "../styled/StyledSessionImage";
import Timer from "./Timer";

function Session (props) {
    const {location} = props;
    const {sessionList, images} = location.state;

    const clonedImages = useMemo(() => [...images], [images]);
    const usedImages = useMemo(() => [], []);

    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentSession, setCurrentSession] = useState(null);
    const [paused, setPaused] = useState(false);

    const addNextImage = useCallback(() => {
        let idx = Math.floor(Math.random() * clonedImages.length);
        usedImages.push(clonedImages.splice(idx, 1)[0]);
    }, [clonedImages, usedImages]);

    useEffect(() => {
        addNextImage();
        setCurrentIndex(0);
    }, [addNextImage, setCurrentIndex]);

    useEffect(() => {
        if (usedImages[currentIndex]) {
            setCurrentImage(usedImages[currentIndex].src);
        }

        if (sessionList[currentIndex]) {
            setCurrentSession(sessionList[currentIndex])
        }
    }, [currentIndex, setCurrentImage, usedImages, sessionList]);

    const onNext = () => {
        if (!clonedImages.length) {
            // Reload clonedImages if we're out
            clonedImages.push(...images);
        }

        if (currentIndex === usedImages.length - 1) {
            // We're at the end of usedImages
            addNextImage();
        }
            
        setCurrentIndex(currentIndex + 1);
    }

    const onPrev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return(
        <StyledSessionContainer>
            <StyledSessionImage src={currentImage} />
            <StyledControlBar>
                <StyledControlIcon disabled={currentIndex === 0} onClick={onPrev}>⧏</StyledControlIcon>
                <StyledControlIcon onClick={onNext}>⧐</StyledControlIcon>
            </StyledControlBar>
            { (!!currentSession && !currentSession?.unlimited) && (<Timer session={currentSession} paused={paused} handleNext={onNext} />) }
        </StyledSessionContainer>
    )
}

export default withRouter(Session);