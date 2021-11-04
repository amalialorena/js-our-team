// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg",
  },

  {
    nome: "Angela Caroll",
    ruolo: "Chief editor",
    foto: "img/angela-caroll-chief-editor.jpg",
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office manager",
    foto: "img/walter-gordon-office-manager.jpg",
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic designer",
    foto: "img/barbara-ramos-graphic-designer.jpg",
  },

  {
    nome: "Angela Lopez",
    ruolo: "Media manager",
    foto: "img/angela-lopez-social-media-manager.jpg",
  },

  {
    nome: "Scott Estrada",
    ruolo: "developer",
    foto: "img/scott-estrada-developer.jpg",
  }
];

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
//faccio un ciclo che mi prende tutti i dati contenuti negli oggetti
// stampo in pagina i dati ottenuti

let cardsContainer = document.querySelector(".team-container");
function cards(team) {
  for (let i = 0; i < team.length; i++) {
    let teamObj = team[i];
    console.log(teamObj.nome);
    console.log(teamObj.ruolo);
    console.log(teamObj.foto);

    cardsContainer.innerHTML += `<div class="team-card">
        <div class="card-image">
    <img
        src=${teamObj.foto}
        alt=${teamObj.nome}
    />
    </div>
    <div class="card-text">
    <h3>${teamObj.nome}</h3>
    <p>${teamObj.ruolo}</p>
    </div>
    </div>`;
  }
}

cards(team);

// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
    //seleziono gli elementi di input del dom
    //li trasformo in un ogetto da pushare nel mio array

let newMemberName = document.getElementById("name").innerText;
let newMemberRole = document.getElementById("role").innerText;
let newMemberImage = document.getElementById("image").innerText;
let addMember = document.getElementById("addMemberButton");
// let newMember = {
//     nome : newMemberName,
//     ruolo : newMemberRole,
//     foto : newMemberImage
// };


console.log(team)

addMember.addEventListener("click",
    function(){
        console.log("hello");
         team.push(newMember)
    }
)