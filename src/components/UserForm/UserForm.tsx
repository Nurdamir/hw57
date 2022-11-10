import React, {useState} from 'react';
import {User, UserMutation} from "../types";

interface FormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<FormProps> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  // const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = e.target;
  //   setUser(prev => ({...prev, [name]: checked}))
  // }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
      }
    )
    console.log(user)
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>

      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={user.name}
          onChange={onTextFieldChange}

        />
      </div>
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={onTextFieldChange}
        />

      </div>

      <div className="form-group mb-2">
        <label><input
            type="checkbox"
            name="active"
            id="active"
            className="me-2"
            checked={user.active}
            onChange={(e) => {
              setUser(prev => ({...prev, active: e.target.checked}))
            }}

          />
          Active</label>


      </div>
      
      <div className="form-group mb-2">
        <label>
          <select
            required
            name="role"
            id="role"
            value={user.role}
            onChange={onTextFieldChange}
          >
            <option disabled value="">Select a role!</option>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
        
      </div>
      <button type="submit" className="btn btn-primary">Create</button>

    </form>
  );
};

export default UserForm;