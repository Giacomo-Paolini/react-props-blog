export default function card(props) {
  return (
    <div className="max-w-[600px] rounded-lg bg-white">
      <div className="flex max-w-[600px] items-center justify-center rounded-t-lg">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </div>
      <div className="p-4 text-left ">
        <h1 className="md:text-2xl">{props.title}</h1>
        <p className="my-4 text-sm md:text-base">{props.content}</p>
        <span>{props.tags}</span>
        <span>{props.published}</span>
        <button className="bg-orange-400 p-2 text-sm text-white">
          LEGGI DI PIÙ
        </button>
      </div>
    </div>
  );
}
