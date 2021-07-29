import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./task/TodoItem.js";
import store from "./store";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import todoItem from "./task/todoItem.js";

function App({ todoReducer: { process, finished, notice } }) {
  const [working, setWorking] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("active");
    if (working !== "") {
      store.dispatch({
        type: "add",
        payload: { process: working, mess: "success" },
      });
    } else {
      store.dispatch({
        type: "error",
        payload: { mess: "todo don't create" },
      });
    }
    console.log(working);
    setWorking("");
  };

  useEffect(() => {}, [process, finished]);
  return (
    <div className="container">
      <main>
        <form action="#" className="formTodo" onSubmit={(e) => onSubmit(e)}>
          <input
            className="todo"
            type="text"
            placeholder="todo"
            id="inputText"
            value={working}
            onChange={(e) => setWorking(e.target.value)}
          />
          {/* <label htmlFor="inputText">Nhap viec can làm</label> */}
          <button className="btnSubmit" onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </form>
        <div className="list">
          <ul>
            {process?.map((task, i) => (
              <TodoItem task={task} checked={false} />
            ))}
            {finished?.map((task, i) => (
              <TodoItem task={task} checked={true} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

App.propTypes = {
  todoReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todoReducer: state.todoReducer,
});

export default connect(mapStateToProps, null)(App);

// export default App;
