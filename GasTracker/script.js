function calculateResult() {
    var Kmdriven = parseFloat(document.getElementById('Kmdriven').value);
    var Fcons = parseFloat(document.getElementById('Fcons').value);
    var Fprice = parseFloat(document.getElementById('Fprice').value);
    
    var result = Kmdriven / Fcons * Fprice;

    var formattedResult = result.toFixed(2);

    document.getElementById('result').textContent = 'R$ ' + formattedResult;
}
