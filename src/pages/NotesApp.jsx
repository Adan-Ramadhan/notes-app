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
  
  this.handleAddNotes = this.handleAddNotes.bind(this)
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
          createdAt: showFormattedDate(),
          archive: false
        }
      ]
    }
  })
}

  render(){
    return(
      <div className="w-full min-h-auto ">
        <Headers/>
        <div className="w-full min-h-auto lg:w-3/4 lg:mx-auto">
        <NoteInputBody  addNotes={this.handleAddNotes}/>
        <NoteListBody notes={this.state.notes}  />
        </div>
      </div>
    )
  }

}
export default NotesApp;