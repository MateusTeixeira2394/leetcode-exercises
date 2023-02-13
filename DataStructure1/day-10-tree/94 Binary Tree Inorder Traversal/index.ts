
//  Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {

    let res: number[] = [];

    function recursiveFnc(root: TreeNode | null): void {

        if (root?.left) {
            recursiveFnc(root.left);
        };

        if (root?.val !== undefined) {
            res.push(root.val);
        }

        if (root?.right) {
            recursiveFnc(root.right);
        };

    }

    recursiveFnc(root);

    return res;

};