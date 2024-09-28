import NoteListItems from "./NoteListItems";

const NoteListBody = ({notes, onDelete}) => {
  console.log(notes)
  return (
    <div className="w-full p-3">
      <h1 className="text-xl font-Inter font-semibold mb-3">Catatan Aktif</h1>
      <NoteListItems  notes={notes} onDelete={onDelete} />
    </div>
  )
}

export default NoteListBody;