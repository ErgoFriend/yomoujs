import axios from "axios";
import {Novel} from "./generated/graphql";

export async function getNovel(ncode: string): Promise<Novel> {
  const res = await axios.get<any[]>(
    "https://api.syosetu.com/novelapi/api/?libtype=2&out=json&ncode=" + ncode,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      data: {}
    }
  );

  return res.data[1];
}
