// App.jsx
import { useState } from "react";
import "./Style.css";

function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdicionaItem = () => {
    const textoSemEspaco = inputText.trim();
    if (textoSemEspaco === "") return;

    const newItem = {
      id: crypto.randomUUID(),
      itemLista: textoSemEspaco,
    };

    setItemList((prev) => [...prev, newItem]);
    setInputText("");
  };

  const handleExcluirItem = (id) => {
    setItemList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="titulo">Minha Lista ✍️</h1>

      <div className="input-container">
        <input
          type="text"
          className="input-texto"
          placeholder="Digite uma tarefa..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdicionaItem()}
        />
        <button className="botao-adicionar" onClick={handleAdicionaItem}>
          Adicionar
        </button>
      </div>

      {itemList.length === 0 ? (
        <p className="mensagem-vazia">🚫 Nenhuma tarefa na lista.</p>
      ) : (
        <ul className="lista">
          {itemList.map((item) => (
            <li key={item.id} className="item fade-in">
              <span>{item.itemLista}</span>
              <button
                className="botao-excluir"
                onClick={() => handleExcluirItem(item.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
