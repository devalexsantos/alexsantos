import { PushPin } from "phosphor-react";

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
              className="bg-zinc-900 m-4 p-4 rounded shadow-md w-full md:max-w-[250px]"
            >
              {" "}
              <div className="flex justify-end">
                <PushPin size={12} weight="bold" />
              </div>
              <span className="text-xl items-center">{item.tittle} </span>
              <span className="text-md">
                - {item.date.substr(0, 10).split("-").reverse().join("/")}
              </span>
              <p>{item.description}</p>
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
            className="bg-zinc-900 m-4 p-4 rounded shadow-md w-full md:max-w-[250px]"
          >
            <span className="text-xl items-center">{item.tittle} </span>
            <span className="text-md">
              - {item.date.substr(0, 10).split("-").reverse().join("/")}
            </span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
