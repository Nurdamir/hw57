import React from 'react';
import {User} from "../types"

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  // style="width: 18rem;"

  return (
    <div className="card mt-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <strong>Name:</strong>{user.name}</li>
        <li className="list-group-item"><strong>Email:</strong>{user.email}</li>
        <li className="list-group-item">Active: {user.active ? "Yes" : "No"}</li>
        <li className="list-group-item">Role: {user.role}</li>
      </ul>
    </div>




    // <div>
    //   <table className="table">
    //     <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">Name</th>
    //       <th scope="col">Email</th>
    //       <th scope="col">Active</th>
    //       <th scope="col">Role</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>{user.name}</td>
    //       <td>{user.email}</td>
    //       <td>{user.active ? "Yes" : "No"}</td>
    //       <td>{user.role}</td>
    //     </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default UserItem;