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
      archiveNotes: [],
      searchNotes: "",
    };

    this.handleAddNotes = this.handleAddNotes.bind(this);
    this.deleteNotes = this.deleteNotes.bind(this);
    this.addToArchive = this.addToArchive.bind(this);
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

  // Bang ga tau gimana cara biar balik lagi dari archive ke catatan bang, sedihnya:(
  // button delete juga gabisa di akses di body archive bang padahal dah dicoba ngambil pake id archivenya tapi ndak bisa, tak tau lah bang:(

  addToArchive(id) {
    const archive = this.state.notes.find((note) => note.id === id);
    this.setState((prevState) => {
      return {
        archiveNotes: [...prevState.archiveNotes, archive],
      };
    });
    this.deleteNotes(id);
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
          <NoteListBody notes={this.state.notes} onDelete={this.deleteNotes} toArchive={this.addToArchive} />
          <NoteArchiveBody archive={this.state.archiveNotes} />
        </div>
      </div>
    );
  }
}
export default NotesApp;
