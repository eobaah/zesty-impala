'use strict'

class PriorityNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

export default class PriorityQueue {

  constructor(data) {
    this.head = null
    this.tail = null
    this.size = 0
  }


  enqueue( data, priority ) {
  let myNode = new PriorityNode(data, priority)
  // {data: "pizza", priority: 200, next: null}


  let traversingNode = this.tail

   if (this.size === 0) {
    this.tail = myNode
    this.head = myNode
    this.size++
  } else if (this.size === 1) {
    if (myNode.priority > this.head.priority) {
      var tempVariable = this.head
      this.head = myNode
      this.tail = tempVariable
      this.size++
  }  else {
    this.tail = myNode
    this.size++
    }
  } else {

    if (myNode.priority > this.head.priority) {
      var tempVariable1 = this.head
      var tempVariable2 = this.tail
      this.head = myNode
      this.tail = tempVariable1
      this.tail.next = tempVariable2
      this.size++
    } else {
   while(traversingNode.priority > myNode.priority) {
    if((traversingNode.next === null) || (traversingNode.next.priority > myNode.priority)) {
      myNode.next = traversingNode.next
      traversingNode.next = myNode
      this.size++
      break;
    } else {
      traversingNode = traversingNode.next
    }
   }
  }
  }
  }
  }



// const pQueue = new PriorityQueue()
//
//
// pQueue.enqueue("pizza", 200)
//
//
// pQueue.enqueue("salad", 201)

// pQueue.enqueue("chips", 199)
//
//
//
//
// pQueue.enqueue("Beer", 198)
//
//
//
//
//
// pQueue.enqueue("cheese", 300)
//
//
//
// console.log(pQueue)



  // dequeue() {
  //   if( this.size === 0 ) {
  //     return null
  //   } else {
  //     let removedNode = this.head
  //     this.head = this.next;
  //     this.size--;
  //     return removedNode
  //   }
  // }
  //
  // front() {
  //   if(this.head) {
  //     return this.head;
  //   } else {
  //     return null;
  //   }
  // }
  //
  // back(){
  //   if(this.tail) {
  //     return this.tail;
  //   } else {
  //     return null;
  //   }
  //
  // }
  //
  // isEmpty(){
  //   if () {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  //
  // length(){
  //   return this.size
  // }






//
// pQueue.enqueue('pizza', 100)
// bayarea.push('fred')
// bayarea.push('BMW')
