import React from "react";
import Headers from "../components/Headers";
import NoteAddBody from "../components/NoteAdd/NoteAddBody";
import NoteListBody from "../components/NoteList/NoteListBody";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {

  constructor(props){
    super(props)
  

  this.state = {
    notes: getInitialData()
  }
  
  }


handleAddNotes({title, content}){
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          content
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
        <NoteAddBody  />
        <NoteListBody notes={this.state.notes} />
        </div>
      </div>
    )
  }

}
export default NotesApp;