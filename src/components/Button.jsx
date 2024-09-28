const Button = ({onDelete, noteId}) => {
  return (
    <div className="w-full flex">
      <button onClick={() => onDelete(noteId)} className="w-full border hover:bg-red-700 hover:text-white transition-all duration-300 p-2 font-semibold text-red-700">Delete</button>
      <button className="w-full border p-2 font-semibold text-yellow-500">Arsipkan</button>
    </div>
  )
}

export default Button;