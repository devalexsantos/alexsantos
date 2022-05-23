import { Link, Code, PushPin, YoutubeLogo } from "phosphor-react";
import Image from "next/image";

export default function Content(props) {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div>
        <h2 className="text-2xl">Em destaque:</h2>
      </div>
      <div className="flex justify-center flex-row flex-wrap w-full mb-7">
        {props.posts.map((item, index) =>
          item.featured == "true" ? (
            <div
              key={index}
              className="bg-zinc-900 m-4 p-4 rounded shadow-md w-full md:max-w-[300px]"
            >
              {" "}
              <div className="flex justify-end">
                <PushPin size={12} weight="bold" />
              </div>
              <span className="block text-sm">
                {item.date.substr(0, 10).split("-").reverse().join("/")}
              </span>
              {item.image != "" ? (
                <Image
                  src={item.image}
                  width={300}
                  height={250}
                  alt="Alex Santos"
                  className="rounded"
                />
              ) : (
                <Image
                  src="/assets/projects-image-default.jpg"
                  width={300}
                  height={250}
                  alt="Alex Santos"
                  className="rounded"
                />
              )}
              <p className="p-1 text-sm text-green-300">{item.tags}</p>
              <span className="text-xl items-center leading-4">
                {item.tittle}{" "}
              </span>
              <p className="leading-6 text-sm">{item.description}</p>
              {item.link != "" && (
                <span className="inline-block">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <Link
                      size={30}
                      weight="regular"
                      className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                    />
                  </a>
                </span>
              )}
              {item.source != "" && (
                <span className="inline-block">
                  <a href={item.source} target="_blank" rel="noreferrer">
                    <Code
                      size={30}
                      weight="regular"
                      className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                    />
                  </a>
                </span>
              )}
              {item.video != "" && (
                <span className="inline-block">
                  <a href={item.video} target="_blank" rel="noreferrer">
                    <YoutubeLogo
                      size={30}
                      weight="regular"
                      className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                    />
                  </a>
                </span>
              )}
              {item.link == "" && item.source == "" && item.video == "" && (
                <span className="font-light text-sm">
                  (sem link disponível)
                </span>
              )}
            </div>
          ) : null
        )}
      </div>
      <div className="pb-4">
        <h2 className="text-2xl">Últimas Publicações:</h2>
      </div>
      <div className="flex justify-center flex-row flex-wrap">
        {props.posts.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 m-4 p-4 rounded shadow-md w-full md:max-w-[300px]"
          >
            <span className="block text-sm">
              {item.date.substr(0, 10).split("-").reverse().join("/")}
            </span>
            {item.image != "" ? (
              <Image
                src={item.image}
                width={300}
                height={250}
                alt="Alex Santos"
                className="rounded"
              />
            ) : (
              <Image
                src="/assets/projects-image-default.jpg"
                width={300}
                height={250}
                alt="Alex Santos"
                className="rounded"
              />
            )}
            <p className="p-1 text-sm text-green-300">{item.tags}</p>
            <span className="text-xl items-center">{item.tittle} </span>
            <p className="leading-6 text-sm">{item.description}</p>
            {item.link != "" && (
              <span className="inline-block">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Link
                    size={30}
                    weight="regular"
                    className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                  />
                </a>
              </span>
            )}
            {item.source != "" && (
              <span className="inline-block">
                <a href={item.source} target="_blank" rel="noreferrer">
                  <Code
                    size={30}
                    weight="regular"
                    className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                  />
                </a>
              </span>
            )}
            {item.video != "" && (
              <span className="inline-block">
                <a href={item.video} target="_blank" rel="noreferrer">
                  <YoutubeLogo
                    size={30}
                    weight="regular"
                    className="border rounded-full m-1 p-1 hover:bg-zinc-700"
                  />
                </a>
              </span>
            )}
            {item.link == "" && item.source == "" && item.video == "" && (
              <span className="font-light text-sm">(sem link disponível)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
