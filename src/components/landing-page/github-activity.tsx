import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  return (
    <>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">
          Github Activity
          {/* <span className="text-destructive">(Private)</span> */}
        </header>

        <div className=" flex flex-wrap gap-1 mt-2">
          {" "}
          <div className="hidden dark:block overflow-hidden  mask-r-from-99%  no-scrollbar">
            <GitHubCalendar
              username="hkirat"
              colorScheme="dark"
              blockSize={12}
              blockMargin={5}
              fontSize={14}
            />
          </div>
          <div className="dark:hidden block  overflow-hidden mask-r-from-99%  no-scrollbar">
            <GitHubCalendar
              username="hkirat"
              // username="vansh-nagar"
              colorScheme="light"
              blockSize={12}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default GithubActivity;
