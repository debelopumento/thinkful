
var state = {
  items: []
};

items = ["apple", "orange", "coffee"];


function returnItemHtml(item){
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

function resetListHtml(){
  return ('<ul class="shopping-list js-shopping-list"></ul>');
}

function pushItem(state, items, newInput){
  var itemID=newInput;
  items.push(newInput);
  //state.items.push(newInput);
  //console.log("state:" + state);
  return state.items;
}

function resetList(){
  //console.log('reset list');
  $('.js-items-div').html("<ul class='shopping-list js-shopping-list'></ul>");
}

function renderItemList(items, newInput){
  console.log("item list is: ");
  //reset list
  resetList();
  //
  for (var itemID in items){
    console.log(items[itemID]);
    $('.js-shopping-list').append(returnItemHtml(items[itemID]));
  }  
}

$('.js-shopping-item-delete').click(function(event){
    //remove this li
    
});

$(function userInput(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    
    var newInput = $(this).find('#user-newItemInput').val();
    console.log("input new item is: " + newInput);
    pushItem(state, items, newInput);
    renderItemList(items, newInput);
    });
})