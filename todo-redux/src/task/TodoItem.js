import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import store from "../store";
import PropTypes from "prop-types";

function TodoItem({ todoReducer: { process, finished }, task, checked }) {
  const onChange = ({ status }) => {
    if (status) {
      store.dispatch({
        type: "add__again",
        payload: { process: task, mess: "update success" },
      });
    } else {
      store.dispatch({
        type: "remove",
        payload: { finished: task, mess: "finished working" },
      });
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        className="list__checkbox"
        onChange={() => onChange({ status: checked })}
      />
      <p>{task}</p>
    </li>
  );
}
TodoItem.propTypes = {
  todoReducer: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  todoReducer: state.todoReducer,
});

export default connect(mapStateToProps, null)(TodoItem);
