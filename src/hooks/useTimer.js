import { addSeconds } from "date-fns";
import { useEffect, useState } from "react"

const useTimer = (date) => {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setTimer(date)
    }, [date]);

    let timerID = null;
    useEffect(() => {
        if(!timer || timerID !== null) return;

        timerID = setInterval(() => {
            setTimer(addSeconds(timer, 1))
        }, 1000)

        return () => clearInterval(timerID);
    }, [timer])

    return timer;
}

export default useTimer;