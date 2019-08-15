# yomoujs
[![Build Status](https://travis-ci.com/ErgoFriend/yomoujs.svg?branch=master)](https://travis-ci.com/ErgoFriend/yomoujs)

小説家になろう API ライブラリ with TypeScript

## Usage

### ピックアップ

```javascript
import yomoujs from "yomoujs";

(async function () {
  const a = await yomoujs.Pickup();
  console.log(a)
}());
```

### 小説情報

```javascript
import yomoujs from "yomoujs";

(async function () {
    const novel = await yomoujs.getNovel("n4845ec");
    console.log(novel)
}());
```

```typescript
 Novel
{
  title: '「「神と呼ばれ、魔王と呼ばれても」」',
  ncode: 'N4845EC',
  userid: 570481,
  writer: 'しまもん',
  story: '遥か未来の地球。そこには神の如き力を持つ一人の少女が存在している。少女は太古に栄えた旧人類最後の生き残りだ。\n' +
    'そして少女が住んでいる地球では、「魔法」という新しい技術を使いこなす新人類が誕生しつつあった。\n' +
    'そんな新人類を少女はジッと観察する。\n' +
    '時に神と呼ばれ、時に魔王と呼ばれても、少女は新人類を見続ける。\n' +
    'これは、ただ孤独に生きる一人の少女と、懸命に生きる新人類との間に起こった長い長いお話。',
  biggenre: 4,
  genre: 403,
  gensaku: '',
  keyword: 'R15 近未来 ハッピーエンド 未来ＳＦ 超越者 シムワールド 宇宙戦争 エログロ 群像劇 女主人公 百合描写あり',
  general_firstup: '2017-07-09 18:50:00',
  general_lastup: '2019-06-14 22:36:43',
  novel_type: 1,
  end: 0,
  general_all_no: 95,
  length: 270960,
  time: 542,
  isstop: 0,
  isr15: 1,
  isbl: 0,
  isgl: 0,
  iszankoku: 0,
  istensei: 0,
  istenni: 0,
  pc_or_k: 2,
  global_point: 20180,
  fav_novel_cnt: 5744,
  review_cnt: 10,
  all_point: 8692,
  all_hyoka_cnt: 915,
  sasie_cnt: 1,
  kaiwaritu: 12,
  novelupdated_at: '2019-08-15 21:40:23',
  updated_at: '2019-08-15 21:44:06'
}
```

### 作者・ユーザー情報

```javascript
import yomoujs from "yomoujs";

(async function () {
    const user = await yomoujs.getUser("1017640");
    console.log(user)
}());
```

```typescript
User
{
  id: '1017640',
  username: 'PiusProxy',
  hurigana: 'パイアスプラクシー',
  site: {
    name: 'ブログ',
    image: 'https://cdn-ak.f.st-hatena.com/images/fotolife/e/ergofriend/20190720/20190720012842.png',
    url: 'https%3A%2F%2Fergofriend.hatenablog.com%2F'
  },
  about: 'こんちゃっすー'
}
```