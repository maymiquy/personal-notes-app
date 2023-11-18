import React from "react";
import NoteCard from "../partials/NoteCard";

function ActiveNote({ onDelete, onActive, notes }) {
 return (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:gap-10">
   {notes.map((note) => (
    <NoteCard key={note.id} changeButton="Archive" onDelete={onDelete} buttonData={onActive} {...note} />
   ))}
  </div>
 );
}

export default ActiveNote;
