import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import ContentPosts from "../components/Content";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import HeaderPosts from "../components/HeaderPosts";
import PostsContent from "../components/PostsContent";

export async function getStaticProps() {
  const res = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos"
  );
  const personalInfo = await res.json();

  const resCat = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos/categories"
  );
  const categories = await resCat.json();

  return {
    props: {
      personalInfo,
      categories,
    },

    revalidate: 5,
  };
}

export default function Posts({ personalInfo, categories }) {
  const data = personalInfo.result.info;
  const posts = personalInfo.result.posts;

  const cat = categories.result.categories;

  const navigation = [
    { name: "Início", href: "/", current: false },
    { name: "Posts", href: "/posts", current: true },
  ];

  return (
    <div>
      <Head>
        <title>Alex Santos - Posts</title>
        <meta name="description" content={data.bio} />
        <meta name="robots" content="index,follow,archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header info={data} navigation={navigation} />
        <HeaderPosts categories={cat} />
        <PostsContent posts={posts} />
        <Footer info={data} />
      </main>
    </div>
  );
}
