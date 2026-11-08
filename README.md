
<div><img src="https://sourceouverte.github.io/assets/tsdslogo.png" /></div>

# Data Structures in TypeScript

A lightweight TypeScript library providing common data structures for learning, experimentation, and application development.

## Included structures
- [Graph](https://sourceouverte.github.io/classes/Graph.html)
- [LinkedList](https://sourceouverte.github.io/classes/LinkedList.html)
- [Queue](https://sourceouverte.github.io/classes/Queue.html)
- [Stack](https://sourceouverte.github.io/classes/Stack.html)
- [Tree](https://sourceouverte.github.io/classes/Tree.html)

## Installation

```bash
npm install typescriptds
```

## Usage

```ts
import { Stack, Queue, LinkedList, Graph, Tree } from 'typescriptds';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

const queue = new Queue<string>();
queue.enqueue('first');
console.log(queue.peek()); // 'first'

const list = new LinkedList<number>();
list.addNode(10);
list.addNode(20);
```

## Development

```bash
npm install
npm test
npm run build
npm run docs
```

Commands:
- `npm run test` - run the Jest suite
- `npm run test-watch` - run tests in watch mode
- `npm run test-coverage` - generate coverage output
- `npm run build` - compile the TypeScript library
- `npm run docs` - generate project documentation

## Library documentation
- [Documentation](https://sourceouverte.github.io/index.html)

## Contributors

| <img src="https://sourceouverte.github.io/assets/contributor_pics/madhur_avatar.png" width="95"/> <br> <a href="https://github.com/madhurahuja">Madhur Ahuja</a> | <img src="https://sourceouverte.github.io/assets/contributor_pics/rajdeep_avatar.png" width="95"/> <br> <a href="https://github.com/rajdeepratan">Rajdeep Ratan</a> |
| --- |:--- |



