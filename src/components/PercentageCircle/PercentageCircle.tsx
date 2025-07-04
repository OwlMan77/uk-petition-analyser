import './PercentageCircle.css';

interface Props {
    percentage: number;
}

const PercentageCircle = ({percentage = 100 }: Props) => {
    return (
        <svg width="175" height="175" viewBox="0 0 36 36">
            <circle
                cx="18" 
                cy="18" 
                r="15.91549431" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="3"
                strokeDasharray="100, 100"
                strokeDashoffset={100 - percentage}
                />

                <text fill='#fff' x="6" y="20" fontSize="7px" >{percentage.toFixed(2)} %</text>
        </svg>
    );
}

export default PercentageCircle;