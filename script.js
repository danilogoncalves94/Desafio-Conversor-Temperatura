function clicar() {
    let tempCelsius = prompt('Digite uma temperatura em °C (Celsius)')
    if (tempCelsius.length == 0) {
        alert('Por favor, digite uma temperatura.')
    } else {
        let tempCelsiusReal = parseFloat(tempCelsius)
        if (isNaN(tempCelsiusReal)) {
            alert('Por favor, digite uma temperatura válida.')
        } else {
            let f = tempCelsiusReal * 1.8 + 32
            let k = tempCelsiusReal + 273.15

            let novoConteudo = document.getElementById('secao')
            novoConteudo.innerHTML = `<h2>A temperatura de <span>${tempCelsiusReal.toLocaleString()}°C</span>, corresponde a...<h2>`
            novoConteudo.innerHTML += `<p class="paragrafos">${k.toLocaleString()}°K (Kelvin)</p>`
            novoConteudo.innerHTML += `<p class="paragrafos">${f.toLocaleString()}°F (Fahrenheit)</p>`
        }
    }
}