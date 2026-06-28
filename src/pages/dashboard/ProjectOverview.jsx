import {
  Link2,
  ClipboardCheck,
  BadgeCheck,
  Rocket,
  MoreVertical,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Website Redesign",
    progress: 75,
    color: "#31c45d",
    icon: Link2,
    bg: "#eef1ff",
  },
  {
    id: 2,
    title: "Mobile App",
    progress: 60,
    color: "#31c45d",
    icon: ClipboardCheck,
    bg: "#eaf8ef",
  },
  {
    id: 3,
    title: "Marketing Plan",
    progress: 40,
    color: "#ffb23f",
    icon: BadgeCheck,
    bg: "#fff5e5",
  },
  {
    id: 4,
    title: "Product Launch",
    progress: 25,
    color: "#ff5b74",
    icon: Rocket,
    bg: "#ffecef",
  },
];

const ProjectOverview = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex justify-between mb-8">
          <h2 className="text-xl font-semibold">Projects Overview</h2>

          <button className="text-green-500 font-medium">View all</button>
        </div>

        <div className="space-y-8">
          {projects.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: item.bg }}
                  >
                    <Icon color={item.color} size={24} />
                  </div>

                  <h4 className="font-medium text-lg">{item.title}</h4>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.progress}%`,
                        background: item.color,
                      }}
                    />
                  </div>

                  <span className="font-medium text-gray-500">
                    {item.progress}%
                  </span>

                  <MoreVertical className="text-gray-400" size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
