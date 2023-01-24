function * generateID(text='randomID') {
    const randomArr = ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az', 'bb', 'bc', 'dd', 'cc', 'ff', 'ef', 'gf', 'hh', 'uu', 'ui', 'qw', 'we', 'rt', 'ty', 'yu', 'iu', 'io', 'op', 'pl', 'pk', 'jk', 'jh', 'fg', 'df', 'fd', 'ss', 'rr', 'gg', 'tt', 'yy', 'uv', 'ii', 'bv', 'nm', 'mn', 'cm', 'cn', 'xc', 'xv', 'xn', 'xb', 'xm', 'zx', 'zc', 'zr', 'zt', 'za', 'zd', 'zf', 'zh', 'zj', 'zz', 'xx', 'vv']
    let index = 100;
    while(true) {
        yield `${text}-${(Math.floor(Math.random() * 1000)) + index++}-${randomArr[Math.floor(Math.random() * randomArr.length)]}`;
    }
}

const getID = generateID('event');

class TestObj {
    constructor(state={}) {
        this.state = state;
    }

    getEventsByClockID(clockID, isArr=false) {
        if(isArr) {
            return Object.keys(this.state).reduce((acc, cur) => {
                if(cur.startsWith(clockID)) {
                    acc.push(this.state[cur]);
                }
                return acc;
            }, []);
        } else {
            return Object.keys(this.state).reduce((acc, cur) => {
                if(cur.startsWith(clockID)) {
                    acc[cur] = this.state[cur];
                }
                return acc;
            }, {}); 
        }
    }
    
    getEvents(isArr=false) {
        if(!isArr) return this.state;

        return Object.values(this.state);
    }

    addEvent(event) {
        event.id = getID.next().value;

        this.state[`${event.clockID}|${event.id}`] = event;
    }
}

const test = new TestObj();

test.addEvent({
    title: 'Test Event',
    startTime: '2:23 PM',
    endTime: '3:23 PM',
    clockID: 'clock-925-tt'
})
test.addEvent({
    title: 'Test Event two',
    startTime: '1:23 PM',
    endTime: '3:23 PM',
    clockID: 'clock-925-tt'
})

console.log(test.getEventsByClockID('clock-925-tt', true));

// console.log(test.getEvents());