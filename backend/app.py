from flask import Flask, request, jsonify
from huffman import huffman_encode
from bst import process_bst
from dijkstra import process_dijkstra
from flask import render_template

app = Flask(__name__,
            template_folder="../frontend/templates",
            static_folder="../frontend/static")

# ===========================
# Home
# ===========================
@app.route("/")
def ui():
    return render_template("index.html")

# ===========================
# Huffman API
# ===========================
@app.route("/huffman", methods=["POST"])
def huffman_api():
    data = request.json
    text = data.get("text", "")

    result = huffman_encode(text)
    return jsonify(result)

# ===========================
# BST API
# ===========================
@app.route("/bst", methods=["POST"])
def bst_api():
    data = request.json
    values = data.get("values", [])

    result = process_bst(values)
    return jsonify(result)

# ===========================
# Dijkstra API
# ===========================
@app.route("/dijkstra", methods=["POST"])
def dijkstra_api():
    data = request.json

    edges = data.get("edges", [])
    start = data.get("start")
    end = data.get("end")

    result = process_dijkstra(edges, start, end)
    return jsonify(result)

# ===========================
# Run locally
# ===========================
if __name__ == "__main__":
    app.run(debug=True)
