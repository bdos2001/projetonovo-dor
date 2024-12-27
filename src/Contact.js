import React from 'react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !assunto || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    navigate("/Home");
  };

  return (
    <div className="contact">
      <h1>Contacto</h1>
      <p>Tem alguma sugestão de como podemos melhorar o nosso serviço? Não hesite em mandar mensagem!</p>

      <form>
        <label>Nome:</label><br />
        <input type="text" id="nome" required /><br />
        <label>Assunto:</label><br />
        <input type="text" id="assunto" required /><br />
        <label>Mensagem:</label><br />
        <textarea id="mensagem" required style={{ width: '30%', height: '150px' }}></textarea><br />
        <button type="submit" id="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;