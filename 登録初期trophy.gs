function fillValueInGColumn() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 0; i < data.length; i++) {
    var cellValueB = data[i][1]; // B列の値を取得
    var cellValueG = data[i][6]; // G列の値を取得
    
    if (cellValueB !== "" && cellValueG === "") {
      sheet.getRange(i + 1, 7).setValue(4000); // G列に4000を入力
    }
  }
}
