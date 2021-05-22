import { useCallback, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function Timer(props) {
    const {session, paused, handleNext} = props;
    const [expired, setExpired] = useState(false);

    const getTime = useCallback((seconds) => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds);
        return time;
    }, [])

    const handleExpire = () => {
        if (!expired) {
            setExpired(true);
        }
    }

    useEffect(() => {
        if (expired) {
            handleNext();
        }
    // eslint-disable-next-line    
    }, [expired]);

    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
        resume,
        restart,
        isRunning,
    } = useTimer({ expiryTimestamp: getTime(session?.seconds), onExpire: () => handleExpire() });

    
    useEffect(() => {
        if (!!session?.seconds) {
            if (!isRunning && !expired) {
                start()
            } else {
                restart(getTime(session?.seconds));
                setExpired(false);
            }
        } else {
            pause();
        }
    // eslint-disable-next-line
    }, [session.id]);

    useEffect(() => {
        if (paused) {
            pause();
        } else if (!paused && !isRunning) {
            resume();
        }
    }, [paused, pause, resume, isRunning]);

    return(<div style={{ color: 'white', position: 'absolute', top: 0, right: 0}}>{hours}:{minutes}:{seconds}</div>)

}