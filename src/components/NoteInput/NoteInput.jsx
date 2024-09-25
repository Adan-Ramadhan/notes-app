import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    const title = event.target.value;
    const countValue = 50 - title.length;
    
    if (countValue >= 0) {
      this.setState(() => {
        return {
          title: title,
          count: countValue,
        };
      });
    }
  }

  handleChangeBody(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="w-full  flex flex-col gap-y-3">
        <div className="w-full flex justify-end">
          <p>Sisa Karakter: {this.state.count}</p>
        </div>
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
