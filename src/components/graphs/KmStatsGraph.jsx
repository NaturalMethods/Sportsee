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
import RoundedBar from "./RoundedBar.jsx";
import CustomLegend from "./CustomLegend.jsx";
import "../../css/graphs/KmStatsGraph.css"

import {format2DigitDate} from "../../utils/utils.jsx";

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