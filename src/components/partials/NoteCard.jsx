import React from "react";

function NoteCard({ id, title, body, createdAt, changeButton, onDelete, buttonData }) {
 const convertDate = (date) => {
  const options = {
   weekday: "long",
   day: "numeric",
   month: "long",
   year: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
 };

 return (
  <div className="mx-auto p-6 w-full bg-white rounded-lg border space-y-2 border-gray-200 shadow-md">
   <div className="text-gray-400 pb-2">
    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 truncate">{title}</h5>
    <span className="text-sm">{convertDate(createdAt)}</span>
   </div>
   <div className="h-40 overflow-hidden">
    <p className="mb-3 font-normal text-sm text-gray-700 tracking-tight">{body}</p>
   </div>
   <div className="flex gap-5">
    <button onClick={() => buttonData(id)} className="text-center hover:bg-blue-700 bg-blue-600 focus:outline-none focus:ring-yellow-300 rounded-lg text-sm items-center text-white font-medium py-2 px-3 focus:ring-4 inline-flex">
     {changeButton}
    </button>
    <button onClick={() => onDelete(id)} className="text-center hover:bg-red-800 bg-red-700 focus:outline-none focus:ring-red-300 rounded-lg text-sm items-center text-white font-medium py-2 px-3 focus:ring-4 inline-flex">
     Delete
    </button>
   </div>
  </div>
 );
}

export default NoteCard;
