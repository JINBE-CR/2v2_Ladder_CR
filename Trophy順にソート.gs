function copyAndSortData() {
  // 元のスプレッドシートとシート名を設定
  var sourceSpreadsheetId = '1CuGN_p-JbbloqB60Co_srvgrNOQWvhqLGfrB1SFrAf4';
  var sourceSheetName = 'フォームの回答 1';
  
  // ターゲットのスプレッドシートとシート名を設定
  var targetSpreadsheetId = '1YVWWtzYae7RAWcHYu4u95dz2SVCYw4XQiKJGvDfBTJI';
  var targetSheetName = 'シート1';
  
  // 元のスプレッドシートとターゲットのスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById(sourceSpreadsheetId);
  var targetSpreadsheet = SpreadsheetApp.openById(targetSpreadsheetId);
  
  // 元のシートとターゲットのシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName(sourceSheetName);
  var targetSheet = targetSpreadsheet.getSheetByName(targetSheetName);
  
  // データを取得
  var dataRange = sourceSheet.getDataRange();
  var data = dataRange.getValues();
  
  // ヘッダー行を除外
  var headerRow = data.shift();
  
  // ランクの列番号を取得
  var rankColumnIndex = headerRow.indexOf('🏆Trophy🏆');
  
  // ランクを元にデータを降順でソート
  data.sort(function(a, b) {
    return b[rankColumnIndex] - a[rankColumnIndex];
  });
  
  // ソート済みデータをターゲットのシートに書き込む
  targetSheet.clear();
  targetSheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]); // ヘッダー行を書き込む
  
  targetSheet.getRange(2, 1, data.length, data[0].length).setValues(data);
}
