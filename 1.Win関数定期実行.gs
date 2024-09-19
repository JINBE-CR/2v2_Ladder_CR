function teikizikkouwin_per10() {
  var now = new Date();
  var minutes = now.getMinutes();

  // 現在の分数が00または30の場合のみ実行
  if (minutes === 9 || minutes === 19 || minutes === 29 || minutes === 39 || minutes === 49 || minutes === 59) {
    // ここに実行したい処理を記述
    // 例: Discordにメッセージを送信するなどの処理
    Win1();
  }
}