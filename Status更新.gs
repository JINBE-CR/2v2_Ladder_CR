function onFormSubmitstatus(e) {

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // 最大10秒間ロックを取得しようと試みます（タイムアウトを設定できます）

  var formResponses = e.values; // フォームの回答を取得
  var player1 = formResponses[1]; // Player Tagの値
  var matchResult = formResponses[2]; // Match resultの値
  var status = formResponses[3]; // Statusの値
  var mail = formResponses[4]; // mail
  
  Logger.log("Player Tag: " + player1);
  Logger.log("Match result: " + matchResult);
  Logger.log("Status: " + status);
  Logger.log("mail: " + mail);




  // ステータスが🔥Waiting🔥の場合の処理
  if (status === "🔥Waiting🔥") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合
        data[i][5] = "🔥Waiting🔥"; // ステータスを更新
        break; // 更新が完了したらループを終了
      }
    }
    // 別のスプレッドシートにデータを書き戻す
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  }


  // ステータスが💤Sleeping💤の場合の処理
  if (status === "💤Sleeping💤") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合
        data[i][5] = "💤Sleeping💤"; // ステータスを更新
        break; // 更新が完了したらループを終了
      }
    }
    // 別のスプレッドシートにデータを書き戻す
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  }



}finally {
    lock.releaseLock();
  }

}
