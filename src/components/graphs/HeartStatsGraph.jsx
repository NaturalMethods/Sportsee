import { useState } from "react";
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ComposedChart, Line
} from 'recharts';
import RoundedBar from "./RoundedBar.jsx";
import CustomLegend from "./CustomLegend.jsx";

const data = [
    { name: "Lun", minbpm: 137, maxbpm : 145 },
    { name: "Mar", minbpm: 152, maxbpm : 145 },
    { name: "Mer", minbpm: 168, maxbpm : 145 },
    { name: "Jeu", minbpm: 187, maxbpm : 145 },
    { name: "Ven", minbpm: 145, maxbpm : 145 },
    { name: "Sam", minbpm: 132, maxbpm : 145 },
    { name: "Dim", minbpm: 183, maxbpm : 145 }
];



const HeartStatsGraph = () => {

    const barColor = "#F4320B";
    const secondBarColor = "#FCC1B6";
    const barColorHovered = "#F4320B";
    const [isHovered, setIsHovered] = useState(false);

    const enrichedData = data.map((item) => ({
        ...item,
        avgBpm: (item.minbpm + item.maxbpm) / 2
    }));

    return (
        <ComposedChart
            onMouseMove={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{width: '495', maxWidth: '495px', height: '307px', aspectRatio: 1 }}
            data={enrichedData}
            margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid  horizontal={true}
                            vertical={false}
                            stroke="#E5E7EB"
                            strokeDasharray="2 2" />
            <XAxis dataKey="name"
                   tickMargin={15}
                   tickLine={false}
                   tick={{
                       fontFamily: 'Inter,sans-serif',
                       fontStyle: "normal",
                       fontWeight: "400",
                       fontSize: "12px"
                   }} />
            <YAxis
                tickMargin={5}
                tickLine={false}
                width={30}
                domain={[130, 190]}
                ticks={[130,145,160,175,190]}
                tick={{
                    fontFamily: "Inter,sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "10px"
                }} />
            <Tooltip active={false} />
            <Bar dataKey="minbpm"
                 name = "Min BPM"
                 barSize={14}
                 fill={secondBarColor}
                 shape={(props) => <RoundedBar {...props} isHovered={isHovered} barColorHovered={secondBarColor} />} />
            <Bar dataKey="maxbpm"
                 name = "Max BPM"
                 barSize={14}
                 fill={barColor}
                 shape={(props) => <RoundedBar {...props} isHovered={isHovered} barColorHovered={barColorHovered} />} />

            <Line
                type="monotone"
                dataKey="avgBpm"
                stroke={isHovered ? "#0B23F4" : "#F2F3FF"}
                strokeWidth={2}
                dot={{fill : "#0B23F4", r :2, stroke: "#0B23F4"}}
                activeDot={{
                    fill :"#0B23F4",
                    stroke: "#0B23F4",
                    r :2
                }}
            />

            <Legend align="left" content={<CustomLegend />} />
        </ComposedChart>
    );
};

export default HeartStatsGraph;