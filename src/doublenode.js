'use strict'

export default class doublenode {

  class doublenode {
    constructor(data, next, prev) {
      this.data = data
      this.next = next
      this.prev = prev
    }

    getData() {
      return this.data
    }

    setNext(node) {
      this.next = node
      return this
    }
    setPrev(node) {
      this.prev = node
      return this
    }

    getNext() {
      return this.next
    }

    getPrev() {
      return this.prev
    }
  }

  const nodeA = new Node({data: "apple"})
  const nodeB = new Node({data: "banana"})
  const nodeC = new Node({data: "grape"})

  }

  nodeA.getData() // returns the data ("apple") of the node
  nodeA.setNext(nodeB) // changes the reference to the next node and returns the original node
  nodeB.setNext(nodeC) // changes the reference to the next node and returns the original node
  nodeB.setPrev(nodeA) // changes the reference to the next node and returns the original node
  nodeC.setPrev(nodeB) // changes the reference to the next node and returns the original node
  nodeA.getNext() // returns the next node, or null if no next node
  nodeA.getPrev() // returns the next node, or null if no next node
  nodeB.getNext() // returns the next node, or null if no next node
  nodeB.getPrev() // returns the next node, or null if no next node
  nodeC.getNext() // returns the next node, or null if no next node
  nodeC.getPrev() // returns the next node, or null if no next node
