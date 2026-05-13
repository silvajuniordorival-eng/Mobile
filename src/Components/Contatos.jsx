import React from 'react'

const Contatos = () => {
  const [telefone, setTelefone] = useState('');


  const numeroWhatsApp = telefone.replace(/\D/g, '');


  const mensagem = encodeURIComponent(
    `🎉 VEM COMEMORAR MEU ANIVERSÁRIO! 🎂\n\n` +
    `Quero te convidar para celebrar mais um ano de vida ao meu lado.\n\n` +
    `Vai ser uma festa simples, mas com muita conversa boa, música e, claro, bolo!\n\n` +
    `📍 Local: [sua casa / churrasqueira / bar]\n` +
    `📅 Data: [dia/mês]\n` +
    `🕢 Horário: [horário]\n\n` +
    `Sua presença já é o melhor presente! ❤️`
  );


  const linkWhatsApp = `https://wa.me/55${numeroWhatsApp}?text=${mensagem}`;


  return (

    <div className="contatos">
      <h2>Convidado</h2>

      <div className="input-container">
        <label htmlFor="telefone">Digite o número do WhatsApp:</label>
        <br />
        <input
          type="tel"
          id="telefone"
          placeholder="43999999999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          maxLength={11}
        />
      </div>

    </div>





  )
}

export default Contatos
