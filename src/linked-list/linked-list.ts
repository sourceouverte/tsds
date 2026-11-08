import { Errors } from '../errors.enum';
import LinkedListNode from './linked-list-node';
import { NodePosition } from './node-position';

export default class LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * To add a new node to the list at the tail.
     * @param value
     */
    addNode(value: T): void {
        const node = new LinkedListNode(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * Get the node having a certain value
     * @param value
     * @returns LinkedListNode
     */
    getNode(value: T): LinkedListNode<T> | undefined {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return undefined;
    }

    /**
     * Removes a node from the list
     * @param node
     * @returns
     */
    removeNode(node: LinkedListNode<T> | null | undefined): void {
        if (this.length === 0) {
            throw new Error(Errors.LINKED_LIST_EMPTY);
        }

        if (!node) {
            throw new Error(Errors.INVALID_NODE_POSITION);
        }

        if (this.head === node && this.tail === node) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        if (this.head === node) {
            this.head = node.next;
            this.head!.prev = null;
        } else if (this.tail === node) {
            this.tail = node.prev;
            this.tail!.next = null;
        } else {
            node.prev!.next = node.next;
            node.next!.prev = node.prev;
        }

        node.prev = null;
        node.next = null;
        this.length--;
    }

    /**
     * To insert a node at a given position in the linked list.
     * @param value Value of the node to be inserted
     * @param node The node before or after which the new node is inserted
     * @param position To indicate the position of the newly added node - BEFORE, AFTER
     */
    insertNode(value: T, node: LinkedListNode<T> | null | undefined, position: NodePosition | null | undefined) {
        if (this.length === 0) {
            throw new Error(Errors.LINKED_LIST_EMPTY);
        }

        if (!node || position === undefined || position === null) {
            throw new Error(Errors.INVALID_NODE_POSITION);
        }

        const nodeToBeInserted = new LinkedListNode(value);

        if (position === NodePosition.BEFORE) {
            if (this.head === node) {
                nodeToBeInserted.next = node;
                node.prev = nodeToBeInserted;
                this.head = nodeToBeInserted;
                this.length++;
                return nodeToBeInserted;
            }

            nodeToBeInserted.prev = node.prev;
            nodeToBeInserted.next = node;
            node.prev!.next = nodeToBeInserted;
            node.prev = nodeToBeInserted;
            this.length++;
            return nodeToBeInserted;
        }

        if (position === NodePosition.AFTER) {
            if (this.tail === node) {
                nodeToBeInserted.prev = node;
                node.next = nodeToBeInserted;
                this.tail = nodeToBeInserted;
                this.length++;
                return nodeToBeInserted;
            }

            nodeToBeInserted.next = node.next;
            nodeToBeInserted.prev = node;
            node.next!.prev = nodeToBeInserted;
            node.next = nodeToBeInserted;
            this.length++;
            return nodeToBeInserted;
        }

        throw new Error(Errors.INVALID_NODE_POSITION);
    }
}
