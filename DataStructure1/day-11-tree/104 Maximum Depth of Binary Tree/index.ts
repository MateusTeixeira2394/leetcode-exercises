function maxDepth(root: TreeNode | null): number {

    if (!root) return 0;

    let leftLevel: number = 1;

    let rightLevel: number = 1;

    const { left, right }: TreeNode | null = root;

    if (left) leftLevel = leftLevel + maxDepth(left);

    if (right) rightLevel = rightLevel + maxDepth(right);

    return leftLevel > rightLevel ? leftLevel : rightLevel;

};