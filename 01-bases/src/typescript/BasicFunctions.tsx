const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
}

export const BasicFunctions = () => {
    return (
        <>
            <h3>Functions</h3>
            <span>2 + 3 = {addTwoNumbers(2, 3)}</span>
        </>
    )
};
