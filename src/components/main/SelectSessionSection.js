import StyledAlternateContentArea from "../styled/StyledAlternateContentArea";
import StyledContentArea from "../styled/StyledContentArea";
import StyledSelector from "../styled/StyledSelector";
import StyledSubHeading from "../styled/StyledSubHeading";
import _ from "lodash";
import StyledDraggableCard from "../styled/StyledDraggableCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import StyledLink from "../styled/StyledLink";
import StyledButton from "../styled/StyledButton";
import { connect } from "react-redux";
import { 
    addSession, 
    changeValue, 
    moveSession, 
    removeAllSessions, 
    removeSession, 
    removeLast,
    resetAll
} from "../../redux/reducers";

function SelectSessionSection (props) {
    const {
        images,
        addSession,
        removeSession,
        removeLast,
        moveSession,
        removeAllSessions,
        sessionOptions,
        changeValue,
        resetAllOptions,
        sessionList
    } = props;

    const handleSessionChange = (e, session) => {
        if (e === -1) {
            removeLast(session);
        } else if (e === 1) {
            addSession(session);
        }

        changeValue(session, e);
    }

    const handleRemove = (session) => {
        removeSession(session);
        changeValue(session, -1);
    }

    const handleRemoveAll = () => {
        removeAllSessions();
        resetAllOptions();
    }

    const getTotalTime = () => {
        if(_.some(sessionList, session => !!session.unlimited)) {
            return 'Unlimited';
        } else if(sessionList.length === 0) {
            return 0;
        } else {
            let totalSeconds = _.reduce(sessionList, (sum, session) => sum + session.seconds, 0);
            let minutes = `${!!Math.floor(totalSeconds / 60) ? `${Math.floor(totalSeconds / 60)} minute(s)` : ''}`;
            let seconds = `${!!totalSeconds % 60 ? `${totalSeconds % 60} seconds` : ''}`;

            return `${minutes}${(!!minutes && !!seconds) ? ', ' : '' }${seconds}`;
        }
    }

    const SessionSelectorList = () => _.map(sessionOptions, session => (
        <StyledSelector 
            name={session.name} 
            key={session.name}
            unlimited={session.unlimited}
            value={session.value}
            onValueChange={e => handleSessionChange(e, session)}
        />
    ))

    const CardList = () => _.map(sessionList, (session, index) => (
        <StyledDraggableCard
            key={session.id}
            id={session.id}
            index={index}
            onRemove={() => handleRemove(session)}
            onDrag={(dragIdx, hoverIdx) => moveSession(dragIdx, hoverIdx)}
        >
            { session.name }
        </StyledDraggableCard>
    ))

    return(
        <section>
            <StyledContentArea
                margin="30px 0"
            >
                <StyledContentArea
                    width="1400px"
                    margin="15px auto"
                    flexDirection="column"
                    justify="center">
                    <StyledSubHeading>Construct Your Session:</StyledSubHeading>

                    <StyledContentArea
                        margin="0"
                        padding="0"
                        width="1300px">
                        <StyledContentArea
                            width="30%"
                            margin="0"
                            flexDirection="column">
                            <SessionSelectorList />
                        </StyledContentArea>

                        <StyledAlternateContentArea
                            width="70%"
                            margin="0"
                            padding="5px"
                            maxHeight="290px"
                            flexDirection="column">
                            <DndProvider backend={HTML5Backend}>
                                <CardList />
                            </DndProvider>
                        </StyledAlternateContentArea>
                    </StyledContentArea>

                    <StyledContentArea
                        width="1300px"
                        margin="0"
                        padding="0"
                        justify="space-between">
                            <span>Total Time: {getTotalTime()}</span>
                            <StyledLink onClick={() => handleRemoveAll()}>Remove All</StyledLink>
                    </StyledContentArea>

                    <StyledContentArea
                        width="1300px"
                        margin="0"
                        padding="10px 0"
                        justify="center">
                        <StyledButton
                            disabled={!sessionList.length || !images.length}
                            to={{ pathname: '/session', state: {images, sessionList}}} 
                        >Click here to start your practice session!</StyledButton>
                    </StyledContentArea>
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}

const mapStateToProps = (state) => ({
    images: state.images,
    sessionList: state.sessionList,
    sessionOptions: state.sessionOptions
});

const mapDispatchToProps = (dispatch) => ({
    addSession: (session) => dispatch(addSession(session)),
    removeSession: (session) => dispatch(removeSession(session)),
    removeLast: (session) => dispatch(removeLast(session)),
    moveSession: (grabIdx, hoverIdx) => dispatch(moveSession([grabIdx, hoverIdx])),
    removeAllSessions: () => dispatch(removeAllSessions()),
    changeValue: (session, valueChange) => dispatch(changeValue([session, valueChange])),
    resetAllOptions: () => dispatch(resetAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSessionSection);