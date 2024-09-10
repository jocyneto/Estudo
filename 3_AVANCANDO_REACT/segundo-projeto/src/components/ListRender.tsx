import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["joana", "lucas", "pedro", "marta"]);
  const [users, setUsers] = useState([
    { id: 1, nome: "pessoa1" },
    { id: 2, nome: "pessoa2" },
    { id: 3, nome: "pessoa3" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUser) => {
      console.log(prevUser);
      return prevUser.filter((user) => randomNumber != user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default ListRender;
