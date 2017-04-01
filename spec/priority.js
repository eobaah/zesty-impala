import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('Adds an element with priority number to the back of an empty queue.', () => {
      const myPQueue = new PriorityQueue()
      myPQueue.enqueue("foo", 100)
      expect(myPQueue.head.priority).to.equal(100) && expect(myPQueue.head.priority).to.equal(100)
    })
  })

  context('enqueue()', () => {
    it('Adds an element with priority number to the back of the queue.', () => {
      const myPQueue = new PriorityQueue()
      myPQueue.enqueue("foo", 100)
      myPQueue.enqueue("foo", 75)
      expect(myPQueue.head.priority).to.equal(100) &&
      expect(myPQueue.tail.priority).to.equal(75) &&
      expect(myPQueue.size).to.equal(2)

    })
  })

  context('enqueue()', () => {
    it('Adds an element with priority number to the back of a queue with more than one node in the queue.', () => {
      const myPQueue = new PriorityQueue()
      myPQueue.enqueue("foo", 100)
      myPQueue.enqueue("roo", 75)
      myPQueue.enqueue("boo", 60)
      myPQueue.enqueue("goo", 50)
      expect(myPQueue.head.priority).to.equal(100) &&
      expect(myPQueue.tail.priority).to.equal(50) &&
      expect(myPQueue.tail.next.next.priority).to.equal(75) &&
      expect(myPQueue.size).to.equal(4)

    })
  })

  context('enqueue()', () => {
    it('Adds an element with priority number to the front of a queue.', () => {
      const myPQueue = new PriorityQueue()
      myPQueue.enqueue("foo", 100)
      myPQueue.enqueue("roo", 75)
      myPQueue.enqueue("bam", 125)
      expect(myPQueue.head.priority).to.equal(125) &&
      expect(myPQueue.tail.priority).to.equal(75) &&
      expect(myPQueue.size).to.equal(3)
    })
  })

  context('front()', () => {
    it('Returns the front element in queue with the highest priority', () => {
      const front = new PriorityQueue()
      front.enqueue("foo", 500)
      expect(front.front().priority).to.equal(500) &&
      expect(front.size).to.equal(1)
    })
  })

  context('front()', () => {
    it('Returns the front element in a queue with two nodes and the highest priority', () => {
      const front = new PriorityQueue()
      front.enqueue("foo", 500)
      front.enqueue("boo", 400)
      expect(front.front().priority).to.equal(500) &&
      expect(front.size).to.equal(2)
    })
  })

  context('front()', () => {
    it('Returns the front element in queue with the highest priority and ensures the tail is the same', () => {
      const front = new PriorityQueue()
      front.enqueue("foo", 500)
      front.enqueue("boo", 400)
      front.front()
      expect(front.tail.data).to.equal("boo") &&
      expect(front.size).to.equal(2)
    })
  })

  context('back()', () => {
    it('Returns the last element in queue with the lowest priority', () => {
      const back = new PriorityQueue()
      back.enqueue("foo", 500)
      back.enqueue("boo", 400)
      expect(back.back().priority).to.equal(400) &&
      expect(back.size).to.equal(2)
    })
  })

  context('back()', () => {
    it('Check the last element in a queue with multiple items', () => {
      const back = new PriorityQueue()
      back.enqueue("foo", 500)
      back.enqueue("boo", 400)
      back.enqueue("BMW", 300)
      expect(back.back().data).to.equal("BMW") &&
      expect(back.head.data).to.equal("foo") &&
      expect(back.tail.data).to.equal("BMW") &&
      expect(back.size).to.equal(3)
    })
  })

  context('dequeue()', () => {
    it('Returns and removed an element with priority number from the front of the queue.', () => {
      const myDequeue = new PriorityQueue()
      myDequeue.enqueue("foo", 100)

      expect(myDequeue.dequeue().data).to.equal("foo") &&
      expect(myDequeue.size).to.equal(0)
    })
  })

  context('dequeue()', () => {
    it('Returns and removed an element with priority number from the front of the queue.', () => {
      const myDequeue = new PriorityQueue()
      myDequeue.enqueue("foo", 100)
      myDequeue.enqueue("boo", 200)
      myDequeue.enqueue("BMW", 300)
      expect(myDequeue.dequeue().data).to.equal("BMW") &&
      expect(myDequeue.tail.next.data).to.equal("boo") &&
      expect(myDequeue.size).to.equal(2)
    })
  })

  context('isEmpty()', () => {
    it('Returns false for a queue that is not empty.', () => {
      const myDequeue = new PriorityQueue()
      myDequeue.enqueue("foo", 100)
      expect(myDequeue.isEmpty()).to.equal(false) &&
      expect(myDequeue.size).to.equal(1)
    })
  })

  context('isEmpty()', () => {
    it('Returns true for queue that is empty .', () => {
      const myDequeue = new PriorityQueue()
      expect(myDequeue.isEmpty()).to.equal(true) &&
      expect(myDequeue.size).to.equal(0)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue ', () => {
      const length = new PriorityQueue()
      length.enqueue("foo")
      length.enqueue("roo")
      expect(length.length()).to.equal(2);
  })
})
  context('length()', () => {
    it('returns the zero for an empty queue ', () => {
      const length = new PriorityQueue()
      expect(length.length()).to.equal(0);
  })
})
})
