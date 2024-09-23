import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [y] = useState(false);
  const [name, setName] = useState("Jocy");
  return (
    <div>
      <h2>Condicionais simples</h2>
      {x && <p>O valor é verdadeiro.</p>}
      {!y && <p>valor é falso negado.</p>}
      {name === "Jocy" ? (
        <div>
          <p> Nome é jocy</p>
        </div>
      ) : (
        <div>
          <p>nome não é jocy</p>
        </div>
      )}
      <button onClick={() => setName("Gabriela")}>CLique aqui</button>
    </div>
  );
};

export default ConditionalRender;
