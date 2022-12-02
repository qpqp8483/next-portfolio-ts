import React, { FC } from "react";
import { ProductItem } from "../models/product";
import ProjectItem from "./projectItem";
type Projects = {
  projects: {
    results: [ProductItem];
  };
};

const FrontProject: FC<Projects> = ({ projects }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        총 프로젝트 : {projects.results.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8">
        {projects.results.map((item) => (
          <ProjectItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FrontProject;
