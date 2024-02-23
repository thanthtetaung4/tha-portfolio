import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const ProjectDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log(typeof id);

  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data === null && setIsNotFound(true);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : isNotFound ? (
        <NotFound />
      ) : (
        <h1>ProjectDetails {id}</h1>
      )}
    </>
  );
};

export default ProjectDetails;
