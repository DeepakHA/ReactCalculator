import Display from "./Display";
import Button from "./Button";
import { useState } from "react";

export default function Calculator() {
    const [expression, setExpression] = useState("");

    function handleClearEntry() {
        // Will implement later
        console.log("Clear Entry button clicked");
    }

    function handleDelete() {
        setExpression((prev) => prev.slice(0, -1));
    }

    function handleClick(value) {
        setExpression((prev) => prev + value);
    }

    function handleClear() {
        setExpression("");
    }

    function handleCalculate() {
       const result = eval(expression);
       setExpression(result.toString());
    }

    return (
        <div className="calculator">
            <Display value={expression || "0"} />

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