
var state = {
  items: []
};

items = ["apples", "oranges", "milk", "bread"];


function returnItemHtml(item){
  return ('<li>' +
  '<span class="shopping-item js-shopping-item">' + 
  item +
  '</span>' + 
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle js-check">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete js-delete-button">' +
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

function renderItemList(items){
  console.log("item list is: ");
  //reset list
  resetList();
  //
  for (var itemID in items){
    console.log(items[itemID]);
    $('.js-shopping-list').append(returnItemHtml(items[itemID]));
  }  
}


function deleteOnClick(){
  $('.js-delete-button').click(function(event){
    var itemID=$(this.closest('li')).find('.js-shopping-item').val();
    console.log("deleted item is ", itemID);
    this.closest('li').remove();
    delete items[itemID];
  });
}

function checkOnClick(){
  $('.js-check').click(function(event){
    console.log("check this item");
    this.closest('span').removeClass('shopping-item__checked');
    $(event.currentTarget).addClass('shopping-item__checked');
  });
}


$(function userInput(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    var newInput = $(this).find('#user-newItemInput').val();
    console.log("input new item is: " + newInput);
    pushItem(state, items, newInput);
    renderItemList(items);
    });
  deleteOnClick();
  checkOnClick();
})
