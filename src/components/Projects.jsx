import { useEffect, useState } from "react";
import LoadingElements from "./LoadingElements";
import { useOutletContext, useNavigate } from "react-router-dom";
import Button from "./Button";

const Projects = () => {
  const [setProjectsLoading] = useOutletContext();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data.projects);
        setIsLoading(false);
        setProjectsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const projetcsEls = projects?.map((project) => (
    <div
      key={project.name}
      className="sm:2-4/6 rounded border border-primary p-5 md:w-full lg:w-4/6"
    >
      <div className="mb-5 cursor-pointer overflow-hidden">
        <img
          src={project.imgUrl}
          alt="project-img"
          className="rounded object-cover transition duration-200 ease-in-out hover:scale-150"
          onClick={() => navigate(`/projects/${project.id}`)}
        />
      </div>
      <h2 className="mb-2 font-semibold md:text-xl">{project.name}</h2>
      <hr className="mb-2 border-purpleAccent opacity-60" />
      <div className="h-36">
        <div>{project.description}</div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate(`/projects/${project.id}`)}
          className="rounded border border-primary px-4 py-2 text-lg text-purpleAccent transition-[color,box-shadow] duration-[400ms,700ms] ease-in-out hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-primary"
        >
          Check Details
        </button>
      </div>
    </div>
  ));

  return (
    <>
      {isLoading ? (
        <LoadingElements />
      ) : (
        <main className="px-5  font-mont text-purpleAccent md:px-10 lg:px-20">
          <h1 className="mb-5  text-2xl font-bold md:text-3xl lg:mb-10">
            Projects
          </h1>
          <div className="grid w-full place-items-center gap-y-10 md:grid-cols-2 md:gap-4 md:px-10 lg:px-20">
            {projetcsEls}
          </div>
        </main>
      )}
    </>
  );
};

export default Projects;
