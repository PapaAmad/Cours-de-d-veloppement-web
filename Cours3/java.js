// alert('je suis dans le fichier java.js');
/*function show (node, div) {
    var node = node.value;
    var div = div.value
};*/

function TableMultiplication(n) {
    // Vérifie si n est un nombre valide
    if (typeof n !== 'number' || n <= 0) {
        console.error("Veuillez entrer un nombre positif.");
        return;
    }

    var tableBody = document.getElementById("table-body");

    for (var j = 1; j <= 10; j++) {
        var result = n * j;
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        cell1.textContent = n + " x " + j;
        cell2.textContent = result;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    }
}

TableMultiplication(5);

/*  
var i =0
while(i <10){
    document.write(i + " ");
    i++
}*/