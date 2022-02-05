import Node from './node';

export default class Tree<T> {
    nodes = new Map();

    /**
     * To add a node in the tree
     * @param node
     */
    addNode(node: Node<T>) {
        this.nodes.set(node.id, node);
    }

    /**
     * To remove a node from the tree
     * @param node
     */
    removeNode(node: Node<T>) {
        this.nodes.delete(node.id);
    }

    /**
     * To get a node from the tree
     * @param nodeId
     */
    getNode(nodeId: number) {
        return this.nodes.get(nodeId);
    }
}
