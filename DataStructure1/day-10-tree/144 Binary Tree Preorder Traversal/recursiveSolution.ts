// Recursive way
function preorderTraversalRecursiveSolution(root: TreeNode | null): number[] {

    if (!root || root.val === null) {
        return []
    };

    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ];


};