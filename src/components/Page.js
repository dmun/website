function Page(props) {
  return (
    <div
      id={props.id}
      className={
        "text-white snap-start h-full w-full overflow-hidden relative p-10 " + props.className
      }
    >
      {props.children}
    </div>
  );
}

export default Page;
