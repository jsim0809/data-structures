describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList

  it('should allow the user to add and search for undefined as a value', function() {
    doublyLinkedList.addToTail(undefined);
    expect(doublyLinkedList.contains(undefined)).to.equal(true);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(undefined)).to.equal(false);
  });

  it('should properly return the previous node', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.tail.previous.value).to.equal(2);
  });

  it('should properly add to head', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.tail.previous.value).to.equal(2);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

});
