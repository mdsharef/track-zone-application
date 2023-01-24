const mapObject = (obj, cb) => {
    return Object.keys(obj).reduce((acc, cur) => {
        cb(obj, acc, cur)
        return acc;
    }, {})
}

export default mapObject;