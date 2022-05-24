import axios from "axios";
import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const res = await fetch(
      `https://dev113442.service-now.com/api/720824/devalexsantos/posts/${params.slug}`
    );

    const individualPost = await res.json();

    const resInfo = await fetch(
      "https://dev113442.service-now.com/api/720824/devalexsantos"
    );
    const personalInfo = await resInfo.json();

    return {
      props: {
        individualPost,
        personalInfo,
      },

      revalidate: 3,
    };
  } catch {
    return {
      props: {
        notFound: true,
      },
    };
  }
}

export async function getStaticPaths() {
  const slug = await fetch(
    "https://dev113442.service-now.com/api/720824/devalexsantos/posts"
  );

  const data = await slug.json();

  return {
    paths: data.result.posts.map((posts) => {
      return {
        params: {
          id: posts.id,
          slug: posts.slug,
        },
      };
    }),
    fallback: true,
  };
}

export default function Posts({ notFound, individualPost, personalInfo }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const navigation = [
    { name: "Início", href: "/", current: false },
    { name: "Posts", href: "#", current: true },
    { name: "Works", href: "#", current: false },
    { name: "Contato", href: "/contato", current: false },
  ];

  if (!notFound) {
    const info = personalInfo.result.info;
    const data = individualPost.result;
    return (
      <div>
        <Head>
          <title>{data.tittle}</title>
          <meta name="description" content={data.description} />
          <meta name="robots" content="index,follow,archive" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="min-w-[350px]">
          <Header info={info} navigation={navigation} />
          <Post post={data} />
          <Footer info={info} />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Post não encontrado...</h1>
      </div>
    );
  }
}
