import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import store from "../store";
import PropTypes from "prop-types";

function TodoItem({ todoReducer: { process, finished } }) {
  // const [done, setDone] = useState();
  // useEffect(() => {
  //   console.log(done);
  // }, []);
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  const doneWork = (task) => {
    store.dispatch({
      type: "remove",
      payload: { finished: task, mess: "finished working" },
    });
  };
  const back = (task) => {
    store.dispatch({
      type: "add__again",
      payload: { process: task, mess: "update success" },
    });
  };

  return (
    <>
      {process?.map((item) => (
        <li>
          <input
            type="checkbox"
            checked={false}
            className="list__checkbox"
            onChange={() => {
              doneWork(item);
            }}
          />
          <p>{item}</p>
        </li>
      ))}
      {finished?.map((item) => (
        <li>
          <input
            type="checkbox"
            checked={true}
            className="list__checkbox"
            onChange={() => {
              back(item);
            }}
          />
          <p>{item}</p>
        </li>
      ))}
    </>
  );
}
TodoItem.propTypes = {
  todoReducer: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  todoReducer: state.todoReducer,
});

export default connect(mapStateToProps, null)(TodoItem);
// export default TodoItem;
