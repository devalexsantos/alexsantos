export default function Post(props) {
  return (
    <div className="container mx-auto pt-40 flex flex-col justify-center items-center">
      <h1>{props.post.tittle}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.post.longDescription }}
      ></div>
    </div>
  );
}
