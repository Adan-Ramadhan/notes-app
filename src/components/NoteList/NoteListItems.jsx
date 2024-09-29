import Button from "../Button";

const PrivateNoteListItems = ({ notes, onDelete, toArchive }) => {
  return (
    <>
      {notes && notes.length > 0 ? (
        <div className="w-full min-h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 p-3">
          {notes.map((note) => (
            <div key={note.id} className="border rounded-lg flex overflow-hidden flex-col hover:scale-105 duration-300 transition-all hover:shadow-lg">
              <div className="p-3 flex-1">
                <h1 className="font-bold text-xl mb-2 truncate">{note.title}</h1>
                <p className="font-normal text-base text-slate-400 mb-2">{note.createdAt}</p>
                <p className="font-normal text-base mb-2">{note.body}</p>
              </div>
              <Button onDelete={onDelete} toArchive={toArchive} noteId={note.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" w-full text-center text-slate-400">
          <p>Tidak Ada Catatan</p>
        </div>
      )}
    </>
  );
};

export default PrivateNoteListItems;
