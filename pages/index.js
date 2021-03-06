import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Content from "../components/Content";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const res = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos"
  );
  const personalInfo = await res.json();

  return {
    props: {
      personalInfo,
    },

    revalidate: 5,
  };
}

export default function Home({ personalInfo }) {
  const data = personalInfo.result.info;
  const posts = personalInfo.result.posts;

  const navigation = [
    { name: "Início", href: "/", current: true },
    { name: "Posts", href: "/posts", current: false },
    { name: "Bio", href: "/bio", current: false },
  ];

  return (
    <div>
      <Head>
        <title>Alex Santos - ServiceNow Developer</title>
        <meta name="description" content={data.bio} />
        <meta name="robots" content="index,follow,archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header info={data} navigation={navigation} />
        <Profile info={data} />
        <Content posts={posts} />
        <Footer info={data} />
      </main>
    </div>
  );
}
