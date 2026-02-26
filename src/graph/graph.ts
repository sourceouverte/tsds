import { Errors } from '../errors.enum';
import Vertex from './vertex';

export default class Graph<T> {
  vertices: Map<string, Vertex<T>> = new Map();

  /**
   * To add node in the graph
   * @param vertex
   */
  addVertex(vertex: Vertex<T>) {
    this.vertices.set(vertex.id, vertex);
  }

  /**
   * To remove a node from graph
   * @param source
   * @returns
   */
  removeVertex(vertex: Vertex<T>) {
    // Remove the reference of vertex from all the edges where it was a participant
    for (const [key, value] of Array.from(vertex.edges)) {
      value.edges.delete(vertex.id);
    }

    this.vertices.delete(vertex.id);
  }

  /**
   * To Add edge in the graph
   * @param source starting of the edge
   * @param destination ending of the edge
   * @returns
   */
  addEdge(source: Vertex<T>, destination: Vertex<T>) {
    if (source.edges.has(destination.id) && destination.edges.has(source.id)) {
      throw new Error(Errors.EDGE_EXITS);
    }

    source.edges.set(destination.id, destination);
    destination.edges.set(source.id, source);
  }

  /**
   * To get the associated vertices identifying the edges of a vertex
   * @param vertex vertex for which the edges have been requested.
   * @returns array of vertices
   */
  getEdges(vertex: Vertex<T>) {
    return vertex.edges;
  }

  /**
   * To remove the edge comprised of two vertices
   * @param source starting of the edge
   * @param destination ending of the edge
   */
  removeEdge(source: Vertex<T>, destination: Vertex<T>) {
    if (source.edges.size === 0 || destination.edges.size === 0) {
      throw new Error(Errors.EDGES_EMPTY);
    }

    source.edges.delete(destination.id);
    destination.edges.delete(source.id);
  }
}
