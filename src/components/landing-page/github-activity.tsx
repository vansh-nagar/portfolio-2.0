import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  return (
    <>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">
          Github Activity
          {/* <span className="text-destructive">(Private)</span> */}
        </header>

        <div className=" flex flex-wrap gap-1 mt-2 mask-r-from-99%">
          {" "}
          <div className="hidden dark:block overflow-hidden   no-scrollbar">
            <GitHubCalendar
              username="hkirat"
              colorScheme="dark"
              blockSize={12}
              blockMargin={5}
              fontSize={14}
              theme={{
                light: [
                  "#d9ead3", // level 0 - lightest green
                  "#a6c9a9", // level 1
                  "#7aa87a", // level 2
                  "#567a57", // level 3
                  "#3f5b3f", // level 4 - darkest green
                ],
                dark: [
                  "#c6d5ff", // level 0 - lightest blue
                  "#8da7ff", // level 1
                  "#5f80e6", // level 2
                  "#3f5bbf", // level 3
                  "#1f3680", // level 4 - darkest blue
                ],
              }}
            />
          </div>
          <div className="dark:hidden block  overflow-hidden   no-scrollbar">
            <GitHubCalendar
              username="hkirat"
              // username="vansh-nagar"
              colorScheme="light"
              blockSize={12}
              blockMargin={5}
              fontSize={14}
              theme={{
                light: [
                  "#d9ead3", // level 0 - lightest green
                  "#a6c9a9", // level 1
                  "#7aa87a", // level 2
                  "#567a57", // level 3
                  "#3f5b3f", // level 4 - darkest green
                ],
                dark: [
                  "#c6d5ff", // level 0 - lightest blue
                  "#8da7ff", // level 1
                  "#5f80e6", // level 2
                  "#3f5bbf", // level 3
                  "#1f3680", // level 4 - darkest blue
                ],
              }}
            />
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default GithubActivity;
