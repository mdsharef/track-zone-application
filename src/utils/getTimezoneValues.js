const getTimezoneValues = (obj) => {
    return ([
        {
            text: 'Select',
            value: '',
        }, 
        {
            text: 'UTC',
            value: 'UTC',
        }, 
        {
            text: 'GMT',
            value: 'GMT',
        },
        ...Object.keys(obj).reduce((acc, cur) => {
            acc.push({text: cur, value: cur})
            return acc;
        }, [])])
}

export default getTimezoneValues;

