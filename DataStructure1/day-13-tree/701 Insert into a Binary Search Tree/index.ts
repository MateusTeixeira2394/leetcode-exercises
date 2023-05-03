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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {

    if(!root){
        return new TreeNode(val);
    };

    let current: TreeNode = root;

    while(current){

        if(current.val < val){

            if(current.right){
                current = current.right;
            }else {
                current.right = new TreeNode(val);
                return root;
            };

        } else if(current.val > val){

            if(current.left){
                current = current.left;
            } else {
                current.left = new TreeNode(val);
                return root;
            };

        };

    };

    return root;

};