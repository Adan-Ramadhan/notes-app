import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  handleChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  handleChangeContent(event){
    this.setState(() => {
      return {
        content: event.target.value,
      };
    });
  }

  

  render() {
    return (
      <form className="w-full  flex flex-col gap-y-3">
        <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.handleChangeTitle} id="title" className="border rounded-md px-2 py-1" />
        <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.content} onChange={this.handleChangeContent} id="content" className="w-full h-36 border rounded-md px-2 py-1" />
        <button type="submit" className="bg-primary hover:bg-second text-white font-semibold py-2 rounded-md">
          Buat
        </button>
      </form>
    );
  }
}

export default NoteInput;
