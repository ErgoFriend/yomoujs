# yomoujs
[![Build Status](https://travis-ci.com/ErgoFriend/yomoujs.svg?branch=master)](https://travis-ci.com/ErgoFriend/yomoujs)

小説家になろう API ライブラリ

## Usage

### ピックアップ

```javascript
import * as yomou from "yomoujs";

(async function () {
  const a = await yomou.Pickup();
  console.log(a)
}());
```

### 小説情報

```javascript
import * as yomou from "yomoujs";

(async function () {
    const novel = await yomou.getNovel('n4845ec');
    console.log(novel)
}());

```

### 作者・ユーザー情報

```javascript
import * as yomou from "yomoujs";

(async function () {
    const user = await yomou.getUser("570481");
    console.log(user)
}());

```