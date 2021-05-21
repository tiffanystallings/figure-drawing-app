import { useState } from "react";
import StyledAlternateContentArea from "../styled/StyledAlternateContentArea";
import StyledContentArea from "../styled/StyledContentArea";
import StyledSelector from "../styled/StyledSelector";
import StyledSubHeading from "../styled/StyledSubHeading";
import _ from "lodash";

export default function SelectSessionSection (props) {
    const [sessionList, setSessionList] = useState([]);

    const sessionOptions = [
        { name: '30 seconds', unlimited: false, seconds: 30 },
        { name: '1 minute', unlimited: false, seconds: 60 },
        { name: '2 minutes', unlimited: false, seconds: 120 },
        { name: '3 minutes', unlimited: false, seconds: 180 },
        { name: '5 minutes', unlimited: false, seconds: 300 },
        { name: '10 minutes', unlimited: false, seconds: 600 },
        { name: '15 minutes', unlimited: false, seconds: 900 },
        { name: '20 minutes', unlimited: false, seconds: 1200 },
        { name: 'Unlimited', unlimited: true, seconds: 9999 }
    ]

    const handleSessionChange = (e, session) => {
        console.log(e, session);
    }

    const SessionSelectorList = () => _.map(sessionOptions, session => (
        <StyledSelector 
            name={session.name} 
            value={0}
            key={session.name}
            unlimited={session.unlimited}
            onChange={e => handleSessionChange(e, session)}
        />
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
                        flexDirection="column">
                        {/* Reorderable table of selections */}
                    </StyledAlternateContentArea>
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}