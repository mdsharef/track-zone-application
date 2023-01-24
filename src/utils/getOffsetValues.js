const getOffsetValues = (text, start=-11.5, end=12) => {
    const offsetArr = [{text: 'Select', value: ''}];
    for(let i = start; i <= end; i += 0.5) {
        offsetArr.push({text: `${text} ${i > 0 ? `(+${i})` : `(${i})`}`, value: i});
    }
    return offsetArr;
}

export default getOffsetValues;