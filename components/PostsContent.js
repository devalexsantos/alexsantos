import { PushPin } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function PostsContent(props) {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div className="pb-4">
        <h2 className="text-2xl">Resultado:</h2>
      </div>
      <div className="flex justify-center flex-row flex-wrap">
        {props.posts.map((item, index) => (
          <Link href={`/${item.slug}`} key={index}>
            <div className="hover:scale-105 ease-in-out duration-200 bg-zinc-900 m-4 p-4 rounded shadow-md w-full md:max-w-[300px] cursor-pointer">
              <span className="block text-sm">
                {item.date.substr(0, 10).split("-").reverse().join("/")}
              </span>
              {item.image != "" ? (
                <div className="w-full flex justify-center my-2">
                  <Image
                    src={item.image}
                    width={300}
                    height={250}
                    alt="Alex Santos"
                    className="rounded"
                  />
                </div>
              ) : (
                <div className="w-full flex justify-center my-2">
                  <Image
                    src="/assets/projects-image-default.jpg"
                    width={300}
                    height={250}
                    alt="Alex Santos"
                    className="rounded"
                  />
                </div>
              )}
              <p className="p-1 text-sm text-green-300">{item.tags}</p>
              <span className="text-xl items-center">{item.tittle} </span>
              <p className="leading-6 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
