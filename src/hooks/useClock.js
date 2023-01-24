import { addMinutes, addSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { timezoneOffset } from "../constant/timezoneObj";

const useClock = (timezone, offset) => {
    const [localDate, setLocalDate] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [localTimezone, setLocalTimezone] = useState(null);
    const [utc, setUTC] = useState(null);

    let timerID = null;

    useEffect(() => {
        let time = new Date();

        const lo = time.getTimezoneOffset();
        time = addMinutes(time, lo);
        
        setLocalOffset(lo);
        setUTC(time);
    }, []);

    useEffect(() => {
        if(!utc || timerID !== null) return;

        timerID = setInterval(() => {
            setUTC(addSeconds(utc, 1))
        }, 1000);

        return () => clearInterval(timerID);
    }, [utc])

    useEffect(() => {
        if(utc !== null) {
            if(timezone) {
                offset = timezoneOffset[timezone] ?? offset;
                const newUTC = addMinutes(utc, offset * 60);
    
                setLocalDate(newUTC);
            } else {
                const newUTC = addMinutes(utc, -localOffset);
                const lt = newUTC.toUTCString().split(' ').pop();

                setLocalTimezone(lt);
                setLocalDate(newUTC);
            }
        }
    }, [utc, timezone, offset]);

    return {
        date: localDate,
        date_utc: utc,
        offset: offset || -localOffset / 60,
        timezone: timezone || localTimezone,
    }
}

export default useClock;