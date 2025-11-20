import {useState} from "react";

export  const useCounter = () => {
    const [count, setCount] = useState<number>(10);

    const increment = (value:number=1) => {
        setCount(count + value);
    }

    const decrement = (value:number=1) => {
        if (count - value < 0) return;
        setCount(count - value);
    }

    return {count, increment, decrement}
};
