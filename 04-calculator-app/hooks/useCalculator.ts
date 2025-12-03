import {useEffect, useRef, useState} from "react";

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '÷',
}


export const useCalculator = () => {
    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    // const lastOperation = useRef<Operator>();

    useEffect(() => {
        // TODO: calculate sub result
        setFormula(number);
    }, [number]);

    const buildNumber = (numberString:string) => {
        if (number.includes('.') && numberString === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }

        }

        setNumber(number + numberString)
    }

    return {
        formula,
        number,
        prevNumber,

        buildNumber,
    }
}
