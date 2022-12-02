import { GetStaticProps, NextPage } from "next";
import { TOKEN, DATABASE_ID } from "../config";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { ProductItem, ProductItemList } from "../components/models/product";
import PubProject from "../components/projects/pubProject";

type Projects = {
  projects: ProductItem;
};

const Projects: NextPage<Projects> = ({ projects }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen px-6 mb-10 mx-auto">
        <Head>
          <title>장찬우 포트폴리오</title>
          <meta name="description" content="장찬우의 포트폴리오 입니다." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-5">
              <a className="text-1xl sm:px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
                Publising
              </a>

              <a className="text-1xl sm:px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                Frontend
              </a>
            </div>
          </div>
        </section>

        <PubProject projects={projects} />
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

  return {
    props: { projects },
  };
};
