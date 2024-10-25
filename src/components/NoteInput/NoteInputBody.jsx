import NoteInput from "./NoteInput";

const NoteInputBody = ({addNotes}) => {
  return (
    <div className="w-full xl:w-1/2 xl:mx-auto p-3 mb-5">
      <h1 className="text-xl font-Inter font-semibold mb-3">Buat Catatan</h1>
      <NoteInput addNotes={addNotes} />
    </div>
  )
}

export default NoteInputBody;