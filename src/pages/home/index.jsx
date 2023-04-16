import { useEffect, useState } from "react";
import './style.css';
import { getAllUsers } from "../services/api";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.data.users);
  }

  const Renderusers = users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td><button className="btn btn-primary" onClick={() => {navigate(`/user/${user.id}`)}}>More Info</button></td>
        </tr>
      );
    })

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {Renderusers}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HomePage;