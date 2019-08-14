import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: "Movie";
  title: Scalars["String"];
  director: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createRate: Rate;
  updateRate: Rate;
  deleteRate: Scalars["ID"];
};

export type MutationCreateRateArgs = {
  rateInput: RateInput;
};

export type MutationUpdateRateArgs = {
  rateInput: RateInput;
};

export type MutationDeleteRateArgs = {
  id: Scalars["ID"];
};

export type Novel = {
  __typename?: "Novel";
  writerInfo?: Maybe<Writer>;
  title: Scalars["String"];
  ncode: Scalars["String"];
  userid: Scalars["Int"];
  writer: Scalars["String"];
  story: Scalars["String"];
  biggenre: Scalars["Int"];
  genre: Scalars["Int"];
  gensaku: Scalars["String"];
  keyword: Scalars["String"];
  general_firstup: Scalars["String"];
  general_lastup: Scalars["String"];
  novel_type: Scalars["Int"];
  end: Scalars["Int"];
  general_all_no: Scalars["Int"];
  length: Scalars["Int"];
  time: Scalars["Int"];
  isstop: Scalars["Int"];
  isr15: Scalars["Int"];
  isbl: Scalars["Int"];
  isgl: Scalars["Int"];
  iszankoku: Scalars["Int"];
  istensei: Scalars["Int"];
  istenni: Scalars["Int"];
  pc_or_k: Scalars["Int"];
  global_point: Scalars["Int"];
  fav_novel_cnt: Scalars["Int"];
  review_cnt: Scalars["Int"];
  all_point: Scalars["Int"];
  all_hyoka_cnt: Scalars["Int"];
  sasie_cnt: Scalars["Int"];
  kaiwaritu: Scalars["Int"];
  novelupdated_at: Scalars["String"];
  updated_at: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  movies: Array<Movie>;
  novel: Novel;
  novels: Array<Novel>;
  writer: Writer;
};

export type QueryNovelArgs = {
  ncode: Scalars["String"];
};

export type QueryWriterArgs = {
  id: Scalars["String"];
};

export type Rate = {
  __typename?: "Rate";
  id: Scalars["ID"];
  rate: Scalars["Int"];
  title: Scalars["String"];
  body: Scalars["String"];
};

export type RateInput = {
  rate: Scalars["Int"];
  title: Scalars["String"];
  body: Scalars["String"];
};

export type Site = {
  __typename?: "Site";
  name: Scalars["String"];
  image: Scalars["String"];
  url: Scalars["String"];
};

export type Writer = {
  __typename?: "Writer";
  id: Scalars["String"];
  username: Scalars["String"];
  hurigana: Scalars["String"];
  site: Site;
  about: Scalars["String"];
  novels?: Maybe<Array<Novel>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Movie: ResolverTypeWrapper<Movie>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Novel: ResolverTypeWrapper<Novel>;
  Writer: ResolverTypeWrapper<Writer>;
  Site: ResolverTypeWrapper<Site>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  RateInput: RateInput;
  Rate: ResolverTypeWrapper<Rate>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Movie: Movie;
  String: Scalars["String"];
  Novel: Novel;
  Writer: Writer;
  Site: Site;
  Int: Scalars["Int"];
  Mutation: {};
  RateInput: RateInput;
  Rate: Rate;
  ID: Scalars["ID"];
  Boolean: Scalars["Boolean"];
};

export type MovieResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Movie"] = ResolversParentTypes["Movie"]
> = {
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  director?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createRate?: Resolver<
    ResolversTypes["Rate"],
    ParentType,
    ContextType,
    MutationCreateRateArgs
  >;
  updateRate?: Resolver<
    ResolversTypes["Rate"],
    ParentType,
    ContextType,
    MutationUpdateRateArgs
  >;
  deleteRate?: Resolver<
    ResolversTypes["ID"],
    ParentType,
    ContextType,
    MutationDeleteRateArgs
  >;
};

export type NovelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Novel"] = ResolversParentTypes["Novel"]
> = {
  writerInfo?: Resolver<
    Maybe<ResolversTypes["Writer"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ncode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userid?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  writer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  story?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  biggenre?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  genre?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  gensaku?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  keyword?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  general_firstup?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  general_lastup?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  novel_type?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  end?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  general_all_no?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  length?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  time?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isstop?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isr15?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isbl?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isgl?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  iszankoku?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  istensei?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  istenni?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  pc_or_k?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  global_point?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  fav_novel_cnt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  review_cnt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  all_point?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  all_hyoka_cnt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sasie_cnt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  kaiwaritu?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  novelupdated_at?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  movies?: Resolver<Array<ResolversTypes["Movie"]>, ParentType, ContextType>;
  novel?: Resolver<
    ResolversTypes["Novel"],
    ParentType,
    ContextType,
    QueryNovelArgs
  >;
  novels?: Resolver<Array<ResolversTypes["Novel"]>, ParentType, ContextType>;
  writer?: Resolver<
    ResolversTypes["Writer"],
    ParentType,
    ContextType,
    QueryWriterArgs
  >;
};

export type RateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Rate"] = ResolversParentTypes["Rate"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type SiteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Site"] = ResolversParentTypes["Site"]
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type WriterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Writer"] = ResolversParentTypes["Writer"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hurigana?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  site?: Resolver<ResolversTypes["Site"], ParentType, ContextType>;
  about?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  novels?: Resolver<
    Maybe<Array<ResolversTypes["Novel"]>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Novel?: NovelResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rate?: RateResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  Writer?: WriterResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
import gql from "graphql-tag";
