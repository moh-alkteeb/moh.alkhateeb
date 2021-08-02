import About from "./About";
import { services } from "../data";
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
export const index = () => {
  return (
    <div className="">
      <Head>
        <title>Web Devloper | portfolio | Mohammed Alkhateeb</title>
      </Head>
      <About />
    </div>
  );
};
export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   //calculation

//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("server,", data);
//   return { props: { services: data.services } };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //calculation

//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("server,", data);
//   return { props: { services: data.services } };
// };
