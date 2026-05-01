const CustomLegend = (props) => {
    let { payload, isHovered, barColorHovered } = props;

    if (!payload || payload.length === 0) return null;

    // 👉 détecte si maxBpm existe
    const hasMaxBpm = payload.some(p => p.dataKey === "maxbpm");

    // 👉 copie du payload
    let orderedPayload = [...payload];

    // 🔁 swap uniquement si maxBpm présent
    if (hasMaxBpm && orderedPayload.length >= 2) {
        [orderedPayload[0], orderedPayload[1]] =
            [orderedPayload[1], orderedPayload[0]];
    }

    return (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>

            {orderedPayload.map((entry, index) => {

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
                                <line
                                    x1="0"
                                    y1="5"
                                    x2="10"
                                    y2="5"
                                    stroke={entry.color}
                                    strokeWidth="2"
                                />

                                <circle
                                    cx="13"
                                    cy="5"
                                    r="3"
                                    fill={entry.color}
                                />

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