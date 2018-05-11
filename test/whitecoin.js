var WhiteCoin = artifacts.require("./WhiteCoin");

contract('WhiteCoin', function(accounts) {
  it("should assert true", function(done) {
    var WhiteCoin = WhiteCoin.deployed();
    assert.isTrue(true);
    done();
  });
});
