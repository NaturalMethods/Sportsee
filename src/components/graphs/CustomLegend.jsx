const CustomLegend = (props) => {
    let { payload, isHovered, barColorHovered } = props;

    if (!isHovered) isHovered = false;

    return (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>

            {payload.map((entry, index) => {

                const isLine = entry.dataKey === "avgBpm";

                return (
                    <div
                        key={`item-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "Inter, sans-serif",
                            color: "black"
                        }}
                    >

                        {/* ICON */}
                        {isLine ? (
                            // 🔵 LINE + DOT (moyenne)
                            <svg width="26" height="10" viewBox="0 0 26 10">
                                {/* ligne gauche */}
                                <line
                                    x1="0"
                                    y1="5"
                                    x2="10"
                                    y2="5"
                                    stroke={entry.color}
                                    strokeWidth="2"
                                />

                                {/* rond */}
                                <circle
                                    cx="13"
                                    cy="5"
                                    r="3"
                                    fill={entry.color}
                                />

                                {/* ligne droite */}
                                <line
                                    x1="16"
                                    y1="5"
                                    x2="26"
                                    y2="5"
                                    stroke={entry.color}
                                    strokeWidth="2"
                                />
                            </svg>
                        ) : (
                            // 🔴 BAR (simple rond)
                            <div
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    backgroundColor: isHovered
                                        ? barColorHovered
                                        : entry.color,
                                    transition: "background-color 0.3s ease"
                                }}
                            />
                        )}

                        {/* TEXT */}
                        <span>{entry.value}</span>
                    </div>
                );
            })}

        </div>
    );
};

export default CustomLegend;