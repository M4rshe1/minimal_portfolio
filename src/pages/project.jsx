import { useParams } from "react-router-dom";

const Project = () => {
  const { projectID } = useParams();
  console.log(projectID);

  return <div>Product</div>;
}

export default Project;

