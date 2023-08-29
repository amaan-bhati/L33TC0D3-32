class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var getMinimumDifference = function (root) {
    let prevValue = null; // To keep track of the previous node's value
    let minDiff = Infinity; // Initialize the minimum difference to a large value

    const inorderTraversal = (node) => {
        if (!node) return;

        inorderTraversal(node.left);

        if (prevValue !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prevValue));
        }
        prevValue = node.val;

        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    return minDiff;
};

// Example usage
const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
console.log(getMinimumDifference(root1)); // Output: 1

const root2 = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)));
console.log(getMinimumDifference(root2)); // Output: 1
                                                                                                                                                            

