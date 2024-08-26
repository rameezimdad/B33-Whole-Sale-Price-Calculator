function doGet() {

  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Wholesale Price Calculator')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getItems() {
  var sheet = SpreadsheetApp.openById('Add Your ID').getSheetByName('PriceCalculatorData');
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();
  return data;
}

function calculateTotal(items) {
  var sheet = SpreadsheetApp.openById('Add Your ID').getSheetByName('PriceCalculatorData');
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();
  var itemMap = {};
  
  data.forEach(function(row) {
    itemMap[row[0]] = row[1];
  });

  var total = 0;
  items.forEach(function(item) {
    var price = itemMap[item.name] || 0;
    total += price * item.quantity;
  });
  
  return total;
}
