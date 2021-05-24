import { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";
import StyledControlBar from "../styled/StyledControlBar";
import StyledControlIcon from "../styled/StyledControlIcon";
import StyledSessionContainer from "../styled/StyledSessionContainer";
import StyledSessionImage from "../styled/StyledSessionImage";
import Timer from "./Timer";

function Session (props) {
    const {sessionList, images} = props;
    const history = useHistory();

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

    const endSession = () => {
        // TODO: Replace with confirmation modal
        history.push('/');
    }

    const onNext = () => {
        if (currentIndex !== sessionList.length - 1) {
            if (!clonedImages.length) {
                // Reload clonedImages if we're out
                clonedImages.push(...images);
            }
    
            if (currentIndex === usedImages.length - 1) {
                // We're at the end of usedImages
                addNextImage();
            }

            if (paused) {
                setPaused(false);
            }

            setCurrentIndex(currentIndex + 1);
        } else {
            endSession();
        }
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
                <StyledControlIcon disabled={currentIndex === 0} onClick={onPrev}>⏮</StyledControlIcon>
                <StyledControlIcon disabled={paused} onClick={() => setPaused(true)}>⏸</StyledControlIcon>
                <StyledControlIcon disabled={!paused} onClick={() => setPaused(false)}>⏵</StyledControlIcon>
                <StyledControlIcon onClick={endSession}>■</StyledControlIcon>
                <StyledControlIcon disabled={currentIndex === sessionList.length -1} onClick={onNext}>⏭</StyledControlIcon>
            </StyledControlBar>
            { (!!currentSession && !currentSession?.unlimited) && (<Timer session={currentSession} paused={paused} handleNext={onNext} />) }
        </StyledSessionContainer>
    )
}

const mapStateToProps = (state) => ({
    images: state.images,
    sessionList: state.sessionList
});

export default connect(mapStateToProps, null)(withRouter(Session));