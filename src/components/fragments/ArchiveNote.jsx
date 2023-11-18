import React from "react";
import NoteCard from "../partials/NoteCard";

function Archive({ onDelete, notes, onArchive }) {
 return (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:gap-10">
   {notes.map((note) => (
    <NoteCard key={note.id} changeButton="Move" onDelete={onDelete} buttonData={onArchive} {...note} />
   ))}
  </div>
 );
}

export default Archive;
