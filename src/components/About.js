import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const state = useContext(NoteContext);
  const name = state.data.name;
  const title = state.data.title;
  const desc = state.data.desc;

  return (
    <div className="">
      <div className="card shadow p-4 rounded-3">
        <div className="card-body p-4">
          <h2 className="fw-bold display-3">{name}</h2>
          <h4 className="mb-2 text-danger">- {title}</h4>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
