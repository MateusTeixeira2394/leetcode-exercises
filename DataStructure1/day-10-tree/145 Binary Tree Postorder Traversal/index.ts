/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postOrder(root: TreeNode | null, list: number[]): void {

    if (root?.left) {
        postOrder(root.left, list);
    };

    if (root?.right) {
        postOrder(root.right, list);
    };

    if (root?.val !== undefined) {
        list.push(root.val);
    }

}

function postorderTraversal(root: TreeNode | null): number[] {

    if (!root) return [];

    let res: number[] = [];

    postOrder(root, res);

    return res;

};
