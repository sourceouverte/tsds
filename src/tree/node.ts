import { v4 as uuidv4 } from 'uuid';

export default class Node<T> {
    id: string;
    value: T;
    branchNodes: Node<T>[];
    //right: Node<T>[];

    constructor(value: T, branchNodes: Node<T>[]) {
        this.id = uuidv4();
        this.value = value;
        this.branchNodes = branchNodes;
    }
}
