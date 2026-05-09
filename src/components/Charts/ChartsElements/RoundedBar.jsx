/**
 * Rounded Bar paths for charts
 * @param x
 * @param y
 * @param width
 * @param height
 * @param radius
 * @returns {`
        M${string},${*}
        V${*}
        A${number},${number} 0 0 1 ${*},${string}
        H${number}
        A${number},${number} 0 0 1 ${*},${*}
        V${number}
        A${number},${number} 0 0 1 ${number},${*}
        H${*}
        A${number},${number} 0 0 1 ${string},${number}
        Z
    `}
 */
const getRoundedBarPath = (x, y, width, height, radius) => {
    const r = Math.min(radius, width / 2, height / 2);

    return `
        M${x},${y + height}
        V${y + r}
        A${r},${r} 0 0 1 ${x + r},${y}
        H${x + width - r}
        A${r},${r} 0 0 1 ${x + width},${y + r}
        V${y + height - r}
        A${r},${r} 0 0 1 ${x + width - r},${y + height}
        H${x + r}
        A${r},${r} 0 0 1 ${x},${y + height - r}
        Z
    `;
};
/**
 * Return rounded bar for char in dashboard
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
const RoundedBar = (props) => {
    const { x, y, width, height, isHovered, barColorHovered } = props;

    const safe = (v) => (typeof v === "number" ? v : 0);

    return (
        <path
            d={getRoundedBarPath(
                safe(x),
                safe(y),
                safe(width),
                safe(height),
                100
            )}
            fill={isHovered ? barColorHovered : props.fill}

        />
    );
};

export default RoundedBar;