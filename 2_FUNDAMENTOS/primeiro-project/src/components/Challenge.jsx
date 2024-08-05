const Challenge = () => {
  let valor1 = 2;
  let valor2 = 55;

  const challengeOnClick = () => {
    console.log(valor1);
    console.log(valor2);
  };

  console.log("Imprima os valores do console ", valor1, " e ,", valor2);
  return (
    <>
      <h1>Os valores criados:</h1>
      <p>
        {valor1}, {valor2}
      </p>
      <p onClick={challengeOnClick}>Clique Aqui</p>
    </>
  );
};

export default Challenge;
