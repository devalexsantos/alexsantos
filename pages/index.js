import axios from "axios";
import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch(
    "https://dev113442.service-now.com/api/720824/personal_information"
  );
  const personalInfo = await res.json();

  return {
    props: {
      personalInfo,
    },

    revalidate: 30,
  };
}

export default function Home({ personalInfo }) {
  const data = personalInfo.result;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
