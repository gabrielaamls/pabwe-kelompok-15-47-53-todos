import React, { useEffect, useState } from "react";
import { getTodo, editTodo } from "../utils/data-todos";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchedTodo = getTodo(parseInt(id));
    setTodo(fetchedTodo);
    if (fetchedTodo) {
      setTitle(fetchedTodo.title);
      setDescription(fetchedTodo.description);
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo({
      id: parseInt(id),
      title,
      description,
      is_finished: todo.is_finished,
    });
    navigate("/");
  };

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h3>Edit Todo</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
