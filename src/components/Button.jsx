const Button = ({ onDelete, toArchive, noteId, archiveId }) => {


  return (
    <div className="w-full flex">
      <button onClick={() => onDelete(noteId)} className="w-full border hover:bg-red-700 hover:text-white transition-all duration-300 p-2 font-semibold text-red-700">
        Delete
      </button>
      <button onClick={() => toArchive(noteId)} className="w-full border p-2 font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 text-yellow-500">
        {archiveId ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
};

export default Button;
