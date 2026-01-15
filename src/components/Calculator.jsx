import Display from "./Display";
import Button from "./Button";
import { useState } from "react";

export default function Calculator() {
    const [previous, setPrevious] = useState("");
    const [current, setCurrent] = useState("");
    const [operator, setOperator] = useState("");

    function handleClearEntry() {
        // Will implement later
        console.log("Clear Entry button clicked");
    }

    function handleDelete() {
        setCurrent((prev) => prev.slice(0, -1));
    }

    function handleClick(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            setPrevious(current);
            setCurrent("");
            setOperator(value);
        } else {
            setCurrent((prev) => prev + value);
        }
    }

    function handleClear() {
        setPrevious("");
        setOperator("");
        setCurrent("");
    }

    function handleCalculate() {
        if (!previous || !current || !operator) return;

        const a = Number(previous);
        const b = Number(current);

        let result;
        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = b === 0 ? "Error" : a / b;
                break;
            default:
                return;
        }

        setCurrent(result.toString());
        setPrevious("");
        setOperator("");
    };
    return (
        <div className="calculator">
            <Display previous={previous} current={current} operator={operator} />

            <div className="buttons">
                <Button key="CE" label="CE" onClick={handleClearEntry} />
                <Button key="C" label="C" onClick={handleClear} />
                <Button key="DEL" label="DEL" onClick={handleDelete} />
                <Button key="/" label="/" onClick={handleClick} />

                {['7', '8', '9', '*',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['4', '5', '6', '-',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['1', '2', '3', '+'].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['0', '.',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                <Button className="btnEqual" label="=" onClick={handleCalculate} />

            </div>
        </div>
    )
}