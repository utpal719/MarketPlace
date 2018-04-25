//Contract to be tested
var MarketPlace = artifacts.require("./MarketPlace.sol");

//Test suite
contract('MarketPlace',function(accounts){

  var marketPlaceInstance;
  var seller = accounts[1];
  var buyer = accounts[2];
  var articleName1 = "article 1";
  var articleDescription1 = "Description for article 1";
  var articlePrice1 = 10;
  var articleName2 = "article 2";
  var articleDescription2 = "Description for article 2";
  var articlePrice2 = 20;
  var watcher;
  var sellerBalanceBeforeBuy, sellerBalanceAfterBuy;
  var buyerBalanceBeforeBuy, buyerBalanceAfterBuy;

  // Test case: check initial values
  it("should be initialized with empty values", function() {
    return MarketPlace.deployed().then(function(instance) {
      marketPlaceInstance = instance;
      return marketPlaceInstance.getNumberOfArticles();
    }).then(function(data) {
      assert.equal(data, 0x0, "number of articles must be zero");
      return marketPlaceInstance.getArticlesForSale();
    }).then(function(data){
      assert.equal(data.length, 0, "articles for sale should be empty");
    });
  });

});
