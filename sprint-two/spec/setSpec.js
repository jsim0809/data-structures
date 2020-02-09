describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // Our tests

  it('should not allow duplicate values', function() {
    set.add('Jeremy');
    set.add('Jeremy');
    set.remove('Jeremy');
    expect(set.contains('Jeremy')).to.equal(false);
  });

  it('should allow strings as well as numbers (and differentiate between them', function() {
    set.add(1);
    set.add('1');
    expect(set.contains('1')).to.equal(true);
    set.remove('1');
    expect(set.contains('1')).to.equal(false);
    expect(set.contains(1)).to.equal(true);
  });

  it('should allow objects', function() {
    var arr = [];
    set.add(arr);
    set.add([]);
    expect(set.contains(arr)).to.equal(true);
    expect(set.contains([])).to.equal(false);
  });
});
