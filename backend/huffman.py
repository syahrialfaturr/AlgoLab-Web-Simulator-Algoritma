import heapq
from collections import Counter

# =============================
# Node untuk Huffman Tree
# =============================
class HuffmanNode:
    def __init__(self, char=None, freq=0):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    def __lt__(self, other):
        return self.freq < other.freq

# =============================
# Bangun Huffman Tree
# =============================
def build_huffman_tree(text):
    frequency = Counter(text)

    heap = []
    for char, freq in frequency.items():
        heapq.heappush(heap, HuffmanNode(char, freq))

    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)

        merged = HuffmanNode(None, left.freq + right.freq)
        merged.left = left
        merged.right = right

        heapq.heappush(heap, merged)

    return heap[0], frequency

# =============================
# Generate kode biner
# =============================
def generate_codes(node, prefix="", code_map={}):
    if node is None:
        return

    if node.char is not None:
        code_map[node.char] = prefix

    generate_codes(node.left, prefix + "0", code_map)
    generate_codes(node.right, prefix + "1", code_map)

    return code_map

# =============================
# Encode teks
# =============================
def huffman_encode(text):
    if not text:
        return {"error": "Input kosong"}

    root, frequency = build_huffman_tree(text)
    codes = generate_codes(root)

    encoded = ""
    for char in text:
        encoded += codes[char]

    return {
        "frequency": dict(frequency),
        "codes": codes,
        "encoded": encoded
    }
