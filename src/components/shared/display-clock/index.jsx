import { format } from "date-fns";

const DisplayClock = ({date, title, timezone, offset}) => {
    return (
        <div>
            <h1>Title - {title}</h1>
            <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
            <p>{timezone}{offset > 0 ? `+${Math.abs(offset)}` : `-${Math.abs(offset)}`}</p>
        </div>
    )
};

export default DisplayClock;