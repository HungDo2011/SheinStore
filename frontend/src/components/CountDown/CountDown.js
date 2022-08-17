import FlipCountdown from '@rumess/react-flip-countdown';

function CountDown({ size, theme }) {
    return (
        <FlipCountdown
            theme={theme}
            size={size}
            hideYear
            hideMonth
            hideDay
            endAtZero
            endAt={'2022-12-12 01:26:58'} // Date/Time
        />
    );
}

export default CountDown;
