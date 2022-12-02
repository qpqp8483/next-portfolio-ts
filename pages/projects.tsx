import { GetStaticProps, NextPage } from "next";
import { TOKEN, DATABASE_ID, TOKEN_FRONT, DATABASE_ID_FRONT } from "../config";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { ProductItem } from "../components/models/product";
import PubProject from "../components/projects/pubProject";
import FrontProject from "../components/projects/frontProject";

type Projects = {
  projects_pub: {
    results: [ProductItem];
  };
  projects_front: {
    results: [ProductItem];
  };
};

const Projects: NextPage<Projects> = ({ projects_pub, projects_front }) => {
  const [tabState, setTabState] = useState("pub");

  const tabClick = (e: React.MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    if (eventTarget.innerText === "Publising") {
      setTabState("pub");
    } else {
      setTabState("front");
    }
  };

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
              <button
                className={`btn-tab ${tabState === `pub` ? `btn-tab-on` : ""}`}
                onClick={tabClick}
              >
                Publising
              </button>

              <button
                className={`btn-tab ${
                  tabState === `front` ? `btn-tab-on` : ""
                }`}
                onClick={tabClick}
              >
                Frontend
              </button>
            </div>
          </div>
        </section>

        {tabState === "pub" ? (
          <PubProject projects={projects_pub} />
        ) : (
          <FrontProject projects={projects_front} />
        )}
      </div>
    </Layout>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  // notion_pub api 가져오기 start
  const options_pub = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN as string}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res_pub = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID as string}/query`,
    options_pub
  );
  // notion_pub api 가져오기 end

  // notion_front api 가져오기 start
  const options_front = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN_FRONT as string}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res_front = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID_FRONT as string}/query`,
    options_front
  );
  // notion_front api 가져오기 end

  const projects_pub = await res_pub.json();
  const projects_front = await res_front.json();

  return {
    props: { projects_pub, projects_front },
  };
};
