class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function getHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

function countNodes(root) {
    if (!root) {
        return 0;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        // Left subtree is a full binary tree
        return (1 << leftHeight) - 1 + countNodes(root.right) + 1;
    } else {
        // Right subtree is a full binary tree
        return (1 << rightHeight) - 1 + countNodes(root.left) + 1;
    }
}
