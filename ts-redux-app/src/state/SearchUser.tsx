import React, { useState } from "react";
interface User {
  name: string;
  age: number;
}
const userCheck: User = {
  name: "hung",
  age: 12,
};

const SearchUser: React.FC = () => {
  const [name, setName] = useState("");

  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    if (userCheck.name === name) {
      setUser(userCheck);
    }
  };
  return (
    <div>
      <h3>Search User</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      {user && user.name}

      <strong>{user && user.age}</strong>
    </div>
  );
};

export default SearchUser;
