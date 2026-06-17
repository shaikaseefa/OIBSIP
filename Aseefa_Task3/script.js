function convert() {
    let input = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('sourceUnit').value;
    
    if (isNaN(input)) {
        alert("Please enter a valid number");
        return;
    }

    let tempC;
    // Normalize to Celsius
    if(unit === 'C') tempC = input;
    else if(unit === 'F') tempC = (input - 32) * 5/9;
    else tempC = input - 273.15;

    // Calculate others
    let fahrenheit = (tempC * 9/5) + 32;
    let kelvin = tempC + 273.15;
    
    // Update display
    document.getElementById('resF').innerText = fahrenheit.toFixed(2) + " °F";
    document.getElementById('resK').innerText = kelvin.toFixed(2) + " K";
    
    // Make results visible
    document.getElementById('resultsArea').style.display = 'grid';
}