function ShowcaseCategory(props) {
  return (
    <li
      className={
        "my-1 hover:text-white hover:cursor-pointer " + props.className
      }
    >
      <a onClick={() => props.onClick()}>{props.name}</a>
    </li>
  );
}
export default ShowcaseCategory;
