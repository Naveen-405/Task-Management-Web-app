import {
  Circle,
  CircleDot,
  Plus,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Design new landing page",
    project: "Website Redesign",
    dot: "bg-purple-400",
    status: "Today",
    statusColor: "text-red-500",
    avatar: "https://i.pravatar.cc/40?img=1",
    active: true,
  },
  {
    id: 2,
    title: "Review project proposal",
    project: "Marketing Plan",
    dot: "bg-green-400",
    status: "Today",
    statusColor: "text-red-500",
    avatar: "https://i.pravatar.cc/40?img=2",
    active: false,
  },
  {
    id: 3,
    title: "Sync with team",
    project: "Team Meeting",
    dot: "bg-blue-400",
    status: "Tomorrow",
    statusColor: "text-gray-500",
    avatar: "https://i.pravatar.cc/40?img=3",
    active: false,
  },
  {
    id: 4,
    title: "Update documentation",
    project: "Product Docs",
    dot: "bg-purple-400",
    status: "Tomorrow",
    statusColor: "text-gray-500",
    avatar: "https://i.pravatar.cc/40?img=4",
    active: false,
  },
  {
    id: 5,
    title: "Fix login issue",
    project: "Bug Tracking",
    dot: "bg-pink-400",
    status: "May 25",
    statusColor: "text-gray-500",
    avatar: "https://i.pravatar.cc/40?img=5",
    active: false,
  },
];

export default function UpcomingTasks() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">
          Upcoming Tasks
        </h2>

        <button className="text-green-500 font-medium hover:text-green-600">
          View all
        </button>
      </div>

      <div className="space-y-6">
        {tasks.slice(0, 4).map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-start gap-4">

              {task.active ? (
                <CircleDot
                  size={22}
                  className="text-orange-400 mt-1"
                />
              ) : (
                <Circle
                  size={22}
                  className="text-gray-300 mt-1"
                />
              )}

              <div>
                <h4 className="font-medium text-gray-900">
                  {task.title}
                </h4>

                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${task.dot}`}
                  />

                  <span className="text-sm text-gray-400">
                    {task.project}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`font-medium ${task.statusColor}`}
              >
                {task.status}
              </span>

              <img
                src={task.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 mx-auto mt-10 text-green-500 font-semibold hover:text-green-600">
        <Plus size={20} />
        Add new task
      </button>
    </div>
  );
}