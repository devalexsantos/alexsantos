import { ArrowUUpLeft } from "phosphor-react";
import Link from "next/link";

export default function Post(props) {
  return (
    <div className="md:container mx-auto pt-20 flex flex-col justify-center items-center">
      <div>
        <Link href="/">
          <ArrowUUpLeft
            size={40}
            className="border rounded-full m-1 p-1 hover:bg-zinc-700 cursor-pointer"
          />
        </Link>
      </div>

      <div className="w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center">
          {props.post.tittle}
        </h1>
        <p className="text-center m-3">
          Criado em -{" "}
          {props.post.date.substr(0, 10).split("-").reverse().join("/")} - por{" "}
          <a
            href="https://www.linkedin.com/in/alex-santos-427a92205/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Alex Santos
          </a>
        </p>
      </div>

      <div
        className="w-full max-w-[900px] m-6 p-6 mx-auto rounded-md text-zinc-800 bg-gray-100 shadow-md"
        dangerouslySetInnerHTML={{ __html: props.post.longDescription }}
      ></div>
    </div>
  );
}
