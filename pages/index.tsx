import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../component/home/hero";
import Layout from "../component/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>장찬우 포트폴리오</title>
        <meta name="description" content="장찬우 포트폴리오 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
};
export default Home;
