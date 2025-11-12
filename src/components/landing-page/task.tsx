import React, { useEffect, useState } from "react";
import { CheckCircle2, Circle, BadgeCheck } from "lucide-react";
import { ShineBorder } from "../ui/shine-border";

interface Task {
  id: string;
  name: string;
  status: string;
  checked: boolean;
}

const Task = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all tasks from API route
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/notion-task");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setTasks(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);
  return (
    <div className=" w-full">
      {" "}
      {/* Tasks Section - Fetched from Notion via API */}
      {!isLoading && tasks.length > 0 && (
        <div className=" flex justify-center my-5">
          <div className="  w-full">
            <header className="font-bold text-xl">Projects</header>

            <div className="mt-2 ">
              {tasks.map((task) => (
                <div key={task.id} className="   w-full justify-between">
                  <div className="flex flex-wrap items-center justify-between w-full">
                    <p className=" text-accent-foreground underline decoration-dashed   underline-offset-2">
                      {task.name}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                          task.status === "In progress"
                            ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border border-yellow-500/30"
                            : task.status === "Done"
                            ? "bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        <div className="  relative ">
                          <Circle
                            className={`w-2 h-2  ${
                              task.status === "In progress"
                                ? "fill-yellow-500 text-yellow-500"
                                : task.status === "Done"
                                ? "fill-green-500 text-green-500"
                                : "fill-gray-500 text-gray-500"
                            }`}
                          />
                          <Circle
                            className={`w-2 h-2 absolute inset-0 ${
                              task.status === "In progress"
                                ? "animate-ping fill-yellow-500 text-yellow-500"
                                : task.status === "Done"
                                ? "animate-ping fill-green-500 text-green-500"
                                : " text-gray-500 "
                            }`}
                          />
                        </div>
                        <span className="text-nowrap">{task.status}</span>
                      </span>
                      <span
                        className={`text-xs relative font-semibold px-2.5 py-1 rounded-full flex items-center gap-1   text-nowrap ${
                          task.checked
                            ? "bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-500/30"
                            : "bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        <CheckCircle2 className={`w-3 h-3 `} />
                        {task.checked ? "Checked" : "Not Checked"}
                        {task.checked && (
                          <ShineBorder className="hidden dark:block" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!isLoading && tasks.length === 0 && (
        <div className="mt-8 p-4 rounded-lg border border-gray-500/20 bg-gray-500/5 dark:bg-gray-900/10">
          <p className="text-muted-foreground">No tasks available</p>
        </div>
      )}
    </div>
  );
};

export default Task;
