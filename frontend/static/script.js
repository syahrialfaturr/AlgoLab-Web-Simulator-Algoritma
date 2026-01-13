function show(type) {
    if (type === "huffman") {
        document.getElementById("content").innerHTML = `
        <h2>Huffman Coding</h2>
        <textarea id="text" placeholder="Masukkan teks..."></textarea><br>
        <button class="action" onclick="runHuffman()">Encode</button>
        <div id="output"></div>
    `;
    }

    if (type === "bst") {
        document.getElementById("content").innerHTML = `
            <h2>Binary Search Tree</h2>
            <p>Masukkan angka (pisahkan dengan koma)</p>
            <input id="bstInput" placeholder="8,3,10,1,6,14,4,7,13">
            <br><br>
            <button class="action" onclick="runBST()">Proses</button>
            <div id="bstOutput"></div>
        `;
    }

    if (type === "dijkstra") {
        document.getElementById("content").innerHTML = `
            <h2>Dijkstra Algorithm</h2>

            <p>Edges (format: A-B-4)</p>
            <textarea id="edges" rows="6">
A-B-4
A-C-2
C-B-1
B-D-5
C-D-8
D-E-3
            </textarea>

            <p>Start:</p>
            <input id="start" value="A">

            <p>End:</p>
            <input id="end" value="E">

            <br><br>
            <button class="action" onclick="runDijkstra()">Cari Jalur</button>

            <div id="dijkstraOutput"></div>
        `;
    }
}

/* ===========================
   Huffman
=========================== */
function runHuffman() {
    const text = document.getElementById("text").value.trim();
    if (!text) {
        showAlert("Teks tidak boleh kosong");
        return;
    }

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
            if (data.error) {
                showAlert(data.error);
                return;
            }

            let html = "<h3>Kode Huffman</h3>";
            html += "<div class='huffman-codes'>";

            let delay = 0;
            for (let c in data.codes) {
                html += `<div class="huff-item" style="animation-delay:${delay}s">
                ${c} → ${data.codes[c]}
             </div>`;
                delay += 0.05;
            }

            html += "</div>";

            html += "<h3>Proses Encoding</h3>";
            html += "<div class='huffman-encode'>";

            delay = 0;
            for (let char of text) {
                html += `<span class="huff-bit" style="animation-delay:${delay}s">
                ${data.codes[char]}
             </span>`;
                delay += 0.15;
            }

            html += "</div>";

            document.getElementById("output").innerHTML = html;
        });
}

/* ===========================
   BST
=========================== */
function runBST() {
    const raw = document.getElementById("bstInput").value.trim();
    if (!raw) {
        showAlert("Masukkan angka BST");
        return;
    }

    const values = raw
        .split(",")
        .map(x => parseInt(x.trim()))
        .filter(x => !isNaN(x));

    fetch("/bst", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                values: values
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                showAlert(data.error);
                return;
            }

            let html = "<h3>Traversal</h3>";
            html += "<b>InOrder:</b> " + data.inorder.join(", ") + "<br>";
            html += "<b>PreOrder:</b> " + data.preorder.join(", ") + "<br>";
            html += "<b>PostOrder:</b> " + data.postorder.join(", ");

            // =========================
            // Visualisasi Tree (Animated)
            // =========================
            html += "<h3>Visualisasi Tree</h3>";
            html += "<div class='tree-container'>";

            let delay = 0;
            data.preorder.forEach(v => {
                html += `<div class="tree-node" style="animation-delay:${delay}s">${v}</div>`;
                delay += 0.1;
            });

            html += "</div>";

            document.getElementById("bstOutput").innerHTML = html;
        });
}

/* ===========================
   Dijkstra
=========================== */
function runDijkstra() {
    const lines = document.getElementById("edges").value.trim().split("\n");
    let edges = [];

    for (let line of lines) {
        const parts = line.split("-").map(x => x.trim());
        if (parts.length !== 3 || isNaN(parts[2])) {
            showAlert("Format edges salah. Gunakan A-B-4");
            return;
        }
        edges.push([parts[0], parts[1], parseInt(parts[2])]);
    }

    const start = document.getElementById("start").value.trim();
    const end = document.getElementById("end").value.trim();

    if (!start || !end) {
        showAlert("Start dan End harus diisi");
        return;
    }

    fetch("/dijkstra", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                edges: edges,
                start: start,
                end: end
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                showAlert(data.error);
                return;
            }

            let html = "<h3>Hasil</h3>";
            html += "<b>Total Jarak:</b> " + data.distance + "<br>";

            html += "<h3>Visualisasi Jalur</h3>";
            html += "<div class='path-container'>";

            let delay = 0;
            data.path.forEach(p => {
                html += `<div class="path-node" style="animation-delay:${delay}s">${p}</div>`;
                delay += 0.3;
            });

            html += "</div>";

            document.getElementById("dijkstraOutput").innerHTML = html;
        });
}

/* ===========================
   Alert
=========================== */
function showAlert(msg) {
    const box = document.getElementById("alertBox");
    box.textContent = msg;
    box.style.display = "block";
    setTimeout(() => box.style.display = "none", 3000);
}

function toggleTheme() {
    document.body.classList.toggle("light");
}