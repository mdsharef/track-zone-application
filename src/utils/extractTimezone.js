const extractTimezone = (date) => {
    const dateStrArr = date.toUTCString().split(' ');
    return dateStrArr.pop();
}

export default extractTimezone;