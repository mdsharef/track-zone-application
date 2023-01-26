import styled, { keyframes } from "styled-components";

const Container = styled.div`
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    background: #2f363e;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    border-top-left-radius: 112px;
    border-top-right-radius: 112px;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75), 
    10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Clock = styled.div`
    position: relative;
    width: 225px;
    height: 225px;
    background: #2f363e;
    border-radius: 50%;
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    &::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background: #2f363e;
        border: 2px solid #fff;
        border-radius: 50%;
        z-index: 100000;
    }
`;

const Circle = styled.div`
    position: absolute;
    width: ${props => props.width ? props.width : '150px'};
    height: ${props => props.height ? props.height : '150px'};
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform: rotateZ(${props => props.rotateZ}deg);
    z-index: ${props => props.zIndex ? props.zIndex : 10};
    &::before {
        content: '';
        position: absolute;
        top: -5.5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${props => props.background};
        box-shadow: 0 0 20px ${props => props.background},
        0 0 60px ${props => props.background};
    }
    & > i {
        position: absolute;
        width: ${props => props.childWidth ? props.childWidth : '4px'};
        height: 50%;
        background: ${props => props.background};
        opacity: 0.75;
        transform-origin: bottom;
        transform: scaleY(0.5);
    }
`;

const Span = styled.span`
    position: absolute;
    inset: 10px;
    color: #fff;
    text-align: center;
    transform: rotate(calc(30deg * ${props => props.rotation}));
    & > b {
        font-size: 1em;
        opacity: 0.25;
        font-weight: 550;
        display: inline-block;
        transform: rotate(calc(-30deg * ${props => props.rotation}));
    }
`;

const ssAnimation = keyframes`
    0% {
        opacity: 1;
    } 50% {
        opacity: 0;
    }
`

const TimeElement = styled.div`
    position: relative;
    width: 45px;
    text-align: center;
    font-weight: 450;
    color: ${props => props.color};
    &:last-child {
        font-size: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    &:nth-child(1)::after {
        content: ':';
        position: absolute;
        right: -5px;
    };
    &:nth-child(2)::after {
        content: ':';
        position: absolute;
        right: -5px;
        animation: ${ssAnimation} 1s steps(1) infinite;
    };
`;

const Time = styled.div`
    margin-bottom: 8px;
    display: flex;
    padding: 8px 16px;
    font-size: 1.5em;
    font-weight: 500;
    border: 1.5px solid rgba(0,0,0,0.5);
    border-radius: 35px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
`;

const Title = styled.h4`
    color: #fff;
    font-size: 1.8em;
    font-weight: 400;
    margin-top: 15px;
`;

const ClockUI = ({ day, title='Clock One', offset='5', timezone='GMT', children }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * 6;
    const ss = date.getSeconds() * 6;

    let h = date.getUTCHours();
    let m = date.getUTCMinutes();
    let s = date.getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    if(h > 12) {
        h = h - 12;
    }
    
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    return (
        <Container>
            <Clock>
                <Circle background={'#04fc43'} childWidth={'1.8px'} rotateZ={ss}><i></i></Circle>
                <Circle width="120px" height="120px" background={'#fee800'} zIndex={9} childWidth={'3px'} rotateZ={mm}><i></i></Circle>
                <Circle width="90px" height="90px" background={'#ff2972'} zIndex={8} rotateZ={hh + (mm/12)}><i></i></Circle>
                {arr.map((item, index) => <Span key={`key-${item}-index-${index}`} rotation={item}><b>{item}</b></Span>)}
            </Clock>
            <Time>
                <TimeElement color={'#ff2972'} context='hr'>{h}</TimeElement>
                <TimeElement color={'#fee800'} context='mm'>{m}</TimeElement>
                <TimeElement color={'#04fc43'} context='ss'>{s}</TimeElement>
                <TimeElement context='ampm'>{am}</TimeElement>
            </Time>
            <p>{timezone}{offset > 0 ? `+${Math.abs(offset)}` : `-${Math.abs(offset)}`}</p>
            
            {children}

            <Title>{title}</Title>

        </Container>
    )
};

export default ClockUI;