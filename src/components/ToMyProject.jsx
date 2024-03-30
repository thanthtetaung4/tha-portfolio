import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ToMyProject = () => {
  const navigate = useNavigate();
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
            <Button className="" onClickFunc={() => navigate("/projects")}>
              CHECK MY WORKS
            </Button>
          </div>
        </div>

        <div className="b w-3/6 flex-col justify-between gap-y-10 border border-primary ">
          <div className="h-3/4 p-5">
            <h2 className="mb-4 text-4xl font-bold">Mobile App Dev</h2>
            <p className="text-xl">
              As I am crazy about application development, I also develop mobile
              apps 📱.
            </p>
          </div>
          <div className="flex h-1/4 justify-center ">
            <Button className="" onClick={() => navigate("/projects")}>
              CHECK MY WORKS
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ToMyProject;
