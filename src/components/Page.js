function Page(props) {
    return (
      <div id={props.id} className={'snap-start bg-' + props.shade + '-900  h-full w-full overflow-hidden relative p-10'}>
          {props.children}
      </div>
    )
}

export default Page;