import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const ProjectDetails = () => {
  const params = useParams();
  const id = params.id;
  const [setProjectsLoading] = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [project, setProject] = useState(null);

  console.log(project);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data === null && setIsNotFound(true);
        setProject(data.projects);
        setIsLoading(false);
        setProjectsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id, setProjectsLoading]);

  const projectEl = (
    <>
      {project && (
        <div className="h-screen font-mont md:px-10 lg:px-20">
          <h1 className="font-bold text-purpleAccent md:mb-5 md:text-3xl lg:mb-5 lg:text-4xl">
            {project.name}
          </h1>

          <div className="md:px-28 md:py-5 lg:h-4/5 lg:px-40">
            <div className="flex w-full items-center justify-center md:h-2/4 lg:mb-5">
              <img
                src={project.imgUrl}
                alt={`${project.name} image`}
                className="h-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-5 h-2/4 md:p-4 lg:mb-5 lg:grid lg:h-auto lg:grid-cols-2 lg:gap-5">
              <div className="h-2/4 md:mt-5">
                <h2 className="font-semibold md:text-2xl">Project Details</h2>
                <p className="mt-5 md:text-xl">{project.description}</p>
              </div>
              <div className="h-2/4 md:mt-5 lg:h-auto">
                <h2 className="font-semibold md:text-2xl">What I used</h2>
                <div className="mt-5 md:text-xl">
                  {project.techUsed.map((tech, i) => (
                    <ul key={i} className="">
                      <li className="mb-5">{tech}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>{isLoading ? <h1>Loading</h1> : isNotFound ? <NotFound /> : projectEl}</>
  );
};

export default ProjectDetails;
