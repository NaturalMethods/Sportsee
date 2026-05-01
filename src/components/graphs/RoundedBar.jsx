
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
const RoundedBar = (props) => {
    const { x, y, width, height, isHovered  } = props;

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
            fill={isHovered ? "#0B23F4" : props.fill}

        />
    );
};

export default RoundedBar;