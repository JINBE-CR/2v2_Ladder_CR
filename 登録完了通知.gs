function onSubmit(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // 最大10秒間ロックを取得しようと試みます（タイムアウトを設定できます）



    var response = e.values;
    var message = "🎉 Welcome to 2v2 Ladder 🎉 \n Player registration has been completed! \n";

    for (var key in response) {
      if (key != 4 && key != 1) {
        var question = key;
        var answer = response[key].toString();

        message += "- " + answer + "\n";
      } if (key == 4) {
        var question = key;
        var answer = response[key].toString();
        message += "- " + "<@" + answer + ">\n------------------------------------------\n";

      } 
    }

    var discordWebhookUrl = "https://discordapp.com/api/webhooks/1134825347385405471/OhehKlY8E9G6kYES8dr6dAPQYtyBL-oeP5sUSra7catqYkGG_Q4vYdrTuFNoDkw4QNQj"; // ここにDiscord Webhook URLを追加

    var payload = {
      "content": message
    };

    var options = {
      "method": "post",
      "payload": JSON.stringify(payload),
      "contentType": "application/json"
    };

    UrlFetchApp.fetch(discordWebhookUrl, options);


  } finally {
    lock.releaseLock();
  }
}