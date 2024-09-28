import React from "react";
import Headers from "../components/Headers";
import NoteInputBody from "../components/NoteInput/NoteInputBody";
import NoteListBody from "../components/NoteList/NoteListBody";
import { getInitialData, showFormattedDate } from "../utils";

class NotesApp extends React.Component {

  constructor(props){
    super(props)
  

  this.state = {
    notes: getInitialData()
  }
  
  this.handleAddNotes = this.handleAddNotes.bind(this);
  this.deleteNotes = this.deleteNotes.bind(this);
  }


handleAddNotes({title, body}){
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: showFormattedDate(new Date()),
          archive: false
        }
      ]
    }
  })
}

deleteNotes(id){
  const notes = this.state.notes.filter((note) => note.id !== id)
  this.setState({notes})
}

  render(){
    return(
      <div className="w-full min-h-auto ">
        <Headers/>
        <div className="w-full min-h-auto lg:w-3/4 lg:mx-auto">
        <NoteInputBody  addNotes={this.handleAddNotes}/>
        <NoteListBody notes={this.state.notes} onDelete={this.deleteNotes}  />
        </div>
      </div>
    )
  }

}
export default NotesApp;