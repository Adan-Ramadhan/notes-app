import React from "react";
import Headers from "../components/Headers";
import NoteInputBody from "../components/NoteInput/NoteInputBody";
import NoteListBody from "../components/NoteList/NoteListBody";
import { getInitialData, showFormattedDate } from "../utils";
import NoteArchiveBody from "../components/NoteArchive/NoteArchiveBody";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: "",
    };

    this.handleAddNotes = this.handleAddNotes.bind(this);
    this.deleteNotes = this.deleteNotes.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleAddNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archived: false,
          },
        ],
      };
    });
  }

  handleSearchChange(event) {
    const query = event.target.value.toLowerCase();

    if (query.length === 0) {
      this.setState((prevState) => {
        return {
          notes: prevState.notes,
          searchNotes: query,
        };
      });
    } else {
      const filterNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(query));

      this.setState(() => {
        return {
          notes: filterNotes,
          searchNotes: query,
        };
      });
    }
  }

  handleChangeStatus(id) {
    const notes = this.state.notes.map((note) => {
      if(note.id === id){
        return{
          ...note, archived: true
        }
      }
      return note
    })

    this.setState({notes})
  }

  deleteNotes(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="w-full min-h-auto ">
        <Headers handleSearchChange={this.handleSearchChange} searchValue={this.state.searchNotes} />
        <div className="w-full min-h-auto lg:w-3/4 lg:mx-auto">
          <NoteInputBody addNotes={this.handleAddNotes} />
          <NoteListBody notes={this.state.notes.filter((note) => !note.archived)} onDelete={this.deleteNotes} toArchive={this.handleChangeStatus} />
          <NoteArchiveBody archive={this.state.notes.filter((note) => note.archived)} />
        </div>
      </div>
    );
  }
}
export default NotesApp;
