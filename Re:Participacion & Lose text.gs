function onFormSubmittext(e) {

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


  if (matchResult === "Re:Participation (Update Status)" && status === "🔥Waiting🔥") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合

      var teamname = data[i][1];
      var trophy = data[i][9];
      var discordID = data[i][4];

      var message = "**Re:Participation (Update Status)** : Good Luck!\n(Entry fee) + (Win)\n(      -10      ) + ( +0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
      message += "**[ " + teamname + " ]**" + "\n" + "🏆" + trophy + "\n" + "<@" + discordID + ">\n" + "Next Status:🔥Waiting🔥\n------------------------------------------\n"

        break; // 更新が完了したらループを終了
      }
    }
  }


  if (matchResult === "Re:Participation (Update Status)" && status === "💤Sleeping💤") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合

      var teamname = data[i][1];
      var trophy = data[i][9];
      var discordID = data[i][4];

      var message = "**Re:Participation (Update Status)** :\nThanks for participating in 2v2 Ladder!\n(Entry fee) + (Win)\n(        0      ) + ( +0 )     =     🏆  +0\n--    --    --    --    --    --    --    --    --    --    --\n";
      message += "**[ " + teamname + " ]**" + "\n" + "🏆" + trophy + "\n" + "<@" + discordID + ">\n" + "Next Status:💤Sleeping💤\n------------------------------------------\n"

        break; // 更新が完了したらループを終了
      }
    }
  }


   if (matchResult === "Lose" && status === "🔥Waiting🔥") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合

      var teamname = data[i][1];
      var trophy = data[i][9];
      var discordID = data[i][4];

      var message = "**Lose** : Switch your mind! Focus next match!\n(Entry fee) + (Win)\n(      -10      ) + ( +0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
      message += "**[ " + teamname + " ]**" + "\n" + "🏆" + trophy + "\n" + "<@" + discordID + ">\n" + "Next Status:🔥Waiting🔥\n------------------------------------------\n"

        break; // 更新が完了したらループを終了
      }
    }
  }


  if (matchResult === "Lose" && status === "💤Sleeping💤") {
    // 別のスプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
    var sheet = spreadsheet.getSheetByName('フォームの回答 1');
    
    // 別のスプレッドシートのデータを取得
    var data = sheet.getDataRange().getValues();
    
    // Player Tagを検索して該当する行のステータスを更新
    for (var i = 0; i < data.length; i++) {
      if (data[i][8] === mail) { // Player1が一致する行を見つけた場合

      var teamname = data[i][1];
      var trophy = data[i][9];
      var discordID = data[i][4];

      var message = "**Lose** :\nThanks for participating in 2v2 Ladder!\n(Entry fee) + (Win)\n(      -10      ) + ( +0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
      message += "**[ " + teamname + " ]**" + "\n" + "🏆" + trophy + "\n" + "<@" + discordID + ">\n" + "Next Status:💤Sleeping💤\n------------------------------------------\n"

        break; // 更新が完了したらループを終了
      }
    }
  }





var discordWebhookUrl = "https://discord.com/api/webhooks/1150333161880948786/sHNy7yDUWp5dY7pJzl_4DBEXXT9Ymvrc70yfdd1ZDsBMMH6CpxNWbZEZD8wad-H0g9FS"; // ここにDiscord Webhook URLを追加

  var payload = {
    "content": message
  };

  var options = {
    "method": "post",
    "payload": JSON.stringify(payload),
    "contentType": "application/json"
  };

  UrlFetchApp.fetch(discordWebhookUrl, options);


}finally {
    lock.releaseLock();
  }

}
