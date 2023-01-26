import ClockUI from "../../ui/ClockUI";

const DisplayClock = ({date, title, timezone, offset, children}) => {
    return (
        <div>
            {/* <h1>Title - {title}</h1>
            <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
            <p>{timezone}{offset > 0 ? `+${Math.abs(offset)}` : `-${Math.abs(offset)}`}</p> */}

            <ClockUI day={date} title={title} timezone={timezone} offset={offset}>
                {children}
            </ClockUI>
        </div>
    )
};

export default DisplayClock;