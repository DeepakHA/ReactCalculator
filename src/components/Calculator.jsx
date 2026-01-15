import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
    function handleClick(label) {
        console.log("Button clicked:", label);
    }

    function handleClear() {
        console.log("Clear button clicked");
    }

    function handleCalculate() {
        console.log("Calculate button clicked");
    }

    return (
        <div className="calculator">
            <Display value={0} />

            <div className="buttons">
                {['%', 'CE', 'C', 'DEL',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['7', '8', '9', '/',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['4', '5', '6', '*',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['1', '2', '3', '-',].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                {['0', '.', '+'].map(item => (
                    <Button key={item} label={item} onClick={handleClick} />
                ))}

                <Button label="=" onClick={handleCalculate} />

            </div>
        </div>
    )
}