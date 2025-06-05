import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function PnLSimulationForm() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${API_BASE_URL}/pnl/simulate`,
        {
          data: input,
        }
      );
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
      {response && <div><h3>Resultado:</h3><pre>{JSON.stringify(response, null, 2)}</pre></div>}
    </form>
  );
}

export default PnLSimulationForm;
