import React, { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";

function EditForm({ handlelulu, listItem }) {
  const [value, setValue] = useState("");
  return (
    <div className="editform-container">
      <input
        className="editinputbox"
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="edit-icon-container">
        {" "}
        <MdFileDownloadDone
          className="editicon"
          onClick={() => {
            handlelulu(listItem.id, value);
          }}
        />
      </span>
    </div>
  );
}

export default EditForm;
