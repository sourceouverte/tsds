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
    const existing = this.vertices.get(vertex.id);
    if (!existing) {
      return;
    }

    for (const adjacentVertex of Array.from(existing.edges.values())) {
      adjacentVertex.edges.delete(existing.id);
    }

    existing.edges.clear();
    this.vertices.delete(existing.id);
  }

  /**
   * To Add edge in the graph
   * @param source starting of the edge
   * @param destination ending of the edge
   * @returns
   */
  addEdge(source: Vertex<T>, destination: Vertex<T>) {
    if (!this.vertices.has(source.id) || !this.vertices.has(destination.id)) {
      throw new Error(Errors.EDGE_EXITS);
    }

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
    if (!this.vertices.has(source.id) || !this.vertices.has(destination.id)) {
      throw new Error(Errors.EDGES_EMPTY);
    }

    if (!source.edges.has(destination.id) || !destination.edges.has(source.id)) {
      throw new Error(Errors.EDGES_EMPTY);
    }

    source.edges.delete(destination.id);
    destination.edges.delete(source.id);
  }
}
