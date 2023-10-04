import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseHandler = () => setCount(count => count + 1);
    const decreseHanlder = () => setCount(count => count - 1);
    const resetHandler = () => setCount(0);

    return (
        <>
            <h3>Count: {count < 0 ? 'Count can\'t be less than zero!' : count}</h3>
            <button 
                onClick={() => increaseHandler()}
                style={{ marginRight: '5px', cursor: 'pointer' }}
            >
                Increase
            </button>

            <button 
                style={{ marginRight: '5px', cursor: 'pointer' }}
                onClick={() => decreseHanlder()} 
                disabled={count < 0 ? true : false}
            >
                Decrease
            </button>

            <button 
                onClick={() => resetHandler()}
                style={{ cursor: 'pointer' }}
            >
                Reset
            </button>
        </>
    );
}