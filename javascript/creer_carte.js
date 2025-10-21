let apiUrl
if (localStorage.getItem("server-rugpythman") !== null) {
    apiUrl = `${localStorage.getItem("server-rugpythman")}/cartes`;
} else {
    window.location.href = "./settings.html";
}
const message = document.getElementById("alerte");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById("fancards").innerHTML = `<article class="fancard"><header><h2 class="generation-img">John Doe</h2></header><img src="${URL.createObjectURL(input_fichier.files[0])}" alt=""><h3>Age</h3><p class="generation-img">xx ans</p><h3>Poste</h3><p class="generation-img">Super poste</p><h3>Description</h3><p class="generation-img">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis similique dolores accusantium odit illum facilis eveniet architecto quo ad et asperiores consequuntur nisi dolor cumque quis, suscipit accusamus voluptatem?</p></article>`;
    if (message.classList.contains("message-rouge")){
        message.classList.remove("message-rouge")
        message.classList.add("message-bleu")
    }
    message.innerHTML = "Votre carte de rugbyman est en cours de génération. Merci de ne pas quitter cette page."
    const formData = new FormData(form);
    const requestOptions = {
        method: 'POST',
        body: formData,
    };
    document.getElementById("body").classList.remove("body")
    document.getElementById("body").innerHTML = "";

    fetch(apiUrl, requestOptions)    
        .then(response => {
            if (!response.ok) {
                throw new Error("Pas de réponse réseau");
            }
            return response.text();
        })
        .then(data => {
            message.innerHTML = ""
            window.location.href = "./galerie.html";
        })
        .catch(error => {
            message.classList.remove("message-bleu");
            message.classList.add("message-rouge");
            message.innerHTML = "Une erreur s'est produite";
        });
});
window.onbeforeunload = function(){
    if (message.innerHTML == "Votre carte de rugbyman est en cours de génération. Merci de ne pas quitter cette page.") {
        return "Êtes-vous sûr de vouloir fermer ? Si vous fermez cette page, votre carte ne sera pas générée..."
    }
};