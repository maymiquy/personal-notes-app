import React from "react";
import ActiveNote from "./fragments/ActiveNote";
import ArchiveNote from "./fragments/ArchiveNote";

function NoteSection({ onActive, onArchive, activeData, archiveData, onDelete }) {
 return (
  <div className="px-10 py-5 space-y-10">
   <div className="bg-slate-800 text-white px-5 sm:px-24 rounded-lg py-10">
    <h2 className="text-2xl text-center font-bold mb-8">Active Note</h2>
    {activeData.length !== 0 ? <ActiveNote onDelete={onDelete} notes={activeData} onActive={onActive} /> : <p className="text-white font-bol text-2xl">Note empty!</p>}
   </div>
   <div className="bg-slate-800 text-white px-5 sm:px-24 rounded-lg py-10">
    <h2 className="text-2xl text-center font-bold mb-8">Archive</h2>
    {archiveData.length !== 0 ? <ArchiveNote onDelete={onDelete} notes={archiveData} onArchive={onArchive} /> : <p className="text-white font-bol text-2xl">Archive empty!</p>}
   </div>
  </div>
 );
}

export default NoteSection;
