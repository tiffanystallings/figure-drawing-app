import { useCallback, useState } from "react";
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

export default function SelectSessionSection ({images, startSession}) {
    const [sessionList, setSessionList] = useState([]);
    const [sessionOptions, setSessionOptions] = useState([
        { name: '30 seconds', unlimited: false, seconds: 30, value: 0 },
        { name: '1 minute', unlimited: false, seconds: 60, value: 0 },
        { name: '2 minutes', unlimited: false, seconds: 120, value: 0 },
        { name: '3 minutes', unlimited: false, seconds: 180, value: 0 },
        { name: '5 minutes', unlimited: false, seconds: 300, value: 0 },
        { name: '10 minutes', unlimited: false, seconds: 600, value: 0 },
        { name: '15 minutes', unlimited: false, seconds: 900, value: 0 },
        { name: '20 minutes', unlimited: false, seconds: 1200, value: 0 },
        { name: 'Unlimited', unlimited: true, seconds: 9999, value: 0 }
    ]);

    const handleSessionChange = (e, session) => {
        if (e === -1) {
            let sessionListClone = [...sessionList];
            let idx = _.findLastIndex(sessionListClone, s => s.seconds === session.seconds);
            sessionListClone.splice(idx, 1);
            setSessionList(sessionListClone);
        } else if (e === 1) {
            setSessionList([...sessionList, {id: _.uniqueId(), ...session}]);
        }

        let sessionOptionsClone = [...sessionOptions];
        sessionOptionsClone[_.findIndex(sessionOptionsClone, option => option.seconds === session.seconds)]
             .value += e
        setSessionOptions(sessionOptionsClone);
    }

    const handleRemove = (session) => {
        let sessionListClone = [...sessionList];
        let sessionOptionsClone = [...sessionOptions];

        _.remove(sessionListClone, s => s.id === session.id);
        sessionOptionsClone[_.findIndex(sessionOptionsClone, option => option.seconds === session.seconds)]
            .value--;
        
        setSessionList(sessionListClone);
        setSessionOptions(sessionOptionsClone);
    }

    const handleRemoveAll = () => {
        setSessionList([]);
        setSessionOptions(_.map(sessionOptions, option => ({...option, value: 0})));
    }

    const handleDrag = useCallback((dragIdx, hoverIdx) => {
        let sessionListClone = [...sessionList];
        let dragCard = sessionListClone[dragIdx];

        sessionListClone.splice(dragIdx, 1);
        sessionListClone.splice(hoverIdx, 0, dragCard);

        setSessionList(sessionListClone);
    }, [sessionList]);

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
            onDrag={(dragIdx, hoverIdx) => handleDrag(dragIdx, hoverIdx)}
        >
            { session.name }
        </StyledDraggableCard>
    ))

    return(
        <section>
            <StyledContentArea
                width="1400px"
                margin="15px auto"
                flexDirection="column"
                justify="center">
                <StyledSubHeading>Construct Your Session:</StyledSubHeading>

                <StyledContentArea
                    margin="0"
                    padding="0"
                    width="1000px">
                    <StyledContentArea
                        width="40%"
                        margin="0"
                        flexDirection="column">
                        <SessionSelectorList />
                    </StyledContentArea>

                    <StyledAlternateContentArea
                        width="60%"
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
                    width="1000px"
                    margin="0"
                    padding="0"
                    justify="space-between">
                        <span>Total Time: {getTotalTime()}</span>
                        <StyledLink onClick={() => handleRemoveAll()}>Remove All</StyledLink>
                </StyledContentArea>

                <StyledContentArea
                    width="1000px"
                    margin="0"
                    padding="10px 0"
                    justify="center">
                    <StyledButton 
                        disabled={!sessionList.length || !images.length} 
                        onClick={() => startSession(images, sessionList)}
                    >
                        Click to begin practice session!
                    </StyledButton>
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}