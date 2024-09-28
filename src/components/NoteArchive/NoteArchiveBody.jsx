import React from "react";
import NoteArchiveListItems from "./NoteArchiveListItems";

const NoteArchiveBody = ({archive}) => {

    return (
      <div className="w-full p-3">
        <h1 className="text-xl font-Inter font-semibold mb-3">Archive</h1>
        <NoteArchiveListItems archive={archive}  /> 
      </div>
    );
}

export default NoteArchiveBody;
