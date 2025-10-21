const zone_drop = document.getElementById("zone-de-drop");
const input_fichier = document.getElementById("image");
const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const form = document.getElementById("envoyer");


zone_drop.addEventListener("dragover", (e) => {
    e.preventDefault();
}, false);

zone_drop.addEventListener("drop", (e) => {
    e.preventDefault();
    fichiers = e.dataTransfer.files;
    if (fichiers.length > 1) {
        alert("Vous ne pouvez déposer qu'une seule image à la fois !");
        return;
    };
    if (!acceptedImageTypes.includes(fichiers[0].type)) {
        alert("Le fichier déposé n'est pas une image valide (JPEG, PNG, GIF, WEBP).");
        return;
    };
    input_fichier.files = fichiers;
});

input_fichier.addEventListener("change", () => {
    form.dispatchEvent(new Event('submit'));
});