
// import { projectGet } from "./Api/ProjectApi";
import BoxMade from "./companent/Home/BoxMade";
import Project from "./companent/Home/Project";

export default async function Home() {
  

  return (
    <div>
      <div className="bg-gradient-color min-h-screen">
        {/* <h1>Made value : {projectStatus}</h1> */}
        <BoxMade></BoxMade>
        <Project ></Project>
      </div>
    </div>
  );
}
