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
    const a = await yomou.getSyousetu('n4845ec');
    console.log(a)
}());

```

### 作者のニックネーム

```javascript
import * as yomou from "yomoujs";

(async function () {
    const user_name = await yomou.getUser(570481).then(data => yomou.getUserName(data));
    console.log(user_name)
}());

```