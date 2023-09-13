document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const result = document.getElementById('result');
    const warningText = document.getElementById('warningText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');
    const floatingImage = document.querySelector('.floating-image'); // Agregamos la referencia a la imagen

    function encryptText(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decryptText(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function toggleFloatingImage(show) {
        if (show) {
            floatingImage.style.display = 'block';
            warningText.style.display = 'block';
        } else {
            floatingImage.style.display = 'none';
            warningText.style.display = 'none';
        }
    }

    function handleButtonClick() {
        const textToProcess = inputText.value.toLowerCase();
        if (textToProcess === '') {
            toggleFloatingImage(true); // Mostrar la imagen y el mensaje de error
            result.textContent = '';
            outputText.value = '';
        } else {
            toggleFloatingImage(false); // Ocultar la imagen y el mensaje de error
            const processedText = encryptButton === this ? encryptText(textToProcess) : decryptText(textToProcess);
            result.textContent = `Texto ${encryptButton === this ? 'encriptado' : 'desencriptado'}: ${processedText}`;
            outputText.value = processedText;
        }
    }

    encryptButton.addEventListener('click', handleButtonClick);
    decryptButton.addEventListener('click', handleButtonClick);

    copyButton.addEventListener('click', function () {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
