import React, { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";

const sampleData = [
  {
    id: 1,
    messageTitle: "3X Boost your Productivity",
    messageDescription:
      "Boost your workflow productivity track all tasks and updates via email initimations subscribe",
    visibleCount: 1,
  },
  {
    id: 2,
    messageTitle: "Your Upcoming weekly plan on the way!",
    messageDescription: "Track all progress keep the procuctivity 3X faster",
    visibleCount: 1,
  },
  {
    id: 3,
    messageTitle: "Your Next Task is on the way!",
    messageDescription: "Complete the task before overdue!",
    visibleCount: 1,
  },
];

const Notification = () => {
  const [open, setOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
     console.log("Clicked:", event.target);
    const handleClickOutSide = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        type="button"
        className="text-lg cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Bell size={26} />
        <span className="absolute -right-[4px] -top-[8px] z-[99] w-2 h-2 bg-green-500 rounded-full inline-block"></span>
      </button>

      {open && (
        <div
          className={`flex flex-col shadow-2xl absolute top-12 right-0 bg-white border border-gray-200 w-[400px] max-h-[600px] p-4 rounded-lg overflow-y-auto`}
        >
          {sampleData.map((msg) => (
            <div
              key={msg.id}
              className="mb-1 flex flex-col items-start gap-2 p-3 cursor-pointer hover:bg-gray-100 hover:rounded-lg"
              onClick={() => setOpen(false)}
            >
              <h4 className="text-lg text-gray-800 font-medium">
                {msg.messageTitle}
              </h4>
              <p className="text-md text-gray-600">{msg.messageDescription}</p>
            </div>
          ))}
          <div className="border-t border-gray-300 text-center ">
            <button type="button" className="w-full hover:bg-gray-200 mt-2 font-semibold py-3 cursor-pointer rounded-3">View All</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
