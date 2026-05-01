import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0B23F4", "#B6BDFC"];

export default function HebdoRunPieChart() {
    const goal = 6;
    const done = 4;

    const data = [
        { name: "réalisées", value: done },
        { name: "restantes", value: goal - done }
    ];

    const renderLabel = (props) => {
        const {
            cx,
            cy,
            midAngle,
            outerRadius,
            index,
            name,
            value
        } = props;

        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 15;

        let offsetX = 0;
        let offsetY = 0;

        // 🎯 uniquement pour "réalisées"
        if (index === 0) {
            offsetX = -80;
            offsetY = -30;
        }

        const x = cx + radius * Math.cos(-midAngle * RADIAN) + offsetX;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) + offsetY;

        return (
            <g>
                {/* petit rond couleur */}
                <circle
                    cx={x - 8}
                    cy={y-2}
                    r={4}
                    fill={COLORS[index]}
                />

                {/* texte */}
                <text
                    x={x}
                    y={y}
                    fill="#707070"
                    fontFamily= "Inter, sans-serif"
                    fontStyle= "normal"
                    fontWeight= "400"
                    fontSize= {10}
                    dominantBaseline="middle"
                >
                    {value} {name}
                </text>
            </g>
        );
    };

    return (
        <PieChart width={306} height={200}>
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                startAngle={0}
                endAngle={-360}
                labelLine={false}
                label={renderLabel}
                stroke="none"
                cornerRadius={6}
            >
                {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                ))}
            </Pie>
        </PieChart>
    );
}