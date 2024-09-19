function Win1() {
  var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
  var sheet = spreadsheet.getSheetByName('フォームの回答 1');

  // 別のスプレッドシートのデータを取得
  var data = sheet.getDataRange().getValues();





  for (var z = 1; z < data.length; z++) {
    if (data[z][11] == "🔥Waiting🔥") {
      var spreadsheete = SpreadsheetApp.getActiveSpreadsheet();
      var sheete = spreadsheete.getSheetByName('シート1');
      var rangee = sheete.getRange(2, 1, 1, 42);
      rangee.clear();


      Logger.log("yatta");
      var teamname = data[z][1];
      var playerTag1 = data[z][2];
      var playerTag2 = data[z][3];
      var discordID = data[z][4];
      var bancard = data[z][6];
      var evolutioncard = data[z][7];
      var trophy = data[z][9];
      var opponentTag = data[z][10];
      var bancardopponent = data[z][12]
      var evolutioncardopponent = data[z][13]


      var playerTag1 = playerTag1.replace("#", "");

      var URLCR = "https://proxy.royaleapi.dev/v1/players/%23" + playerTag1 + "/battlelog"

      var response = UrlFetchApp.fetch(URLCR, {
        "method": "GET",
        "headers": headers
      });
      if (response != "[]") {//間違ったTagをいれたときに、エラーになるのを回避する
        var obj = JSON.parse(response.getContentText());
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        //var res1;
        //var obja = obj[0]
        //res1 = obja.includes("battleTime");
        //Logger.log(res1);
        //Logger.log(obj[0]);

        var crownsTT = [];
        var crownsOO = [];
        var typematch = [];
        var tag11 = [];
        var tag22 = [];


        for (var i = 0; i < 1; i++) {
          var game = obj[i];
          if (game["type"]) {
            var type = game["type"];
          }

          sheet.getRange("A" + (i + 2)).setValue(type);
          typematch[i] = type;

          var game = obj[i];
          var battleTime = game["battleTime"];
          sheet.getRange("B" + (i + 2)).setValue(battleTime);

          var game = obj[i];
          var team = game["team"];
          var crowns = team[0]["crowns"];
          sheet.getRange("C" + (i + 2)).setValue(crowns);

          for (var j = 0; j < 8; j++) {
            var cardsT = team[0]["cards"];
            var cardsTT = cardsT[j]["name"];
            sheet.getRange((i + 2), (j + 7)).setValue(cardsTT);

            if (cardsT[j] && cardsT[j]["evolutionLevel"]) {
              var evo = cardsT[j]["evolutionLevel"];
              sheet.getRange((i + 2), (j + 39)).setValue(evo);
            }
          }



          //
          if (team[1] && team[1]["cards"]) {
            for (var j = 0; j < 8; j++) {
              var cardsT = team[1]["cards"];
              var cardsTT = cardsT[j]["name"];
              sheet.getRange((i + 2), (j + 15)).setValue(cardsTT);

              if (cardsT[j] && cardsT[j]["evolutionLevel"]) {
                var evo = cardsT[j]["evolutionLevel"];
                sheet.getRange((i + 2), (j + 40)).setValue(evo);
              }
            }


          }

          crownsTT[i] = crowns;


          var game = obj[i];
          var opponent = game["opponent"];
          var crownsO = opponent[0]["crowns"];
          sheet.getRange("D" + (i + 2)).setValue(crownsO);


          var game = obj[i];
          var opponent = game["opponent"];

          var tag1 = opponent[0]["tag"];
          sheet.getRange("E" + (i + 2)).setValue(tag1);
          tag11[i] = tag1;
          if (opponent[1] && opponent[1]["tag"]) {
            var tag2 = opponent[1]["tag"];
            sheet.getRange("F" + (i + 2)).setValue(tag2);
            tag22[i] = tag2;
          }
          for (var k = 0; k < 8; k++) {
            var cardsO = opponent[0]["cards"];
            var cardsOO = cardsO[k]["name"];
            sheet.getRange((i + 2), (k + 23)).setValue(cardsOO);

            if (cardsO[k] && cardsO[k]["evolutionLevel"]) {
              var evo = cardsO[k]["evolutionLevel"];
              sheet.getRange((i + 2), (k + 41)).setValue(evo);
            }
          }

          if (opponent[1] && opponent[1]["cards"]) {
            for (var k = 0; k < 8; k++) {
              var cardsO = opponent[1]["cards"];
              var cardsOO = cardsO[k]["name"];
              sheet.getRange((i + 2), (k + 31)).setValue(cardsOO);

              if (cardsO[k] && cardsO[k]["evolutionLevel"]) {
                var evo = cardsO[k]["evolutionLevel"];
                sheet.getRange((i + 2), (k + 42)).setValue(evo);
              }
            }
          }



          crownsOO[i] = crownsO;



        }//ここまでが、表作成のスクリプト
        Logger.log(typematch);
        Logger.log(crownsTT);
        Logger.log(crownsOO);
        Logger.log("tag11=" + tag11);
        Logger.log("tag22=" + tag22);







        var wincount = 0;
        for (var x = 0; x < 1; x++) {
          //var spreadsheet = SpreadsheetApp.openById('1lG3wmBI1guVhTOv4nFkGiiGYohC37D2ClLS_1-X51BM');
          //var sheet = spreadsheet.getSheetByName('シート1');
          //var Tag1 = "";
          //var Tag1 = sheet.getRange("E" + (x+2)).getValue();
          //var Tag2 = "";
          //var Tag2 = sheet.getRange("F" + (x+2)).getValue();
          //Logger.log("x="+x);
          //Logger.log("Tag1=" + Tag1);
          //Logger.log("Tag2=" + Tag2);

          if (typematch[x] == "clanMate2v2") {
            if (tag11[x] == opponentTag || tag22[x] == opponentTag) {
              Logger.log("関係ある試合");
              if (crowns > crownsO) {
                Logger.log("win!");
                var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
                var sheet = spreadsheet.getSheetByName('フォームの回答 1');

                // 別のスプレッドシートのデータを取得
                var data = sheet.getDataRange().getValues();

                // Player Tagを検索して該当する行のステータスを更新
                playerTag1 = "#" + playerTag1;
                for (var i = 0; i < data.length; i++) {
                  if (data[i][2] == playerTag1) { // Player1が一致する行を見つけた場合

                    var teamnameresult = data[i][1];
                    var trophyresult = data[i][9];
                    var discordIDresult = data[i][4];

                    trophyresult += 40; //+40🏆

                    var message = "------------------------------------------\n\n" + "**Match Result : [Win](https://cdn.discordapp.com/attachments/1135421157680619571/1168150872828686426/vllo.gif?ex=6550b847&is=653e4347&hm=c7afab4bab8c1d7ee7c21e26dd5ccef43a68e3b00ae40203d3dd2688cb413df7&)**\n(Entry fee) + ( Win )\n(      -10      ) + ( +40 )     =     🏆 +30\n--    --    --    --    --    --    --    --    --    --    --\n";
                    message += "**[ " + teamnameresult + " ]**" + "\n" + "🏆" + trophyresult + "\n" + "<@" + discordIDresult + ">\n"

                    data[i][9] = trophyresult;
                    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

                    //discord通知
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

                    break; // 更新が完了したらループを終了
                  }
                }


              } else {
                Logger.log("Lose...");

                var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
                var sheet = spreadsheet.getSheetByName('フォームの回答 1');

                // 別のスプレッドシートのデータを取得
                var data = sheet.getDataRange().getValues();

                // Player Tagを検索して該当する行のステータスを更新
                playerTag1 = "#" + playerTag1;
                for (var i = 0; i < data.length; i++) {
                  if (data[i][2] == playerTag1) { // Player1が一致する行を見つけた場合

                    var teamnameresult = data[i][1];
                    var trophyresult = data[i][9];
                    var discordIDresult = data[i][4];

                    trophyresult += 0; //🏆

                    var message = "------------------------------------------\n\n" + "**Match Result : [Lose](https://cdn.discordapp.com/attachments/1135421157680619571/1168150892479004782/vllo.gif?ex=6550b84b&is=653e434b&hm=3d2ebf57abfdb52be0ddbcbb6ea0680e4c234f309c0f329fb0fdebcfce4914ec&)**\n(Entry fee) + ( Win )\n(      -10      ) + ( + 0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
                    message += "**[ " + teamnameresult + " ]**" + "\n" + "🏆" + trophyresult + "\n" + "<@" + discordIDresult + ">\n"

                    data[i][9] = trophyresult;
                    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

                    //discord通知
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

                    break; // 更新が完了したらループを終了
                  }
                }



              }
            } else {
              Logger.log("2v2だが、関係ない試合");


              var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
              var sheet = spreadsheet.getSheetByName('フォームの回答 1');

              // 別のスプレッドシートのデータを取得
              var data = sheet.getDataRange().getValues();

              // Player Tagを検索して該当する行のステータスを更新
              playerTag1 = "#" + playerTag1;
              for (var i = 0; i < data.length; i++) {
                if (data[i][2] == playerTag1) { // Player1が一致する行を見つけた場合

                  var teamnameresult = data[i][1];
                  var trophyresult = data[i][9];
                  var discordIDresult = data[i][4];

                  trophyresult += 0; //🏆

                  var message = "**Match Result : [No Data](https://cdn.discordapp.com/attachments/1135421157680619571/1168150906899025961/vllo.gif?ex=6550b84f&is=653e434f&hm=4ac1d14ea2f611ac60249d15fa4a4d1bffbf632166f372480420bff3aa02d280&) (Wrong Opponent)**\n(Entry fee) + ( Win )\n(      -10      ) + ( + 0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
                  message += "**[ " + teamnameresult + " ]**" + "\n" + "🏆" + trophyresult + "\n" + "<@" + discordIDresult + ">\n" + "------------------------------------------\n"

                  data[i][9] = trophyresult;
                  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

                  //discord通知
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

                  break; // 更新が完了したらループを終了
                }
              }



            }
          } else {
            Logger.log("2v2ではない、まったく関係ない試合");







            var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
            var sheet = spreadsheet.getSheetByName('フォームの回答 1');

            // 別のスプレッドシートのデータを取得
            var data = sheet.getDataRange().getValues();

            // Player Tagを検索して該当する行のステータスを更新
            playerTag1 = "#" + playerTag1;
            for (var i = 0; i < data.length; i++) {
              if (data[i][2] == playerTag1) { // Player1が一致する行を見つけた場合

                var teamnameresult = data[i][1];
                var trophyresult = data[i][9];
                var discordIDresult = data[i][4];

                trophyresult += 0; //🏆

                var message = "------------------------------------------\n\n" + "**Match Result : [No Data](https://cdn.discordapp.com/attachments/1135421157680619571/1168150906899025961/vllo.gif?ex=6550b84f&is=653e434f&hm=4ac1d14ea2f611ac60249d15fa4a4d1bffbf632166f372480420bff3aa02d280&) (2v2 Match Not Found)**\n(Entry fee) + ( Win )\n(      -10      ) + ( + 0 )     =     🏆 -10\n--    --    --    --    --    --    --    --    --    --    --\n";
                message += "**[ " + teamnameresult + " ]**" + "\n" + "🏆" + trophyresult + "\n" + "<@" + discordIDresult + ">\n"

                data[i][9] = trophyresult;
                sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

                //discord通知
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

                break; // 更新が完了したらループを終了
              }
            }



          }
        }
      } else {
        Logger.log("そもそもタグが違う");





        var spreadsheet = SpreadsheetApp.openById('1OF-b9cBI3kQHI2Y9v7UoheZdu61cmEX91hXekOZb44M');
        var sheet = spreadsheet.getSheetByName('フォームの回答 1');

        // 別のスプレッドシートのデータを取得
        var data = sheet.getDataRange().getValues();

        // Player Tagを検索して該当する行のステータスを更新
        playerTag1 = "#" + playerTag1;
        for (var i = 0; i < data.length; i++) {
          if (data[i][2] == playerTag1) { // Player1が一致する行を見つけた場合

            var teamnameresult = data[i][1];
            var trophyresult = data[i][9];
            var discordIDresult = data[i][4];

            trophyresult += 0; //🏆

            var message = "------------------------------------------\n\n" + "**Match Result : [No Data](https://cdn.discordapp.com/attachments/1135421157680619571/1168150906899025961/vllo.gif?ex=6550b84f&is=653e434f&hm=4ac1d14ea2f611ac60249d15fa4a4d1bffbf632166f372480420bff3aa02d280&) (Wrong your CR Player Tag)**\nYour CR player Tag is incorrect when initially registered.\n*Check the link below*👇\nhttps://docs.google.com/forms/d/e/1FAIpQLSd7qlUux4mt0qGIjW5c347BTxwCyB9HhtcY5YgqF3bFA6R7og/viewform?usp=sf_link \n"

            data[i][9] = trophyresult;
            sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

            //discord通知
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

            break; // 更新が完了したらループを終了
          }
        }




      }
    }
  }
}





function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}