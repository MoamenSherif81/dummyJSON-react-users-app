import { useParams } from "react-router-dom";
import { getSingleUser, getSingleUserPosts, getSingleUserTodos } from "../services/api";
import { useEffect, useState } from "react";

function SingleUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

  const getUser = async () => {
    const res = await getSingleUser(id);
    setUser(res.data);
  }
  const getUserPosts = async () => {
    const res = await getSingleUserPosts(id);
    setUserPosts(res.data.posts);
  }

  const renderUserPosts = userPosts.map((post) => (
    <div key={post.id} className="border my-2 px-3 py-2">
      <h4>{post.title}</h4>
      <p className="">{post.body}</p>
      <p className="fw-bolder">Likes: {post.reactions}</p>
    </div>
  ))
  const getUserTodos = async () => {
    const res = await getSingleUserTodos(id);
    setUserTodos(res.data.todos);
  }

  const renderUserTodos = userTodos.map((todo) => (
    <div key={todo.id} className="border my-2 px-3 py-2">
      <h4>{todo.todo}</h4>
      {todo.completed ? <p className="mb-0 text-success">Completed</p> : <p className="mb-0 text-warning">In progress...</p>}
    </div>
  ))

  useEffect(() => {
    getUser();
    getUserPosts();
    getUserTodos();
  }, [])

  return (
    <>
      <div className="d-flex border rounded-2 py-2 d-flex align-items-center mb-3">
        <img className="" src={user.image} alt="" />
        <div>
          <h3>{user.firstName} {user.lastName}</h3>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      </div>
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-posts-tab" data-bs-toggle="tab" data-bs-target="#nav-posts" type="button" role="tab" aria-controls="nav-posts" aria-selected="true">Posts</button>
            <button className="nav-link" id="nav-todos-tab" data-bs-toggle="tab" data-bs-target="#nav-todos" type="button" role="tab" aria-controls="nav-todos" aria-selected="true">Todos</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-posts" role="tabpanel" aria-labelledby="nav-posts-tab" tabIndex={0}>
            <div className="user-posts">
              {renderUserPosts}
            </div>
          </div>
          <div className="tab-pane fade" id="nav-todos" role="tabpanel" aria-labelledby="nav-todos-tab" tabIndex={0}>
            <div className="user-todos">
              {renderUserTodos}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleUserPage;