
//Evitando que alguem sem acesso entra na pasta index
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../../index.html";
    }
})