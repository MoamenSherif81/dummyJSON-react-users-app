import { Link } from 'react-router-dom';
import './style.css'

function UserCard(props) {
  const user = props.user;
  return (
    <div className="card">
      <div className="card-img">
        <img src={user.image} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{user.firstName + ' ' + user.lastName}</h5>
        <Link to={`/user/${user.id}`} className='btn btn-primary'>User Info</Link>
      </div>
    </div>
  );
}

export default UserCard;