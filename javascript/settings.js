const entree = document.getElementById("url")
entree.value = localStorage.getItem("server-rugpythman")
document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(`${entree.value}/ok`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Le serveur ne répond pas ok.");
            } else {
                localStorage.setItem("server-rugpythman",entree.value)
                window.location.href = "./index.html";
    }})
});