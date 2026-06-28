import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 72, color: "#36c45f" },
  { name: "In Progress", value: 20, color: "#78a8ff" },
  { name: "Pending", value: 8, color: "#e7e9f2" },
];

const TaskOverView = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Task Completion</h2>

        <div className="relative h-[235px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={85}
                outerRadius={105}
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">72%</h1>

            <p className="text-gray-500 text-xl">Completed</p>
          </div>
        </div>

        <div className="space-y-2 mt-5">
          {data.map((item) => (
            <div key={item.name} className="flex justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: item.color,
                  }}
                />

                <span className="text-gray-600">{item.name}</span>
              </div>

              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskOverView;
