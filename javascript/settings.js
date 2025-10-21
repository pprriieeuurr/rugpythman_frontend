function valider() {
    const entree = document.getElementById("url").value
    fetch(`${entree}/ok`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Le serveur ne répond pas ok.");
            } else {
                localStorage.setItem("server-rugpythman",entree)
                window.location.href = "./index.html";
    }})
}