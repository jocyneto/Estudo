import ReaproveitandoComponent from "./ReaproveitandoComponent";

const TempletaExpressionComponent = () => {
  const nome = "Fulano";
  const dados = {
    profissao: "Profissao 1",
    idade: 31,
  };

  return (
    <div>
      <p>Nome da pessoa: {nome}</p>
      <p>Profissao: {dados.profissao}</p>
      {1 + 1}
      {console.log("Qualquer coisa aqui dentro desta chave é um código JS")}

      <ReaproveitandoComponent></ReaproveitandoComponent>
    </div>
  );
};

export default TempletaExpressionComponent;
