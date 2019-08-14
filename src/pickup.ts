import axios from "axios";
import * as yaml from "js-yaml";

export {Pickup};

type Pickup = Syousetu[];
interface Syousetu {
  allcount?: number;
  title?: string;
  ncode?: string;
  userid?: number;
  writer?: string;
  story?: string;
  biggenre?: number;
  genre?: number;
  gensaku?: string;
  keyword?: string;
  general_firstup?: string;
  general_lastup?: string;
  novel_type?: number;
  end?: number;
  general_all_no?: number;
  length?: number;
  time?: number;
  isstop?: number;
  isr15?: number;
  isbl?: number;
  isgl?: number;
  iszankoku?: number;
  istensei?: number;
  istenni?: number;
  pc_or_k?: number;
  global_point?: number;
  fav_novel_cnt?: number;
  review_cnt?: number;
  all_point?: number;
  all_hyoka_cnt?: number;
  sasie_cnt?: number;
  kaiwaritu?: number;
  novelupdated_at?: string;
  updated_at?: string;
}

async function Pickup(
  ispickup: number = 1,
  order: string = "hyoka",
  limit: number = 200
): Promise<Pickup> {
  const list = await axios.get<any[]>(
    "https://api.syosetu.com/novelapi/api/?libtype=2&ispickup=" +
      ispickup +
      "&order=" +
      order +
      "&lim=" +
      limit
  );
  const data = await yaml.safeLoad(list.data.toString());
  return data;
}
