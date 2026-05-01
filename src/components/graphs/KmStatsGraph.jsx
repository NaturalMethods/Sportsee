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

const CustomTooltip = ({ active, payload }) => {
    const isVisible = active && payload && payload.length;
    return (
        <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            {isVisible && (
                <>
                </>
            )}
        </div>
    );
};




const KmStatsGraph = ({ isAnimationActive, defaultIndex}) => {
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
            <Tooltip content={<CustomTooltip />} isAnimationActive={isAnimationActive} defaultIndex={defaultIndex} />
            <Bar dataKey="km"
                 barSize={14}
                 fill="#8884d8"
                 shape={(props) => <RoundedBar {...props} isHovered={isHovered} />} />
            <Legend align="left" content={<CustomLegend isHovered={isHovered} />} />
        </BarChart>
    );
};

export default KmStatsGraph;