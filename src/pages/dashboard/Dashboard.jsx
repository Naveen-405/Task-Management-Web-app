import React from "react";
import SearchInput from "../../components/common/SearchInput";
import Header from "./Header";
import CountCards from "./CountCards";
import WeeklyProgress from "./WeeklyProgress";
import UpcomingTasks from "./UpcomingTasks";
import ProjectOverview from "./ProjectOverview";
import TaskOverView from "./TaskOverView";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <CountCards />

      <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-4 items-center">
        <div className="">
          <WeeklyProgress />
        </div>
        <div>
          <UpcomingTasks />
        </div>
        <div>
          <ProjectOverview />
        </div>
        <div>
          <TaskOverView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
