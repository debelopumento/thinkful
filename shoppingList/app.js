
var state = {
  items: []
};

items = ["apple", "orange", "coffee"];


function itemHtml(item){
  
  return ('<li>' +
  '<span class="shopping-item">' + item +
  '</span>' + 
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>');
}



function pushItem(state, items, newInput){
  var itemID=newInput;
  items.push(newInput);
  console.log("tothispoint:" + items);
  //state.items.push(newInput);
  //console.log("state:" + state);
  return state.items;
}



function renderItemList(items, newInput){
  console.log("item list is: ");
  
  for (var itemID in items){
    console.log(items[itemID]);
    $('.js-shopping-list').html(
      itemHtml(items[itemID])
      );
  }  
}



$(function userInput(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    
    var newInput = $(this).find('#user-newItemInput').val();
    console.log("input new item is: " + newInput);
    pushItem(state, items, newInput);
    renderItemList(items, newInput);
    });
})