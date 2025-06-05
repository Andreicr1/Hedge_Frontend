import React, { useState } from "react";
import axios from "axios";

function PnLSimulationForm() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://127.0.0.1:8000/pnl/simulate", {
        data: input,
      });
      setResponse(result.data);
    } catch (error) {
      console.error("Erro ao enviar simulação:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dados para Simulação:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Simular</button>
      {response && (
        <div>
          <h3>Resultado:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}

export default PnLSimulationForm;
