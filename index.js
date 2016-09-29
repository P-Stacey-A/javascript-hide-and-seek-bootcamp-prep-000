
function getFirstSelector(selector){  //accepts selector . return 1st match
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  const list = document.querySelectorAll(".ranked-list");


}
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(".ranked-list");

      for (var i = 0, l = rankedLists.length; i < l; i++){
        var listItem = rankedLists[i].children;

      for (var s = 0, li =listItem.length; s < li; s++) {
        listItem[s].innerHTML = parseInt(listItem[s].innerHTML) + n
      }
    }
}

function deepestChild(){
  var node =  document.getElementById("grand-node");
  var nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
   }

   return node
}
