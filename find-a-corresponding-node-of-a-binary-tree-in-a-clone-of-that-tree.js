var getTargetCopy = function (original, cloned, target) {

    let queue = [original];
    let cloneQueue = [cloned];

    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            let cloneNode = cloneQueue.shift();

            if (node == target) {
                return cloneNode;
            }

            if (node.left) {
                queue.push(node.left);
                cloneQueue.push(cloneNode.left);
            }

            if (node.right) {
                queue.push(node.right);
                cloneQueue.push(cloneNode.right);
            }

        }
    }

};
