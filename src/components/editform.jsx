import React, { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";

function EditForm({ handlelulu, listItem }) {
  const [value, setValue] = useState("");

  function handleEditEnterPress(e) {
    if (e.keyCode === 13) {
      console.log(listItem.id);
      handlelulu(listItem.id, e.target.value);
    }
  }
  return (
    <div className="editform-container">
      <input
        className="editinputbox"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEditEnterPress}
      />
      <span className="edit-icon-container">
        {/* <MdFileDownloadDone
          className="editicon"
          onClick={() => {
            handlelulu(listItem.id, value);
          }}
        /> */}
        <button
          className="editbutton"
          onClick={() => {
            handlelulu(listItem.id, value);
          }}
        >
          Edit
        </button>
      </span>
    </div>
  );
}

export default EditForm;
