/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */



//milestone 0
const team = [
    {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "./assets/img/wayne-barnett-founder-ceo.jpg"},
    {nome: "Angela Caroll", ruolo: "Chief Editor", foto: "./assets/img/angela-caroll-chief-editor.jpg"},
    {nome: "Walter Gordon", ruolo: "Office Manager", foto: "./assets/img/walter-gordon-office-manager.jpg"},
    {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "./assets/img/angela-lopez-social-media-manager.jpg"},
    {nome: "Scott Estrada", ruolo: "Developer", foto: "./assets/img/scott-estrada-developer.jpg"},
    {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "./assets/img/barbara-ramos-graphic-designer.jpg"}
 ];

 //milestone 1
//for in per visualizzare ogni singola stringa
 for(let key in team) {
    console.log(team[key]);
 }

//milestone 2 
//selezione elemento dom
const DomEl = document.querySelector(".row");

//funzione for

for (let i = 0; i < team.length; i++) {
    const membro = team[i];
    const markupEl =
    `<div class="col-12 col-md-4">
       <div class="card border-0 shadow bg-primary-subtle">
          <img src="${membro["foto"]}" class="card-img-top rounded-end-circle">
          <div class="card-body">
             <h3 class="card-title">${membro["nome"]}</h3>
             <div class="card-text">${membro["ruolo"]}</div>
          </div>
       </div>
    </div>`;
    
    //stamparlo con insertadjcenhtml
    DomEl.insertAdjacentHTML("beforeend", markupEl);
 
 }
