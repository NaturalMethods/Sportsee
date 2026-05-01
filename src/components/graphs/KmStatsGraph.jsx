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

const data = [
    { name: "S1", km: 10 },
    { name: "S2", km: 20 },
    { name: "S3", km: 15 },
    { name: "S4", km: 25 }
];

const CustomTooltip = ({ active, payload, label, coordinate }) => {
    if (!active || !payload || !payload.length) return null;
    return (
        <div
            style={{
                position: "absolute",
                left: coordinate.x,
                top: coordinate.y,
                transform: "translate(-50%, -100%)",
                backgroundColor: "#000",
                borderRadius: "8px",
                padding: "10px 12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            }}
        >
            <p style={{
                fontFamily: "Inter,sans-serif",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "12px",
                color: "#E7E7E7" ,
                margin: 0
            }}>
                {label}
            </p>

            <p style={{
                fontFamily: "Inter,sans-serif",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                color: "#fff",
                margin: 0
            }}>
                {payload[0].value} km
            </p>
        </div>
    );
};




const KmStatsGraph = ({ isAnimationActive, defaultIndex}) => {
    const barColor = "#8884d8";
    const barColorHovered = "#0B23F4";
    const [isHovered, setIsHovered] = useState(false);
    return (
        <BarChart
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '100%', maxWidth: '330px', height: '307px', aspectRatio: 1 }}
            data={data}
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
                    tickMargin={10}
                    tickLine={false}
                    width={30}
                    domain={[0, 30]}
                    ticks={[0,10,20,30]}
                    tick={{
                        fontFamily: "Inter,sans-serif",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "10px"
                    }} />
            <Tooltip cursor={false} content={<CustomTooltip />} isAnimationActive={isAnimationActive} defaultIndex={defaultIndex} />
            <Bar dataKey="km"
                 barSize={14}
                 fill={barColor}
                 shape={(props) => <RoundedBar {...props} isHovered={isHovered} barColorHovered={barColorHovered} />} />
            <Legend align="left" content={<CustomLegend isHovered={isHovered} barColorHovered={barColorHovered} />} />
        </BarChart>
    );
};

export default KmStatsGraph;