// const { createApp } = Vue;

// createApp({
//     data(){
//         return {
//             message: "Ciao"
//         }
//     }
// }).mount("#app");

const createApp = Vue.createApp;

// createApp prende in ingresso un oggetto
createApp({
    // contenente per ora data(){} che è una funzione che restituisce un oggetto
    data(){
        return{
            message: "Ciao"
        }
    },
    // contenente per ora methods che è una chiave che ha come valore un oggetto composta da funzioni
    methods: {
        ciao(){
            console.log("ciao");
        }
    }
}).mount("#app");