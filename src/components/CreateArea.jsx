import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isOn, setIsOn] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function mouseOverHandler() {
    setIsOn(true);
  }

  function mouseOutHandler() {
    setIsOn(false);
  }

  return (
    <div>
      <form className="create-note">
        {isOn && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
        onClick={mouseOverHandler}
          visibility={isOn ? "visible" : "hidden"}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isOn ? "3" : "1"}
        />
        <Zoom in={isOn}>
        <Fab onClick={submitNote}>
          <AddIcon onClick={mouseOutHandler}/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
