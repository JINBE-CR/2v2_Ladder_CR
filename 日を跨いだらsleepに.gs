function daysleep() {
  var spreadsheet = SpreadsheetApp.openById('1CuGN_p-JbbloqB60Co_srvgrNOQWvhqLGfrB1SFrAf4');
  var sheet = spreadsheet.getSheetByName('フォームの回答 1');

  // 別のスプレッドシートのデータを取得
  var data = sheet.getDataRange().getValues();

  var columnF = sheet.getRange("F:F").getValues();

  for (var i = 0; i < columnF.length; i++) {
    if (columnF[i][0] == "🔥Waiting🔥") {
      columnF[i][0] = "💤Sleeping💤";
    }
    if (columnF[i][0] == "⚡Matching⚡") {
      columnF[i][0] = "💤Sleeping💤";
    }
  }
  sheet.getRange(1, 6, columnF.length, columnF[0].length).setValues(columnF);
}
