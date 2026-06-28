import React from "react";
import { SquareCheckBig, ListTodo, ClipboardList, Clock } from "lucide-react";
const sampleCards = [
  {
    id: 1,
    icon: ClipboardList,
    cardTitle: "Total Tasks",
    count: 24,
    cardBg: "#e0f2e5",
    cardColor: "#42ab64",
    visibleCount: 1,
  },
  {
    id: 2,
    icon: ListTodo,
    cardTitle: "In Progress",
    count: 8,
    cardBg: "#ecedfd",
    cardColor: "#5656f9",
    visibleCount: 1,
  },
  {
    id: 3,
    icon: SquareCheckBig,
    cardTitle: "Completed",
    count: 16,
    cardBg: "#fef1e1",
    cardColor: "#fdb849",
    visibleCount: 1,
  },
  {
    id: 4,
    icon: Clock,
    cardTitle: "Due Today",
    count: 5,
    cardBg: "#fce8ee",
    cardColor: "#f65e78",
    visibleCount: 1,
  },
];

const CountCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-6 gap-4 items-center justify-start">
        {sampleCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.id} className="bg-white p-4 py-5 flex items-center gap-4">
              <div
                className="p-2 rounded-md"
                style={{ backgroundColor: card.cardBg }}
              >
                <Icon size={28} color={card.cardColor} className="leading-0" />
              </div>

              <div>
                <p className="text-md font-medium text-gray-500">{card.cardTitle}</p>
                <p className="text-2xl font-semibold">{card.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountCards;
