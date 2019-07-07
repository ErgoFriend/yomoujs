import fetch from 'node-fetch'

export {
    getUserName,
    getUser
}

function getUserName(user: string): string {
    let result2:string[]|null = user.match(/ユーザネーム<\/dt>\n<dd>([\s\S]*?)<\/dd>/i);
    if (result2){
      return result2 !== null ? result2[1] : ""
    }
    return ""
}

async function getUser(id: string|number): Promise<string> {
  const data =  await fetch('https://mypage.syosetu.com/'+id)
  .then(res => res.text())
  .then(data => data.match(/<dl class="profile">[\s\S]*?<\/dl>/i))
  .then(result => result !== null ? result[0] : "")
  return data
}

//getUser(531083).then(data => console.log(getUserName(data)))