export default function Display({ previous, current, operator }) {
    return (
        <div className="display">
            <div className="display-previous">
                {previous && operator ? `${previous} ${operator}` : ""}
            </div>
            <div className="display-current">
                {current || 0}
            </div>
        </div>

    );
}