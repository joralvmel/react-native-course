import {useCounter} from '../hooks/useCounter';

export const Counter = () => {
const {count, increment, decrement} = useCounter();


    return (
        <>
            <h3 className="text-2xl">Counter: <small className="font-bold">{count}</small> </h3>
            <div>
                <button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700" onClick={()=>increment()}>+1</button>
                <button className="p-2 bg-red-500 rounded-xl w-10 mx-2 text-white hover:bg-red-700" onClick={()=>decrement()}>-1</button>
            </div>
        </>
    )
};
