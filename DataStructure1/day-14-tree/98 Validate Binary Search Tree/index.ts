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

function isValidBST(root: TreeNode | null): boolean {

    function valid(root: TreeNode | null, left: number, right: number) : boolean {

        if(!root){
            return true;
        } else if (!(root.val > left && root.val < right)){
            return false;
        } else {
            return valid(root.left, left, root.val) && valid(root.right, root.val, right);
        }

    }

    return valid(root, -Infinity, Infinity);

};