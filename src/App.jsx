import React from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import NoteSection from "./components/NoteSection";
import { getInitialData } from "./utils/data";

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   data: getInitialData(),
   search: "",
  };

  this.addDataHandler = this.addDataHandler.bind(this);
  this.onActiveHandler = this.onActiveHandler.bind(this);
  this.searchHandler = this.searchHandler.bind(this);
  this.addArchiveHandler = this.addArchiveHandler.bind(this);
  this.onDeleteHandler = this.onDeleteHandler.bind(this);
 }

 addDataHandler({ title, body }) {
  this.setState((prevState) => {
   return {
    data: [
     ...prevState.data,
     {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toDateString(),
      archived: false,
     },
    ],
   };
  });
 }

 onActiveHandler(id) {
  const notesActive = this.state.data.filter((note) => note.id === id);
  const activeNotes = (notesActive[0].archived = true);
  this.setState({ activeNotes });
 }

 searchHandler(event) {
  const captureValue = event.target.value.toLowerCase();
  this.setState({ search: captureValue });
  event.preventDefault();
 }

 addArchiveHandler(id) {
  const notesArchive = this.state.data.filter((note) => note.id === id);
  const undoNotes = (notesArchive[0].archived = false);
  this.setState({ undoNotes });
 }

 onDeleteHandler(id) {
  const data = this.state.data.filter((data) => data.id !== id);
  this.setState({ data });
 }

 render() {
  const searchData = !this.state.search ? this.state.data : this.state.data.filter((data) => data.title.toLowerCase().match(this.state.search));
  const activeData = searchData.filter((data) => data.archived === false);
  const archiveData = searchData.filter((data) => data.archived === true);

  return (
   <>
    <Header onSearch={this.searchHandler} />
    <FormSection addDatas={this.addDataHandler} />
    <NoteSection activeData={activeData} archiveData={archiveData} onActive={this.onActiveHandler} onArchive={this.addArchiveHandler} onDelete={this.onDeleteHandler} />
   </>
  );
 }
}

export default App;
