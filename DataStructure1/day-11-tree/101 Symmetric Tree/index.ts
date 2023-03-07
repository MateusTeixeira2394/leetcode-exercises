function isSymmetric(root: TreeNode | null): boolean {

    return compare(root.left, root.right);

};

function compare(left: TreeNode | null, right: TreeNode | null): boolean {

    if (!left && !right) return true;

    if (!left || !right) return false;

    if (left.val !== right.val) return false;

    return compare(left.right, right.left) && compare(left.left, right.right);
}