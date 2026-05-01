const CustomLegend = (props) => {
    const { payload, isHovered  } = props;

    return (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {payload.map((entry, index) => (

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
                    {/* rond coloré */}
                    <div
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: isHovered ? "#0B23F4" : entry.color,
                            transition: "background-color 0.3s ease"
                            }}
                    />

                    {/* texte */}
                    <span>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};
export default CustomLegend;