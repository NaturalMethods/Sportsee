import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import RoundedBar from "../ChartsElements/RoundedBar.jsx";
import CustomLegend from "../ChartsElements/CustomLegend.jsx";

import {format2DigitDate} from "../../../utils/date.jsx";


/**
 * Style CSS for custom tool tip
 * @type {string}
 */
const styles = `
.customToolTip {
    position: absolute;
    align-items: flex-start;
    justify-content: center;

    width: 120px;
    height: 82px;

    transform: translate(-50%, -100%);
    padding: 10px 12px;

    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background-color: var(--txt-black);
}
`;

/**
 * Custom tooltip for the KMStatsGraph which display date range and km for a rounded bar week
 * @param param0
 * @param param0.active
 * @param param0.payload
 * @param param0.coordinate
 * @returns {React.JSX.Element|null}
 * @constructor
 */
const CustomToolTip = ({ active, payload, coordinate }) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;

    return (
        <div
            className="customToolTip flex-col"
            style={{
                left: coordinate.x,
                top: coordinate.y,
            }}
        >
            <p className="body-small lightwhite">
                {format2DigitDate(data.startDate)} au {format2DigitDate(data.endDate)}
            </p>

            <p className="body-large white">
                {data.km} km
            </p>
        </div>
    );
};

/**
 * Return a chart with a 4 weeks range, rounded bars and a custom tooltip
 * @param param0
 * @param param0.isAnimationActive
 * @param param0.defaultIndex
 * @param param0.data
 * @returns {React.JSX.Element}
 * @constructor
 */
const KmStatsGraph = ({ isAnimationActive, defaultIndex, data}) => {

    const barColor = "var(--bar-color)";
    const barColorHovered = "var(--txt-blue)";
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BarChart width={330} height={307}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data={data}
            margin={{ top: 10 }}
        >
            <style>{styles}</style>
            <CartesianGrid  horizontal={true}
                            vertical={false}
                            stroke="var(--grey-grid)"
                            strokeDasharray="3 3"
            />
            <XAxis dataKey="name"
                   tickMargin={15}
                   tickLine={false}
                   tick={{className: "body-small"}}
            />
            <YAxis
                    tickMargin={10}
                    tickLine={false}
                    width={30}
                    domain={[0, 30]}
                    ticks={[0,10,20,30]}
                    tick={{className: "body-caption"}}
            />
            <Tooltip cursor={false}
                     content={<CustomToolTip />}
                     isAnimationActive={isAnimationActive}
                     defaultIndex={defaultIndex}
            />
            <Bar dataKey="km"
                 barSize={14}
                 fill={barColor}
                 shape={(props)=>
                     <RoundedBar {...props}
                                 isHovered={isHovered}
                                 barColorHovered={barColorHovered}
                     />}
            />
            <Legend align="left"
                    content={<CustomLegend isHovered={isHovered}
                                           barColorHovered={barColorHovered}
                             />}
            />
        </BarChart>
    );
};

export default KmStatsGraph;