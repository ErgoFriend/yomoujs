import axios from "axios";

class Syousetu {
  ncode: string;
  title: string;
  userid: number;
  writer: string;
  story: string;
  biggenre: number;
  genre: number;
  gensaku?: string;
  keyword: string[];
  general_firstup: string;
  general_lastup: string;
  novel_type: number;
  end: number;
  general_all_no: number;
  length: number;
  time: number;
  isstop: number;
  isr15: number;
  isbl: number;
  isgl?: number;
  iszankoku: number;
  istensei: number;
  istenni: number;
  pc_or_k: number;
  global_point: number;
  fav_novel_cnt: number;
  review_cnt: number;
  all_point: number;
  all_hyoka_cnt: number;
  sasie_cnt: number;
  kaiwaritu: number;
  novelupdated_at: string;
  updated_at: string;

  constructor(data: any) {
    this.title = data.title;
    this.ncode = data.ncode;
    this.userid = data.userid;
    this.writer = data.writer;
    this.story = data.story;
    this.biggenre = data.biggenre;
    this.genre = data.genre;
    this.keyword = data.keyword.split(" ");
    this.general_firstup = data.general_firstup;
    this.general_lastup = data.general_lastup;
    this.novel_type = data.novel_type;
    this.end = data.end;
    this.general_all_no = data.general_all_no;
    this.length = data.length;
    this.time = data.time;
    this.isstop = data.isstop;
    this.isr15 = data.isr15;
    this.isbl = data.isbl;
    this.iszankoku = data.iszankoku;
    this.istensei = data.istensei;
    this.istenni = data.istenni;
    this.pc_or_k = data.pc_or_k;
    this.global_point = data.global_point;
    this.fav_novel_cnt = data.fav_novel_cnt;
    this.review_cnt = data.review_cnt;
    this.all_point = data.all_point;
    this.all_hyoka_cnt = data.all_hyoka_cnt;
    this.sasie_cnt = data.sasie_cnt;
    this.kaiwaritu = data.kaiwaritu;
    this.novelupdated_at = data.novelupdated_at;
    this.updated_at = data.updated_at;
  }
}

export async function getSyousetu(id: string) {
  const res = await axios.get<any[]>(
    "https://api.syosetu.com/novelapi/api/?libtype=2&out=json&ncode=" + id,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      data: {}
    }
  );
  return new Syousetu(res.data[1]);
}

// async function d() {
//   const a = await getSyousetu('N4067FO');
//   console.log(a)
// }
// d()
