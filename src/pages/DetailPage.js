import React, { useState, useEffect } from "react"; //ditambahi
import { getTodo } from "../utils/data-todos";
import { useParams } from "react-router-dom";
import * as Icon from "react-feather";
import { formatDate } from "../utils/tools";

function DetailPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null); //p
  const [loading, setLoading] = useState(true); //p

  useEffect(() => {
    const fetchTodo = () => {
      const fetchedTodo = getTodo(parseInt(id));
      setTodo(fetchedTodo);
      setLoading(false);
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return;
  }

  if (!todo) {
    return;
  }

  const badgeStatus = todo.is_finished ? (
    <span className="badge bg-success">Selesai</span>
  ) : (
    <span className="badge bg-warning">Proses</span>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card mt-3">
            <div className="card-body">
              <h3>
                {todo.title} {badgeStatus}
              </h3>
              <hr />
              <div>
                {todo.is_finished && (
                  <div>
                    <Icon.Check /> Selesai pada:
                    <span className="ms-2 text-success">
                      {formatDate(todo.updated_at)}
                    </span>
                  </div>
                )}
                <div className="text-middle">
                  <Icon.Clock /> Dibuat pada:
                  <span className="ms-2 text-muted">
                    {formatDate(todo.created_at)}
                  </span>
                </div>
              </div>
              <hr />
              <p>{todo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
