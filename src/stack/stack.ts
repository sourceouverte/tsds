import { Errors } from '../errors.enum';
export default class Stack<T> {
    store: T[] = [];

    /**
     * To add item to the stack
     * @param item
     */
    push(item: T) {
        this.store.push(item);
    }

    /**
     * To get the head element of the stack and remove the head
     * @returns T
     */
    pop(): T {
        if (this.isEmpty) {
            throw new Error(Errors.STACK_EMPTY);
        }
        const topItem = this.peek();
        this.store.splice(this.size - 1, 1);
        return topItem;
    }

    /**
     * Get head element of the stack
     * @returns T
     */
    peek(): T {
        if (this.isEmpty) {
            throw new Error(Errors.STACK_EMPTY);
        }
        return this.store[this.size - 1];
    }

    /**
     * Get if the stack is empty or not
     * @returns bool
     */
    get isEmpty() {
        return this.size === 0;
    }

    /**
     * Get the size of stack
     * @returns length
     */
    get size() {
        return this.store.length;
    }
}
