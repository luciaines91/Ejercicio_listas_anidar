var expensesArray = [];

function showTableList(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let Persona = array[i];
        for (let x = 0; x < Persona.WEEK.length; x++) {
            let Semana = Persona.WEEK[x];
            for (let y = 0; y < Semana.EXPENSE.length; y++) {
                let Cantidad = Semana.EXPENSE[y];

                htmlContentToAppend += `

        <tr>
        <td>` + Persona.WHO + `</td>
        <td>` + Semana.NUMBER + `</td>
        <td>` + Cantidad.WHAT + `</td>
        <td>` + Cantidad.AMOUNT + `</td>
        </tr>
        `
            };
        };
    };
    document.getElementById("tabla").innerHTML += htmlContentToAppend;
};
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(OBJETO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            expensesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showTableList(expensesArray);
        }
    });
});