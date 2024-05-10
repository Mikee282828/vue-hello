const { createApp } = Vue;

createApp({
    data(){
        return {
            message: "Ciao fatto con vue",
            image: "https://picsum.photos/200/300"
        }
    }
}).mount("#app");

////////////////////////////////////////////////////////////////////////////////

// const createApp = Vue.createApp;

// // createApp prende in ingresso un oggetto
// createApp({
//     // contenente per ora data(){} che è una funzione che restituisce un oggetto
//     data(){
//         return{
//             message: "Ciao"
//         }
//     },
//     // contenente per ora methods che è una chiave che ha come valore un oggetto composta da funzioni
//     methods: {
//         ciao(){
//             console.log("ciao");
//         }
//     }
// }).mount("#app");

////////////////////////////////////////////////////////////////////////////////

// const { createApp } = Vue;

// let configurazione = {
//     data(){
//         return {
//             message : "Ciao"
//         }
//     },
//     methods : {
//         ciao(){
//             console.log("ciao");
//         },
//         ciao2(){
//             console.log("arrivederci");
//         }
//     }
// };

// let app = createApp(configurazione);

// app.mount("#app");
////////////////////////////////////////////////////////////////////////////////////////////////////////
//prove
const input = document.querySelector("#prova>input");
const h1 = document.querySelector("#prova>h1");

setInterval(function(){
    h1.innerHTML = input.value;
},0);