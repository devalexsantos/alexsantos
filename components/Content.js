export default function Content(props) {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div className="pb-4">
        <h2>Últimas Publicações:</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {props.posts.map((item, index) => (
          <div key={index}>
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
