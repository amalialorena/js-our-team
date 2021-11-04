// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const team =
[
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'foto': 'img/wayne-barnett-founder-ceo.jpg'
    }

    {
        'nome':'Angela Caroll',
        'ruolo':'Chief editor' ,
        'foto':'img/angela-caroll-chief-editor.jpg'
    }

    {
        'nome':'Walter Gordon',
        'ruolo':'Office manager',
        'foto':'walter-gordon-office-manager.jpg'
    }

    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic designer',
        'foto':'img/barbara-ramos-graphic-designer.jpg'
    }

    {
        'nome':'Angela Lopez',
        'ruolo':'Media manager',
        'foto':'img/angela-lopez-social-media-manager.jpg'
    }

    {
        'nome':'Scott Estrada',
        'ruolo':'developer',
        'foto':'img/scott-estrada-developer.jpg'
    }


]

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team. 
     //faccio un ciclo che mi prende tutti i dati contenuti nei oggetti
       // quei dati li stampo in pagina 
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

