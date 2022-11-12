

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
} 

// const storage = firebase.storage().ref();
// const db = firebase.firestore();
// const formClient = document.querySelector('#form-cliente');

// formClient.addEventListener('submit',(e) =>{
//     e.preventDefault();
//     let comprovanteText = document.querySelector('[name=comprovante]').value;
//     let arquivo =document.querySelector('[name=arquivo]').files[0];

//     const uploadTask = storage.ref('videos/'+arquivo.name).put(arquivo);

//     uploadTask.on('state_changed',(snapshot)=>{
//         const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;
//         console.log(progress);
//     },
//     function(error){

//     },
    
//     function(){
//         console.log('Upload realizado com sucesso')
//     }

//     )

    
//})