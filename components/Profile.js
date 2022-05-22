export default function Profile(props) {
  return (
    <div className="flex flex-col justify-center items-center align-center container mx-auto py-10">
      <div className="flex flex-col justify-center items-center align-center text-center">
        <h1 className="text-2xl md:text-3xl">{props.info.name}</h1>
        <p className="p-2 font-light">{props.info.bio}</p>
      </div>
    </div>
  );
}
