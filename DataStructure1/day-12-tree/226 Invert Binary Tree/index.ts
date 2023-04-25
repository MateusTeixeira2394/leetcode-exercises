function invertTree(root: TreeNode | null): TreeNode | null {

    if(!root){
        return null;
    };

    let aux: TreeNode | null = root.left;

    root.left = root.right;

    root.right = aux;

    const {left, right} = root;

    if(left){
        invertTree(left);
    };

    if(right){
        invertTree(right);
    };

    return root;

};