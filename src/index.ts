import {
  base_url,
  bigGenreStr,
  bigGenreNum,
  GenreStr,
  GenreNum,
  Order
} from "./config";
import {Pickup} from "./pickup";
import {CreateGenreQuery} from "./genre";
import {getUser} from "./user";
import {getNovel} from "./novel";

const yomoujs = {
  //./config
  base_url,
  bigGenreStr,
  bigGenreNum,
  GenreStr,
  GenreNum,
  Order,
  //./pickup
  Pickup,
  //./genre
  CreateGenreQuery,
  //./user
  getUser,
  //./novel
  getNovel
};
export default yomoujs;
