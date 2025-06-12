import { Errors } from '../errors.enum';

export default class Queue<T> {
    store: T[] = [];

    /**
     * To add item to the queue
     * @param item
     */
    enqueue(item: T) {
        this.store.push(item);
    }

    /**
     * To get the head element of the queue and remove the head
     * @returns T
     */
    dequeue(): T {
        if (this.isEmpty) {
            throw new Error(Errors.QUEUE_EMPTY);
        }
        return this.store.shift() as T;
    }

    /**
     * Get head element of the queue
     * @returns T
     */
    peek(): T {
        if (this.isEmpty) {
            throw new Error(Errors.QUEUE_EMPTY);
        }
        return this.store[0];
    }

    /**
     * Get if the queue is empty or not
     * @returns bool
     */
    get isEmpty() {
        return this.size === 0;
    }

    /**
     * Get the size of queue
     * @returns length
     */
    get size() {
        return this.store.length;
    }
}
