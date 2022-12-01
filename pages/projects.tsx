import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { ProductItem } from "../components/models/product";
import ProjectItem from "../components/projects/projectItem";
import { TOKEN, DATABASE_ID } from "../config";

type Projects = {
  projects: ProductItem;
};

const Projects: NextPage<Projects> = ({ projects }) => {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen px-6 mb-10 mx-auto">
        <Head>
          <title>장찬우 포트폴리오</title>
          <meta name="description" content="장찬우의 포트폴리오 입니다." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 : {projects.results.length}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8">
          {projects.results.map((item) => (
            <ProjectItem data={item} key={item.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN as string}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID as string}/query`,
    options
  );

  const projects = await res.json();

  console.log(projects);

  return {
    props: { projects },
  };
};