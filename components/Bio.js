export default function Bio(props) {
  return (
    <div className="container mx-auto max-w-[700px] flex flex-col justify-center items-center">
      <h1 className="text-2xl">Timeline</h1>
      <div className="flex flex-col justify-center gap-1">
        {props.time.map((item) => (
          <div className="m-2 p-2" key={item.id}>
            <span>{item.year}</span>
            <h2 className="text-xl underline">{item.title}</h2>
            <p className="font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
