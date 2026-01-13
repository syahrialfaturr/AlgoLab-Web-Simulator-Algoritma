function show(type) {
    if (type === "huffman") {
        document.getElementById("content").innerHTML = `
            <h2>Huffman Coding</h2>
            <textarea id="text"></textarea><br>
            <button onclick="runHuffman()">Encode</button>
            <div id="output"></div>
        `;
    }
}

function runHuffman() {
    const text = document.getElementById("text").value;

    fetch("/huffman", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        })
        .then(res => res.json())
        .then(data => {
            let html = "<h3>Frekuensi Karakter</h3><ul>";
            for (let c in data.frequency) {
                html += `<li>${c} : ${data.frequency[c]}</li>`;
            }
            html += "</ul>";

            html += "<h3>Kode Huffman</h3><ul>";
            for (let c in data.codes) {
                html += `<li>${c} → ${data.codes[c]}</li>`;
            }
            html += "</ul>";

            html += "<h3>Hasil Encoding</h3>";
            html += `<pre>${data.encoded}</pre>`;

            document.getElementById("output").innerHTML = html;
        });
}