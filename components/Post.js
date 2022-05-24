export default function Post(props) {
  return (
    <div className="container mx-auto pt-40 flex flex-col justify-center items-center max-w-[1080px]">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center">
        {props.post.tittle}
      </h1>
      <span className="p-4">21/05/2022 - por devalexsantos</span>
      <div
        className="w-full p-4 m-4 rounded-md bg-zinc-800 shadow-md"
        dangerouslySetInnerHTML={{ __html: props.post.longDescription }}
      ></div>
    </div>
  );
}
