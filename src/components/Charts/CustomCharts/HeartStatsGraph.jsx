import { useState } from "react";
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ComposedChart, Line
} from 'recharts';
import RoundedBar from "../ChartsElements/RoundedBar.jsx";
import CustomLegend from "../ChartsElements/CustomLegend.jsx";

/**
 * Return a heartrate charts with rounded bars
 * @param param0
 * @param param0.data
 * @returns {React.JSX.Element}
 * @constructor
 */
const HeartStatsGraph = ({data}) => {

    const barColor = "var(--txt-red)";
    const secondBarColor = "var(--txt-lightred)";
    const barColorHovered = "var(--txt-red)";
    const [isHovered, setIsHovered] = useState(false);

    const enrichedData = data.map(item => {
        const values = [item.minbpm, item.maxbpm].filter(v => v !== 0);
        const avgBpm = values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;

        return { ...item, avgBpm };
    });

    return (
        <ComposedChart width={495} height={307}
            onMouseMove={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data={enrichedData}
            margin={{top: 10}}
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
                tickMargin={5}
                tickLine={false}
                width={30}
                domain={[130, 190]}
                ticks={[130,145,160,175,190]}
                tick={{className: "body-caption"}}
                allowDataOverflow={true}
            />
            <Tooltip active={false} />
            <Bar dataKey="minbpm"
                 name = "Min BPM"
                 barSize={14}
                 fill={secondBarColor}
                 shape={(props) =>
                     <RoundedBar {...props}
                                 isHovered={isHovered}
                                 barColorHovered={secondBarColor} />
            } />
            <Bar dataKey="maxbpm"
                 name = "Max BPM"
                 barSize={14}
                 fill={barColor}
                 shape={(props) =>
                     <RoundedBar {...props}
                                 isHovered={isHovered}
                                 barColorHovered={barColorHovered} />
            } />
            <Line
                connectNulls={true}
                type="monotone"
                dataKey="avgBpm"
                stroke={isHovered ? "var(--txt-blue)" : "var(--bg-lightblue)"}
                strokeWidth={2}
                dot={{
                    fill : "var(--txt-blue)",
                    stroke: "var(--txt-blue)",
                    r :2
                }}
                activeDot={{
                    fill :"var(--txt-blue)",
                    stroke: "var(--txt-blue)",
                    r :2
                }}
            />
            <Legend align="left" content={<CustomLegend />} />
        </ComposedChart>
    );
};

export default HeartStatsGraph;