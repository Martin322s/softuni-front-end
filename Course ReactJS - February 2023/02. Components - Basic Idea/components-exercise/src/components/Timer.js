// import { useState } from "react";

export const Timer = (props) => {
    // const [seconds, setSeconds] = useState(props.start);

    // Not food practice !== Use useEffect Instead of setTimeout
    // setTimeout(() => {
        // setSeconds(seconds => seconds + 1);
    // }, 1000);

    return (
        <div>Time: {props.seconds}</div>
    );
}