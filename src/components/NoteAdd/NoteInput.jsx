import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  handleChangeBody(event){
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addNotes(this.state)
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="w-full  flex flex-col gap-y-3">
        <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.handleChangeTitle} id="title" className="border rounded-md px-2 py-1" />
        <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.handleChangeBody} id="content" className="w-full h-36 border rounded-md px-2 py-1" />
        <button type="submit" className="bg-primary hover:bg-second text-white font-semibold py-2 rounded-md">
          Buat
        </button>
      </form>
    );
  }
}

export default NoteInput;
