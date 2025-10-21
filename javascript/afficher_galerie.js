let apiUrl
const message = document.getElementById("alerte");

if (localStorage.getItem("server-rugpythman") !== null) {
    apiUrl = localStorage.getItem("server-rugpythman");
} else {
    window.location.href = "./settings.html";
}
const fancardsDiv = document.getElementById("fancards")


fetch(`${apiUrl}/cartes`,{"method": "GET",headers:{"ngrok-skip-browser-warning":"true"}})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for (const donnee in data) {
        fancardsDiv.innerHTML += `<article class="fancard"><header><h2>${data[donnee]["gen_noms"]}</h2></header><img src="${apiUrl}/images/${data[donnee]["image_hash"]}" alt=""><h3>Age</h3><p>${data[donnee]["gen_age"]} ans</p><h3>Poste</h3><p>${data[donnee]["gen_poste"]}</p><h3>Description</h3><p>${data[donnee]["gen_description"]}</p></article>`
    }
  })
  .catch(error => {
    message.classList.remove("message-bleu");
    message.classList.add("message-rouge");
    message.innerHTML = "Une erreur s'est produite. Si le problème periste, <a href='./settings.html'>tentez de modifier le serveur</a>.";
  });


  