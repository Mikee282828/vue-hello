const { createApp } = Vue;

createApp({
    data(){
        return {
            message: "Ciao",
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

