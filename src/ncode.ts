import fetch from 'node-fetch'
import * as yaml from 'js-yaml'

type TSyousetu =  {
    title: string,
    ncode: string,
    userid: number,
    writer: string,
    story: string,
    biggenre: number,
    genre: number,
    gensaku: string,
    keyword: string,
    general_firstup: string,
    general_lastup: string,
    novel_type: number,
    end: number,
    general_all_no: number,
    length: number,
    time: number,
    isstop: number,
    isr15: number,
    isbl: number,
    isgl: number,
    iszankoku: number,
    istensei: number,
    istenni: number,
    pc_or_k: number,
    global_point: number,
    fav_novel_cnt: number,
    review_cnt: number,
    all_point: number,
    all_hyoka_cnt: number,
    sasie_cnt: number,
    kaiwaritu: number,
    novelupdated_at: string,
    updated_at: string,
  };
  

interface ISyousetu {
    title: string;
    ncode: string;
    userid: number;
    writer: string;
    story: string;
    biggenre: number;
    genre: number;
    gensaku: string;
    keyword: string;
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
    isgl: number;
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
}

async function getSyousetu(id: string) {
    const res = await fetch('https://api.syosetu.com/novelapi/api/?libtype=2&ncode='+id)
    const body = await res.text()
    const json = await yaml.safeLoad(body)
    return json as ISyousetu;
}

export default class Syousetu implements ISyousetu {
    title: string;
    ncode: string;
    userid: number;
    writer: string;
    story: string;
    biggenre: number;
    genre: number;
    gensaku: string;
    keyword: string;
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
    isgl: number;
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

    constructor(public id: string) {
        getSyousetu(id).then(syousetu => {
            this.title = syousetu.title;
            this.ncode = syousetu.ncode;
            this.userid = syousetu.userid;
            this.story = syousetu.story;
            this.biggenre = syousetu.biggenre;
            this.genre = syousetu.genre;
            this.gensaku = syousetu.gensaku;
            this.keyword = syousetu.keyword;
            this.general_firstup = syousetu.general_firstup;
            this.general_lastup = syousetu.general_lastup;
            this.novel_type = syousetu.novel_type;
            this.end = syousetu.end;
            this.general_all_no = syousetu.general_all_no;
            this.length = syousetu.length;
            this.time = syousetu.time;
            this.isstop = syousetu.isstop;
            this.isr15 = syousetu.isr15;
            this.isbl = syousetu.isbl;
            this.isgl = syousetu.isgl;
            this.iszankoku = syousetu.iszankoku;
            this.istensei = syousetu.istensei;
            this.istenni = syousetu.istenni;
            this.pc_or_k = syousetu.pc_or_k;
            this.global_point = syousetu.global_point;
            this.fav_novel_cnt = syousetu.fav_novel_cnt;
            this.review_cnt = syousetu.review_cnt;
            this.all_hyoka_cnt = syousetu.all_hyoka_cnt;
            this.sasie_cnt = syousetu.sasie_cnt;
            this.kaiwaritu = syousetu.kaiwaritu;
            this.novelupdated_at = syousetu.novelupdated_at;
            this.updated_at = syousetu.updated_at;
        })
    }
}