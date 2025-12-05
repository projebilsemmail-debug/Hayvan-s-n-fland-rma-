async function analyze() {
    const fileInput = document.getElementById("fileInput");
    const result = document.getElementById("result");

    if (!fileInput.files[0]) {
        result.innerText = "Lütfen bir fotoğraf yükleyin!";
        return;
    }

    result.innerText = "Analiz ediliyor...";

    // Fotoğrafı gönder
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    // BURADA replit bağlantın olacak
    const backendURL = "https://YOUR-REPLIT-URL.repl.co/analyze";

    const response = await fetch(backendURL, {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.error) {
        result.innerText = "Hata: " + data.error;
        return;
    }

    result.innerText = "Tahmin: " + data.label + " (%" + data.score + ")";
}