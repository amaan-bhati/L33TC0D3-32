var searchBST = function (root, val) {
    function search(node, val) {
        if (node == null) return null;

        if (node.val == val) return node;

        return search(node.left, val) || search(node.right, val);

    }
    return search(root, val)
};
