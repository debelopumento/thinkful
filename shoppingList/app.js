var state = {
  items: [
    {itemName: "apples",
     itemChecked: false
    }, 
    {itemName: "oranges", 
     itemChecked: false
    },
    {itemName: "milk",
     itemChecked: true 
    },
    {itemName: "bread",
     itemChecked: false
    }
  ]
};



function returnItemHtml(localState, currentItemID){
  var itemArrey = localState.items;
  var itemHtml = '<li>' +
  '<span class="shopping-item js-shopping-item">' + 
  itemArrey[currentItemID].itemName +
  '</span>' + 
    '<div class="shopping-item-controls">';
  if (itemArrey[currentItemID].itemChecked === true) {
    itemHtml += '<button class="js-shopping-item-toggle shopping-item__checked js-check">';
  }
    else {
      itemHtml += '<button class="js-shopping-item-toggle js-check">';
    }
        
   itemHtml += '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete js-delete-button">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>';
  return itemHtml;
}

function resetListHtml(){
  return ('<ul class="shopping-list js-shopping-list"></ul>');
}

function pushItem(localState, newInput){
  var newItem = {
    itemName: newInput,
    itemChecked: false
  };
  console.log("itemNameBBB: " + newItem.itemName)
  localState.items.push(newItem);
  renderItemList(localState);
}

function resetList(){
  $('.js-items-div').html("<ul class='shopping-list js-shopping-list'></ul>");
}

function renderItemList(localState){
  resetList();
  var itemArrey=localState.items;
  for (var itemID in itemArrey){
    $('.js-shopping-list').append(returnItemHtml(localState, itemID));
  }
  //evenet listeners
  $('.js-delete-button').click(function(event){
    var deletedItemName = $(this).closest('li').find('.shopping-item').text();
    deleteOnClick(state, deletedItemName);
  });
  $('.js-check').click(function(event){
    var checkedItemName = $(this).closest('li').find('.shopping-item').text();
    checkOnClick(state, checkedItemName);
  });  
}


function deleteOnClick(localState, localItemName){
    var itemArrey = localState.items;
    for (var i=0; i <= itemArrey.length; i++) {
      if (itemArrey[i].itemName === localItemName) {
        itemArrey.splice(i, 1);
      }}
}

function checkOnClick(localState, checkedItemName){
    console.log("90");
    console.log("checked item name: " + checkedItemName);
    var itemArrey = localState.items;
    for (var i=0; i <= itemArrey.length; i++) {
      if (itemArrey.itemName === checkedItemName) {
        localState.items.itemChecked = !localState.items.itemChecked;
      }
    }
}


$(function userInput(){
  renderItemList(state);
  $('.js-form').submit(function(event){
    event.preventDefault();
    var newInput = $(this).find('#user-newItemInput').val();
    console.log("1");
    pushItem(state, newInput);
    });
  $('.js-delete-button').click(function(event){
    var deletedItemName = $(this).closest('li').find('.shopping-item').text();
    deleteOnClick(state, deletedItemName);
    renderItemList(state);
  });
  $('.js-check').click(function(event){
    var checkedItemName = $(this).closest('li').find('.shopping-item').text();
    checkOnClick(state, checkedItemName);
    renderItemList(state);
  });
});