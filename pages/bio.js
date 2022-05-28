import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Bio from "../components/Bio";

export async function getStaticProps() {
  const res = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos"
  );
  const personalInfo = await res.json();

  const resTimeline = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos/timeline"
  );
  const timeline = await resTimeline.json();

  return {
    props: {
      personalInfo,
      timeline,
    },

    revalidate: 5,
  };
}

export default function Sobre({ personalInfo, timeline }) {
  const data = personalInfo.result.info;
  const posts = personalInfo.result.posts;
  const time = timeline.result.timelines;

  const navigation = [
    { name: "Início", href: "/", current: false },
    { name: "Posts", href: "/posts", current: false },
    { name: "Bio", href: "/bio", current: true },
  ];

  return (
    <div>
      <Head>
        <title>Alex Santos - Timeline</title>
        <meta name="description" content={data.bio} />
        <meta name="robots" content="index,follow,archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header info={data} navigation={navigation} />
        <Profile info={data} />
        <Bio time={time} />
        <Footer info={data} />
      </main>
    </div>
  );
}
