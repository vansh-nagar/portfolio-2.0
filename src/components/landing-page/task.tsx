import React, { useEffect, useState } from "react";
import { CheckCircle2, Circle, BadgeCheck } from "lucide-react";
import { ShineBorder } from "../ui/shine-border";
import { Highlighter } from "../ui/highlighter";

interface Task {
  id: string;
  name: string;
  status: string;
  checked: boolean;
  selected: string | null;
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
      <div className=" flex justify-center my-5">
        <div className="  w-full">
          <header className="font-bold text-xl">What's Cooking</header>
          {!isLoading && tasks.length > 0 && (
            <div className="mt-2 ">
              {tasks.map((task) => (
                <div key={task.id} className="   w-full justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                    <p
                      className={` ${
                        task.checked ? " text-muted-foreground blur-[1px]" : ""
                      } text-accent-foreground ${
                        task.selected === "Private" ? "italic" : ""
                      }`}
                    >
                      {task.checked ? (
                        <Highlighter action="strike-through">
                          {task.selected === "Private"
                            ? "Shhh… classified task "
                            : task.name}
                        </Highlighter>
                      ) : task.selected === "Private" ? (
                        "Shhh… classified task "
                      ) : (
                        task.name
                      )}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}{" "}
          {!isLoading && tasks.length === 0 && (
            <div className=" mt-2">
              <p className="text-muted-foreground">No tasks available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
