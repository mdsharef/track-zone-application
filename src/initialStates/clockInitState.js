export const clockInitState = {
    id: '',
    title: '',
    timezone: {
        type: '',
        offset: ''
    },
    date_utc: null,
    date: null,
    events: [],
}

export const localClockInitState = {
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
}