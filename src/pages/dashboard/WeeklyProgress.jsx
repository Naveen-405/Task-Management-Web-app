import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", tasks: 9 },
  { day: "Tue", tasks: 13 },
  { day: "Wed", tasks: 19 },
  { day: "Thu", tasks: 15 },
  { day: "Fri", tasks: 16 },
  { day: "Sat", tasks: 20 },
  { day: "Sun", tasks: 23 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white shadow-lg rounded-xl px-4 py-2">
        <p className="font-semibold">
          {payload[0].value} Tasks
        </p>
      </div>
    );
  }

  return null;
};

export default function WeeklyProgress() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-[420px]">
      <div className="flex justify-between mb-8">
        <h2 className="text-xl font-semibold">
          Weekly Progress
        </h2>

        <select className="border border-gray-400 rounded-lg px-4 py-2">
          <option>This Week</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 30]}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#d1d5db",
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="tasks"
            fill="url(#green)"
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 7,
              fill: "#22c55e",
              stroke: "#fff",
              strokeWidth: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}