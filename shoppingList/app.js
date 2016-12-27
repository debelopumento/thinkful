var state = {
  items: ["apples", "oranges", "milk", "bread"]
};



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

function pushItem(localState, newInput){
  var itemID=newInput;
  //items.push(newInput);
  localState.items.push(newInput);
  //console.log("state:" + state);
  return localState.items, localState;
}

function resetList(){
  $('.js-items-div').html("<ul class='shopping-list js-shopping-list'></ul>");
}

function renderItemList(localState){
  console.log("item list is: ");
  //reset list
  resetList();
  //
  var localItems=localState.items;
  for (var itemID in localItems){
    console.log(localItems[itemID]);
    $('.js-shopping-list').append(returnItemHtml(localItems[itemID]));
  }
  deleteOnClick(localState);
  checkOnClick(localState);
}


function deleteOnClick(localState){
  $('.js-delete-button').click(function(event){
    this.closest('li').remove();
    var itemName = $(this).closest('li').find('.shopping-item').text();
    for (var i=0; i <= localState.items.length; i++){
      if (localState.items[i] = itemName){
        localState.items.splice(i, 1);
      }
    renderItemList(localState);
    }
  });
}

function checkOnClick(localState){
  $('.js-check').click(function(event){
    console.log("check this item");
    $(this).closest('li').toggleClass('shopping-item__checked');
  });
}


$(function userInput(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    var newInput = $(this).find('#user-newItemInput').val();
    console.log("input new item is: " + newInput);
    pushItem(state, newInput);
    renderItemList(state);
    });
  //deleteOnClick(state);
  checkOnClick(state);
})