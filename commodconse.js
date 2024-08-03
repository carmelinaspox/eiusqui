function treeAncestors(name, node) {
  // Recursive function to find ancestors
  function findAncestors(currentNode, targetNode, ancestors) {
    // Base case: if the current node is null, return false
    if (currentNode === null) {
      return false;
    }
    
    // Base case: if the current node is the target node, return true
    if (currentNode === targetNode) {
      return true;
    }
    
    // Recursive case: check if the target node is found in the left or right subtree
    if (findAncestors(currentNode.left, targetNode, ancestors) || findAncestors(currentNode.right, targetNode, ancestors)) {
      // If the target node is found, add the current node to the ancestors list
      ancestors.push(currentNode);
      return true;
    }
    
    // If the target node is not found in the current subtree, return false
    return false;
  }
  
  // Call the recursive function to find the ancestors
  let ancestors = [];
  findAncestors(root, node, ancestors);
  
  // Return the ancestors array
  return ancestors;
}
