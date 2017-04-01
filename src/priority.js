'use strict'

class PriorityNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

export default class PriorityQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  enqueue(data, priority) {
    let newNode = new PriorityNode(data, priority)
    this.size++
    let cursor = this.tail;

    // if queue is empty
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    // can we add node to the end?
    if (this.tail.priority > newNode.priority) {
      newNode.next = this.tail
      this.tail = newNode
      return
    }
    // can we add to the front?
    if (this.head.priority < newNode.priority){
      this.head.next = newNode;
      this.head = newNode;
      return
    }
    // can we add in the middle?

    while (cursor){
      if (cursor.priority < newNode.priority && cursor.next.priority < newNode.priority) {
        cursor = cursor.next
      } else {
        newNode.next = cursor.next
        cursor.next = newNode
        return
      }
      }
  }

  front() {
    if(this.size === 0) {
      return null
    } else {
      return this.head
    }
  }

  back() {
    if(this.size === 0) {
      return null
    } else {
      return this.tail
    }
  }
  dequeue() {
    let removedHead = this.head
    let cursor = this.tail;

  if (this.size === 0) {
    return null
  }

  if (this.size === 1 ) {
    this.head = null
    this.tail = null
    this.size --
    return removedHead
  }

  if (this.size === 2 ) {
    this.head = this.tail
    this.tail.next = null
    this.size --
    return removedHead
  }
  while(cursor.next.next) {
    cursor = cursor.next
  }

  cursor.next = null
  this.head = cursor
  this.size--
  return removedHead
  }

  isEmpty() {
    if(this.size === 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.size 
  }

}

const myQueue = new PriorityQueue()

myQueue.enqueue("Tesla", 170)
myQueue.enqueue("foo", 100)
myQueue.enqueue("boo", 75)
myQueue.enqueue("bmw", 70)
myQueue.enqueue("Ford", 165)
