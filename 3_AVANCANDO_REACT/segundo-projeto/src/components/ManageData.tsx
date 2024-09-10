import React, { useState } from "react";

const ManageData = () => {
  const [numero, SetNumero] = useState(1);
  return (
    <div>
      <p>valor: {numero}</p>
      <button onClick={() => SetNumero(33)}>Alterar valor</button>
    </div>
  );
};

export default ManageData;
