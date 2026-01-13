# backend/bst.py

class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# ======================
# Insert ke BST
# ======================
def insert(root, value):
    if root is None:
        return BSTNode(value)

    if value < root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)

    return root


# ======================
# Traversals
# ======================
def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.value)
        inorder(root.right, result)

def preorder(root, result):
    if root:
        result.append(root.value)
        preorder(root.left, result)
        preorder(root.right, result)

def postorder(root, result):
    if root:
        postorder(root.left, result)
        postorder(root.right, result)
        result.append(root.value)


# ======================
# Main API Function
# ======================
def process_bst(values):
    if not values:
        return {"error": "Data kosong"}

    root = None
    for v in values:
        root = insert(root, v)

    in_res = []
    pre_res = []
    post_res = []

    inorder(root, in_res)
    preorder(root, pre_res)
    postorder(root, post_res)

    return {
        "inorder": in_res,
        "preorder": pre_res,
        "postorder": post_res
    }
