
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.unshift(node.val); // Insert at the beginning of the result array
        for (const child of node.children) {
            stack.push(child);
        }
    }

    return result;
};
