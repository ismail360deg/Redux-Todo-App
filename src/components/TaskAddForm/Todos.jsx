import { RiDeleteBin6Fill, RiFileEditLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckbox, removeTodo } from "../../redux/todoApp/actions";

const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  console.log(todos);

  return todos.map((todo) => (
    <div
      key={todo.id}
      className="w-full max-w-3xl mx-auto shadow-lg rounded-lg p-4 bg-white"
    >
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {/* <!-- todo --> */}
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0 mt-2">
          <div>
            {editFormVisibility === false && (
              <input
                type="checkbox"
                className=""
                checked={todo.completed}
                onChange={() => dispatch(handleCheckbox(todo.id))}
              />
            )}
          </div>
          <div className="select-none flex-1">
            <p
              style={
                todo.completed === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.todo}
            </p>
          </div>

          {editFormVisibility === false && (
            <>
              <RiFileEditLine
                size={25}
                className="cursor-pointer text-cyan-600"
                onClick={() => handleEditClick(todo)}
              />
              <RiDeleteBin6Fill
                size={25}
                className="cursor-pointer text-cyan-600"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </>
          )}
        </div>
      </div>
    </div>
  ));
};

export default Todos;
