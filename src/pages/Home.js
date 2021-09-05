import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SimpleReactValidator from "simple-react-validator";
import Tasks from "../components/Tasks";
import { selectTasks, setTasks } from "../features/taskSlice";
function Home() {
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate(1) },
    })
  );
  const [title, setTitle] = useState("");
  const { tasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  function create(event) {
    event.preventDefault();
    if (validator.current.allValid()) {
      dispatch(setTasks({title: title}))
      setTitle("");
    } else {
      validator.current.showMessages();
    }
  }
  return (
    <>
      <div className="uk-container">
        <div className="uk-card uk-card-default uk-width-1-1@m">
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                  Nova Tarefa
                </h3>
                <form className="uk-form-stacked" onSubmit={create}>
                  <div className="uk-margin">
                    <label className="uk-form-label">Titulo</label>
                    <div className="uk-form-controls">
                      <input
                        className="uk-input"
                        id="form-stacked-text"
                        type="text"
                        value={title}
                        placeholder="Minha tarefa..."
                        onChange={(event) => {
                          setTitle(event.target.value);
                        }}
                      />
                      <span className="uk-text-danger">
                        {validator.current.message(
                          "title",
                          title,
                          "required|min:5|max:120"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="uk-float-right">
                    <button
                      className="uk-button uk-button-secondary uk-button-small"
                      type="submit"
                    >
                      ADD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <Tasks tasks={tasks} />
            {tasks.length === 0  && <h5>Nenhuma tarefa registada</h5>}
          </div>
          <div className="uk-card-footer"></div>
          <Link to="/admin/201">Admin</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
