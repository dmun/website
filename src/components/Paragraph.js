import React from "react";

function Paragraph(props) {
  return (
    <div className="mx-auto">
      <h1 className="text-white font-serif text-4xl mb-4">{props.heading}</h1>
      <p className="text-white font-sans text-base pb-1 text-justify">
        {props.content}
      </p>
    </div>
  );
}

export default Paragraph;
