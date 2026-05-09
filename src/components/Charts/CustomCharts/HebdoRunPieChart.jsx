import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0B23F4", "#B6BDFC"];

export default function HebdoRunPieChart({nbrOfRun = 0 ,weeklyGoal = 0 }) {

    console.log("hebdoRunPieChart", nbrOfRun);
    const goal = weeklyGoal;
    const done = nbrOfRun;

    const data = [
        { name: "réalisées", value: done },
        { name: "restantes", value: goal - done }
    ];

    const renderLabel = (props) => {
        const { cx, cy, midAngle, outerRadius, name, value, index } = props;

        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 10;

        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        const isRightSide = x > cx;

        const textX = isRightSide ? x + 8 : x - 8;
        const textAnchor = isRightSide ? "start" : "end";

        return (
            <g>
                {/* texte */}
                <text
                    x={textX}
                    y={y}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontSize={10}
                    fill="#707070"
                    fontFamily="Inter, sans-serif"
                >
                    {value} {name}
                </text>

                {/* rond toujours à gauche du texte */}
                <circle
                    cx={isRightSide ? x : x - 70}
                    cy={y}
                    r={4}
                    fill={COLORS[index]}
                />
            </g>
        );
    };

    return (
        <PieChart width={350} height={200} margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>

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