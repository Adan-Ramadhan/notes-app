import NoteListItems from "./NoteListItems";

const NoteListBody = ({notes, onDelete, toArchive}) => {
  return (
    <div className="w-full p-3">
      <h1 className="text-xl font-Inter font-semibold mb-3">Catatan Aktif</h1>
      <NoteListItems  notes={notes} onDelete={onDelete} toArchive={toArchive} />
    </div>
  )
}

export default NoteListBody;