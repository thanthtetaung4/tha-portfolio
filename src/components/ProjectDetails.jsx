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
          <h1 className="font-bold text-purpleAccent lg:mb-5 lg:text-4xl">
            {project.name}
          </h1>

          <div className="h-4/5 lg:px-40">
            <div className="flex w-full items-center justify-center md:h-2/4 lg:mb-5">
              <img
                src={project.imgUrl}
                alt={`${project.name} image`}
                className="object-cover lg:h-full"
              />
            </div>
            <div className="md:grid md:h-2/4 md:grid-cols-2 lg:mb-5">
              <div>
                <h2>Project Details</h2>
              </div>
              <div>
                <h2>What I used</h2>
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
