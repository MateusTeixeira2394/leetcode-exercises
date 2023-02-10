function preorderTraversal(root: TreeNode | null): number[] {

    if (!root) {
        return []
    };

    let res: number[] = [];
    let stack: TreeNode[] = [root];

    while (stack.length) {

        const current: TreeNode = stack.pop();

        const { val, left, right } = current;

        if (val) res.push(val);

        if (right) stack.push(right);

        if (left) stack.push(left);

    };

    return res;


};