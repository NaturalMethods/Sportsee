import "../../../css/ChartsElements/CustomLegend.css"

/**
 * Custom legend for KM Charts
 * @param props
 * @returns {React.JSX.Element|null}
 * @constructor
 */
const CustomLegend = (props) => {
    let {payload, isHovered, barColorHovered} = props;

    if (!payload || payload.length === 0) return null;

    const hasMaxBpm = payload.some(p => p.dataKey === "maxbpm");

    let orderedPayload = [...payload];

    if (hasMaxBpm && orderedPayload.length >= 2) {
        [orderedPayload[0], orderedPayload[1]] =
            [orderedPayload[1], orderedPayload[0]];
    }

    return (
        <div className="customlegend flex-row">

            {orderedPayload.map((entry, index) => {

                const isLine = entry.dataKey === "avgBpm";

                return (
                    <div key={`item-${index}`} className="customlegend-text">

                        {isLine ? (
                            // Line with dots
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
                            // Round
                            <div
                                className="customlegend-round"
                                style={{
                                    backgroundColor: isHovered ? barColorHovered : entry.color
                                }}
                            />
                        )}

                        {/* Text */}
                        <span>{entry.value}</span>
                    </div>
                );
            })}
        </div>
    );
};
export default CustomLegend;