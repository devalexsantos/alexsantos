import axios from "axios";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import CategoriesHeader from "../../components/CategoriesHeader";
import PostsContent from "../../components/PostsContent";

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const res = await fetch(
      `https://dev113442.service-now.com/api/720824/devalexsantos/category/${params.slug}`
    );

    const categoryPosts = await res.json();

    const resCat = await fetch(
      "https://dev113442.service-now.com/api/720824/devalexsantos/categories"
    );

    const categories = await resCat.json();

    const resInfo = await fetch(
      "https://dev113442.service-now.com/api/720824/devalexsantos"
    );
    const personalInfo = await resInfo.json();

    return {
      props: {
        categoryPosts,
        personalInfo,
        categories,
      },
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
    "https://dev113442.service-now.com/api/720824/devalexsantos/categories"
  );

  const data = await slug.json();

  return {
    paths: data.result.categories.map((categories) => {
      return {
        params: {
          id: categories.id,
          slug: categories.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function CategoryPage({
  notFound,
  categoryPosts,
  personalInfo,
  categories,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const navigation = [
    { name: "Início", href: "/", current: false },
    { name: "Posts", href: "/posts", current: true },
    { name: "Bio", href: "/bio", current: false },
  ];

  if (!notFound) {
    const info = personalInfo.result.info;
    const data = categoryPosts.result;
    const cat = categories.result.categories;
    return (
      <div>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <meta name="robots" content="index,follow,archive" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="min-w-[350px]">
          <Header info={info} navigation={navigation} />
          <CategoriesHeader data={data} categories={cat} />
          <PostsContent posts={data.posts} />
          <Footer info={info} />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Categoria não encontrada...</h1>
      </div>
    );
  }
}
