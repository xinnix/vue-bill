import app from './components/app';

var Wilddog = require("wilddog");
var ref = new Wilddog("https://vue-bill.wilddogio.com/");
var totalRef = ref.child('total');
var itemsRef = ref.child('items');
Vue.config.debug = true;

var vm = new Vue(app);
var getItemArray = function(_itemlist) {
    var itemArray = [];
    for (var key in _itemlist) {
        if (_itemlist.hasOwnProperty(key)) {
            var item = _itemlist[key];
            itemArray.push(item);
        }
    }
    return itemArray.reverse();
};
itemsRef.on("value", function(snapshot) {
  vm.items=getItemArray(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
totalRef.on("value", function(snapshot) {
  if(snapshot.val())
    vm.total=snapshot.val().total;
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
