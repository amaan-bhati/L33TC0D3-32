var isUnivalTree = function (root) {
    let uniqueValue = root.val;
    let stack = [root];
    let curr;
    while (stack.length > 0) {
        curr = stack.pop();
        if (curr.val !== uniqueValue)
            return false;

        if (curr.right !== null)
            stack.push(curr.right);

        if (curr.left !== null)
            stack.push(curr.left);
    }
    return true;
};
