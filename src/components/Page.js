function Page(props) {
  return (
    <div
      id={props.id}
      className={
        "snap-start h-full w-full overflow-hidden relative p-10 " + props.shade
      }
    >
      {props.children}
    </div>
  );
}

export default Page;
