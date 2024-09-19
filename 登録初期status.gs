function fillValueInFColumn() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 0; i < data.length; i++) {
    var cellValueB = data[i][1]; // B列の値を取得
    var cellValueF = data[i][5]; // f列の値を取得
    
    if (cellValueB !== "" && cellValueF === "") {
      sheet.getRange(i + 1, 6).setValue("💤Sleeping💤"); // F列に4000を入力
    }
  }
}