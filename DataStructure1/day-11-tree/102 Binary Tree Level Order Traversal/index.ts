function levelOrder(root: TreeNode | null): number[][] {

    if (!root) return [];

    let queue: Array<TreeNode> = [root];

    let resp: number[][] = [];

    let level: number = -1;

    while (queue.length) {

        level++;

        const length: number = queue.length;

        const currArr: number[] = [];

        for (let i = 0; i < length; i++) {

            const currNode: TreeNode | undefined = queue.shift();

            const { left, right }: TreeNode | null = currNode;

            if (currNode) currArr.push(currNode.val);

            if (left) queue.push(left);

            if (right) queue.push(right);

        };

        resp[level] = currArr;

    };

    return resp;

};