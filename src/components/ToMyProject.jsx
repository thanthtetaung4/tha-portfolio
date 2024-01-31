import Button from "./Button";

const ToMyProject = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-white text-primary">
      <div className="flex h-4/6 w-9/12 gap-x-5">
        <div className="w-3/6 flex-col justify-between gap-y-10 border border-primary">
          <div className="h-3/4 p-5">
            <h2 className="mb-4 text-4xl font-bold">Web Projects</h2>
            <p className="text-xl">
              As it is my passion I have done quite a number of web projects 🌐.
            </p>
          </div>
          <div className="flex h-1/4 justify-center ">
            <Button className="">CHECK MY WORKS</Button>
          </div>
        </div>

        <div className="b w-3/6 flex-col justify-between gap-y-10 border border-primary ">
          <div className="h-3/4 p-5">
            <h2 className="mb-4 text-4xl font-bold">Game Dev</h2>
            <p className="text-xl">
              As I like to play games sometimes I also make some games 🎮.
            </p>
          </div>
          <div className="flex h-1/4 justify-center ">
            <Button className="">CHECK MY WORKS</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ToMyProject;
