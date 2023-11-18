import React from "react";

class FormSection extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   title: "",
   text: "",
  };

  this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  this.onTextChangeEventHandler = this.onTextChangeEventHandler.bind(this);
  this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }

 onTitleChangeEventHandler(event) {
  this.setState(() => {
   return {
    title: event.target.value,
   };
  });
 }

 onTextChangeEventHandler(event) {
  this.setState(() => {
   return {
    text: event.target.value,
   };
  });
 }

 onSubmitEventHandler(event) {
  event.preventDefault();
  this.props.addDatas(this.state);
  this.setState(() => {
   return {
    title: "",
    text: "",
   };
  });
 }

 render() {
  return (
   <div className="content bg-slate-800 rounded-md text-gray-100 flex-center mx-10 my-4">
    <form className="full-width px-4 sm:px-16 py-6 md:py-12" onSubmit={this.onSubmitEventHandler}>
     <h2 className="text-2xl text-center font-bold mb-8">Add Note</h2>
     <div className="mb-5">
      <label htmlFor="title" className="block mb-1 text-md font-semibold">
       Title :
      </label>
      <input
       value={this.state.title}
       onChange={this.onTitleChangeEventHandler}
       type="title"
       id="title"
       className="bg-gray-100 border border-gray-200 text-gray-800 text-xs rounded-md block w-full p-2"
       placeholder="Add title..."
       required=""
      />
     </div>
     <div className="mb-5">
      <label htmlFor="message" className="block mb-1 text-md font-semibold">
       Note :
      </label>
      <textarea value={this.state.text} onChange={this.onTextChangeEventHandler} id="message" rows="4" className="block p-2 w-full text-xs text-gray-800 bg-gray-100 rounded-md border border-gray-200" placeholder="Add note..."></textarea>
     </div>
     <button type="submit" className="bg-blue-600 hover:bg-blue-700 font-semibold rounded-md text-sm w-full sm:w-auto px-4 py-2 text-center">
      Add
     </button>
    </form>
   </div>
  );
 }
}

export default FormSection;
