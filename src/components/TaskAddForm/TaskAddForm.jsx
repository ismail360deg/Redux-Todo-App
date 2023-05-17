import { GrNotes } from "react-icons/gr";
import { FaPlusCircle, FaFastBackward } from "react-icons/fa";
import Todos from "./Todos";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteAll,
  handleEditSubmit,
} from "../../redux/todoApp/actions";

const TaskAddForm = () => {
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancleUpdate = () => {
    setEditFormVisibility(false);
  };

  const todos = useSelector((state) => state.operationReducer);
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg p-6 bg-white my-20">
        <div>
          <>
            {editFormVisibility === false ? (
              <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
              >
                <GrNotes size={40} className="text-cyan-600" />
                <input
                  type="text"
                  placeholder="Type your todo"
                  className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                  required
                  value={todoValue}
                  onChange={(e) => setTodoValue(e.target.value)}
                />
                <button type="submit">
                  <FaPlusCircle size={30} className="text-cyan-600" />
                </button>
              </form>
            ) : (
              <>
                <button>
                  <FaFastBackward
                    size={25}
                    className="my-2 ms-2 text-cyan-600"
                    onClick={cancleUpdate}
                  />
                </button>
                <form
                  className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                  onSubmit={editSubmit}
                >
                  <GrNotes size={40} className="text-cyan-600" />
                  <input
                    type="text"
                    placeholder="Update your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    required
                    value={editValue || ""}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button type="submit">
                    <FaPlusCircle size={30} className="text-cyan-600" />
                  </button>
                </form>
              </>
            )}
          </>
        </div>
        <Todos
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />

        {todos.length > 1 && (
          <button
            className="btn bg-cyan-700 text-white font-semibold delete-all w-full max-w-3xl mx-auto mt-4 p-2 rounded-lg"
            onClick={() => dispatch(deleteAll())}
          >
            DELETE ALL
          </button>
        )}
      </div>
    </>
  );
};

export default TaskAddForm;
