function verification() {
    // Récupérer les valeurs des champs
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var commentaire = document.getElementById('commentaire').value;

    // Variables pour les messages d'erreur
    var errorNom = document.getElementById('errorNom');
    var errorPrenom = document.getElementById('errorPrenom');
    var errorEmail = document.getElementById('errorEmail');
    var errorCommentaire = document.getElementById('errorCommentaire');

    var isValid = true;

    // Vérification du champ Nom
    if (nom.trim() === "") {
        errorNom.innerHTML = "Le nom est obligatoire.";
        errorNom.style.color = "red";
        document.getElementById('nom').style.borderColor = "red";
        isValid = false;
    } else if (nom.length < 2) {
        errorNom.innerHTML = "Le nom doit contenir au moins 2 caractères.";
        errorNom.style.color = "red";
        document.getElementById('nom').style.borderColor = "red";
        isValid = false;
    } else {
        errorNom.innerHTML = "";
        document.getElementById('nom').style.borderColor = "green";
    }

    // Vérification du champ Prénom
    if (prenom.trim() === "") {
        errorPrenom.innerHTML = "Le prénom est obligatoire.";
        errorPrenom.style.color = "red";
        document.getElementById('prenom').style.borderColor = "red";
        isValid = false;
    } else if (prenom.length < 2) {
        errorPrenom.innerHTML = "Le prénom doit contenir au moins 2 caractères.";
        errorPrenom.style.color = "red";
        document.getElementById('prenom').style.borderColor = "red";
        isValid = false;
    } else {
        errorPrenom.innerHTML = "";
        document.getElementById('prenom').style.borderColor = "green";
    }

    // Vérification de l'email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        errorEmail.innerHTML = "L'email est obligatoire.";
        errorEmail.style.color = "red";
        document.getElementById('email').style.borderColor = "red";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errorEmail.innerHTML = "L'email est invalide.";
        errorEmail.style.color = "red";
        document.getElementById('email').style.borderColor = "red";
        isValid = false;
    } else {
        errorEmail.innerHTML = "";
        document.getElementById('email').style.borderColor = "green";
    }

    // Vérification du commentaire
    if (commentaire.trim() === "") {
        errorCommentaire.innerHTML = "Le commentaire est obligatoire.";
        errorCommentaire.style.color = "red";
        document.getElementById('commentaire').style.borderColor = "red";
        isValid = false;
    } else {
        errorCommentaire.innerHTML = "";
        document.getElementById('commentaire').style.borderColor = "green";
    }

    // Si tout est valide, on permet l'envoi du formulaire, sinon on bloque l'envoi
    return isValid;
}
