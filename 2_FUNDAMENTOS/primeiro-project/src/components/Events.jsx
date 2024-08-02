const Events = () => {
  const hadleMyEvent = (e) => {
    console.log(e);
    console.log("botao sendo clicado");
  };

  const funcaoDeRenderizacao = (valor) => {
    if (valor) {
      return <h1>Valor true</h1>;
    }

    return <h1>Valor falso</h1>;
  };

  return (
    <div>
      <div>
        <button onClick={hadleMyEvent}>Clique aqui</button>
      </div>

      <div>
        <button
          onClick={() =>
            console.log("se for uma funcao simples é suave criar assim")
          }
        >
          Funcao simples
        </button>
      </div>

      <div>
        {funcaoDeRenderizacao(true)}
        {funcaoDeRenderizacao(false)}
      </div>
    </div>
  );
};

export default Events;
