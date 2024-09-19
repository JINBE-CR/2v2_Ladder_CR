# 2v2_Ladder_CR
Clash Royale's virtual 2v2 rank competition




# クラロワ 2v2 マルチ
クラロワ - 競技性が高い戦略mobileゲーム（ゲームジャンル：RTS）  
における 2人 vs 2人 のゲームモードの仮想ランク戦を楽しめるコミュニティの作成  

## 各種リンク
- ***Homepage:***
https://sites.google.com/view/clashroyale-2v2-ladder

- ***X (Twitter):***
https://twitter.com/ClashRoyale_2v2, https://twitter.com/JINBE_CR

- ***Discord:***
https://discord.gg/tMkjpP8xsx

- ***YouTube:***
http://www.youtube.com/@JINBE_CR

## プロジェクト概要  
クラロワの試合履歴(ログ)はAPIとして吐き出される。そのAPIは外部公開されている。  
[Clash Royale Developer API](https://developer.clashroyale.com/#/)  

このAPIを用いて、勝敗の自動判定を行うことでランク付けを行う。  
勝敗結果をDiscord Botで自動表示 かつ ランキング表を自動更新する。

## 具体的な流れ  
**1. プレイヤー登録**  
- PlayerID (ゲーム内のアカウントを識別するID、ゲーム内で取得可能)
- PairTag (同じPairTagを登録することで任意のフレンドとペアを組める)
- Discord User ID (メンションするときに用いる)
- PlayerName (任意設定可能)
- 言語 (Voice Chatで話す言語)  

をGoogle Formで登録する。

**2. ステータスの更新**  
ステータスを更新することで、試合に参加するかどうかの意思表示を行う。  

**3. 試合結果の表示とランキング表の更新**  
Discord Botが試合結果を自動表示し、ランキング表をリアルタイムで更新する。  

**詳細**  
- [HomePageの使い方](https://sites.google.com/view/clashroyale-2v2-ladder/usage?authuser=0)  
- [Tutorial Video](https://www.youtube.com/watch?v=6zlPfjQTWtY)  

## 協力団体
- [Royale API](https://royaleapi.com/)

-----[Discuss](https://discuss.royaleapi.com/t/2v2-ladder-with-external-application/6129/7)

## 技術
- Heroku
- Google Apps Script
- JavaScript
- Discord Bot
