function createGame(player1, hour, player2, group) {
  return `
    <li>
      <div>
        <p class="group">Grupo ${group}</p>
        <div class="container">
        <div class="team-container">
      <img src="./assets/icon-${player1}.svg" title="${player1}" alt="Bandeira do ${player1}" />
      <p>${player1}</p>
      </div>
      <strong>${hour}</strong>
      <div class="team-container">
      <img src="./assets/icon-${player2}.svg" title="${player2}" alt="Bandeira da ${player2}" />
      <p>${player2}</p>
    </li>
     `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("Catar", "13:00", "Equador", "A")) +
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Irã", "B") +
      createGame("Senegal", "13:00", "Holanda", "A") +
      createGame("Estados Unidos", "16:00", "Gales", "B")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Arabia Saudita", "C") +
      createGame("Dinamarca", "10:00", "Tunísia", "D") +
      createGame("México", "13:00", "Polônia", "C") +
      createGame("França", "16:00", "Australia", "D")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("Marrocos", "07:00", "Croacia", "F") +
      createGame("Alemanha", "10:00", "Japão", "E") +
      createGame("Espanha", "13:00", "Costa Rica", "E") +
      createGame("Belgica", "16:00", "Canada", "F")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("Suíça", "07:00", "Camarões", "G") +
      createGame("Uruguai", "10:00", "Coreia do Sul", "H") +
      createGame("Portugal", "13:00", "Gana", "H") +
      createGame("Brasil", "16:00", "Sérvia", "G")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Gales", "07:00", "Irã", "B") +
      createGame("Catar", "10:00", "Senegal", "A") +
      createGame("Holanda", "13:00", "Equador", "A") +
      createGame("Inglaterra", "16:00", "Estados Unidos", "B")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("Tunísia", "07:00", "Australia", "D") +
      createGame("Polônia", "10:00", "Arabia Saudita", "C") +
      createGame("França", "13:00", "Dinamarca", "D") +
      createGame("Argentina", "16:00", "México", "C")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japão", "07:00", "Costa Rica", "E") +
      createGame("Belgica", "10:00", "Marrocos", "F") +
      createGame("Croacia", "13:00", "Canada", "F") +
      createGame("Espanha", "16:00", "Alemanha", "E")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Camarões", "07:00", "Sérvia", "G") +
      createGame("Coreia do Sul", "10:00", "Gana", "H") +
      createGame("Brasil", "13:00", "Suíça", "G") +
      createGame("Portugal", "16:00", "Uruguai", "H")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Equador", "12:00", "Senegal", "A") +
      createGame("Holanda", "12:00", "Catar", "A") +
      createGame("Irã", "16:00", "Estados Unidos", "B") +
      createGame("Gales", "16:00", "Inglaterra", "B")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Tunísia", "12:00", "França", "D") +
      createGame("Australia", "12:00", "Dinamarca", "D") +
      createGame("Polônia", "16:00", "Argentina", "C") +
      createGame("Arabia Saudita", "16:00", "México", "C")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Croacia", "12:00", "Belgica", "F") +
      createGame("Canada", "12:00", "Marrocos", "F") +
      createGame("Japão", "16:00", "Espanha", "E") +
      createGame("Costa Rica", "16:00", "Alemanha", "E")
  ) +
  createCard(
    "02/12",
    "sexta ",
    createGame("Coreia do Sul", "12:00", "Portugal", "H") +
      createGame("Gana", "12:00", "Uruguai", "H") +
      createGame("Suíça", "16:00", "Sérvia", "G") +
      createGame("Brasil", "16:00", "Camarões", "G")
  )
