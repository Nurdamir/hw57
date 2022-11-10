import React from 'react';
import {User} from "../types"

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mt-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <strong>Name:</strong> {user.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
        <li className="list-group-item"><strong>Active:</strong> {user.active ? "Yes" : "No"}</li>
        <li className="list-group-item"><strong>Role:</strong>  {user.role}</li>
      </ul>
    </div>
  );
};

export default UserItem;