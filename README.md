
<div><img src="https://sourceouverte.github.io/assets/tsdslogo.png" /></div>

![CI](https://github.com/sourceouverte/tsds/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)
![Docs](https://img.shields.io/badge/Docs-Generated-orange.svg)

# TSDS

TypeScript Data Structures

TSDS is a lightweight TypeScript library for common data structures with a clean, readable API and a strong focus on learning, prototyping, and practical application development.

Built for developers who want fast access to essential structures without unnecessary framework overhead, TSDS emphasizes clarity, reliability, and TypeScript-first ergonomics.

## Why TSDS?

- Simple APIs for common structure operations
- Strong TypeScript typing for safer development
- Minimal dependencies and easy integration
- Ideal for learning, interview prep, and lightweight app logic
- Well-structured codebase with test coverage and generated docs

## Feature highlights

| Structure | Purpose | Typical use |
| --- | --- | --- |
| Stack | LIFO access | undo flows, parsing, recursion helpers |
| Queue | FIFO access | scheduling, buffering, task processing |
| Linked List | ordered node traversal | list algorithms, insertion/removal logic |
| Tree | hierarchical relationship modeling | hierarchies, traversal, AST-like structures |
| Graph | networked relationships | dependency maps, social graphs, route planning |

## Documentation

- [Project docs](https://sourceouverte.github.io/index.html)
- [Graph reference](https://sourceouverte.github.io/classes/Graph.html)
- [LinkedList reference](https://sourceouverte.github.io/classes/LinkedList.html)
- [Queue reference](https://sourceouverte.github.io/classes/Queue.html)
- [Stack reference](https://sourceouverte.github.io/classes/Stack.html)
- [Tree reference](https://sourceouverte.github.io/classes/Tree.html)

## Installation

```bash
npm install @sourceouverte/tsds
```

Or with Yarn:

```bash
yarn add @sourceouverte/tsds
```

## Quick start

```ts
import { Stack, Queue, LinkedList, Graph, Tree } from '@sourceouverte/tsds';

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20

const queue = new Queue<string>();
queue.enqueue('first');
queue.enqueue('second');
console.log(queue.dequeue()); // 'first'

const list = new LinkedList<number>();
list.addNode(1);
list.addNode(2);
console.log(list.getNode(2)?.value); // 2
```

## Structure overview

### Stack

A last-in, first-out container where the most recently added value is processed first.

```ts
import { Stack } from '@sourceouverte/tsds';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
```

### Queue

A first-in, first-out container where items are processed in insertion order.

```ts
import { Queue } from '@sourceouverte/tsds';

const queue = new Queue<string>();
queue.enqueue('A');
queue.enqueue('B');
console.log(queue.dequeue()); // 'A'
```

### Linked List

A linear collection of linked nodes that supports iteration and insertion at known positions.

```ts
import { LinkedList } from '@sourceouverte/tsds';

const list = new LinkedList<number>();
list.addNode(10);
list.addNode(20);
list.addNode(30);

console.log(list.getNode(20)?.value); // 20
```

### Tree

A hierarchical structure where nodes can branch into child nodes.

```ts
import { Tree } from '@sourceouverte/tsds';
import Node from '@sourceouverte/tsds/dist/tree/node';

const root = new Node<number>(1, []);
const left = new Node<number>(2, []);
const right = new Node<number>(3, []);
root.branchNodes = [left, right];

const tree = new Tree<number>();
tree.addNode(root);
console.log(tree.getNode(root.id)?.value); // 1
```

### Graph

A structure of vertices connected by edges, suitable for representing networks and relationships.

```ts
import { Graph } from '@sourceouverte/tsds';
import Vertex from '@sourceouverte/tsds/dist/graph/vertex';

const graph = new Graph<number>();
const a = new Vertex<number>(1);
const b = new Vertex<number>(2);

graph.addVertex(a);
graph.addVertex(b);
graph.addEdge(a, b);

console.log(graph.getEdges(a).has(b.id)); // true
```

## Development

The project uses TypeScript and Jest for validation and compile checks.

```bash
npm install
npm test
npm run build
npm run docs
```

Useful commands:

- `npm test` - run the test suite
- `npm run test-watch` - run tests in watch mode
- `npm run test-coverage` - generate coverage output
- `npm run build` - compile the library
- `npm run docs` - generate the project documentation

## Architecture principles

TSDS is intentionally simple:

- each structure exposes a compact, discoverable surface area
- behavior is explicit and idiomatic for JavaScript/TypeScript developers
- the library favors clarity over framework-specific abstractions
- implementations are easy to read, extend, and teach

This makes TSDS a good fit for education, experimentation, and lightweight domain logic where a full library framework would be unnecessary.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch
3. Add or update tests where needed
4. Run local validation
5. Open a pull request with a clear summary

## License

This project is licensed under the MIT License.

## Contributors

| <img src="https://sourceouverte.github.io/assets/contributor_pics/madhur_avatar.png" width="95"/> <br> <a href="https://github.com/madhurahuja">Madhur Ahuja</a> | <img src="https://sourceouverte.github.io/assets/contributor_pics/rajdeep_avatar.png" width="95"/> <br> <a href="https://github.com/rajdeepratan">Rajdeep Ratan</a> |
| --- |:--- |
