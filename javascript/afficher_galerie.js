if (localStorage.getItem("server-rugpythman") !== null) {
    const apiUrl = localStorage.getItem("server-rugpythman");
} else {
    const apiUrl = `http://127.0.0.1:8000`;
}
const fancardsDiv = document.getElementById("fancards")


fetch(`${apiUrl}/cartes`)
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
    console.error('Error:', error);
  });


  