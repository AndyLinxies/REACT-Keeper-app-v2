import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.titre}</h1>
      <p>{props.contenu}</p>
    </div>
  );
}

export default Note;
