import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "requests" */
export type Requests = {
  __typename?: 'Requests';
  /** An object relationship */
  author?: Maybe<Users>;
  authorId?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  bodyLang?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  headers?: Maybe<Scalars['String']>;
  headersLang?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  method?: Maybe<Scalars['String']>;
  /** Json schema */
  schema?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** An array relationship */
  traces: Array<Traces>;
  /** An aggregate relationship */
  tracesAggregate: TracesAggregate;
  updatedAt: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};


/** columns and relationships of "requests" */
export type RequestsTracesArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};


/** columns and relationships of "requests" */
export type RequestsTracesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};

/** aggregated selection of "requests" */
export type RequestsAggregate = {
  __typename?: 'RequestsAggregate';
  aggregate?: Maybe<RequestsAggregateFields>;
  nodes: Array<Requests>;
};

/** aggregate fields of "requests" */
export type RequestsAggregateFields = {
  __typename?: 'RequestsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RequestsMaxFields>;
  min?: Maybe<RequestsMinFields>;
};


/** aggregate fields of "requests" */
export type RequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "requests" */
export type RequestsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Requests_Max_Order_By>;
  min?: InputMaybe<Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "requests" */
export type RequestsArrRelInsertInput = {
  data: Array<RequestsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RequestsOnConflict>;
};

/** Boolean expression to filter rows from the table "requests". All fields are combined with a logical 'AND'. */
export type RequestsBoolExp = {
  _and?: InputMaybe<Array<RequestsBoolExp>>;
  _not?: InputMaybe<RequestsBoolExp>;
  _or?: InputMaybe<Array<RequestsBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  body?: InputMaybe<StringComparisonExp>;
  bodyLang?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  headers?: InputMaybe<StringComparisonExp>;
  headersLang?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  method?: InputMaybe<StringComparisonExp>;
  schema?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  traces?: InputMaybe<TracesBoolExp>;
  traces_aggregate?: InputMaybe<Traces_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  workspace?: InputMaybe<WorkspacesBoolExp>;
  workspaceId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "requests" */
export enum RequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  RequestsPkey = 'requests_pkey'
}

/** input type for inserting data into table "requests" */
export type RequestsInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  bodyLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['String']>;
  headersLang?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<Scalars['String']>;
  /** Json schema */
  schema?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  traces?: InputMaybe<TracesArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<WorkspacesObjRelInsertInput>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RequestsMaxFields = {
  __typename?: 'RequestsMaxFields';
  authorId?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  bodyLang?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  headers?: Maybe<Scalars['String']>;
  headersLang?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Scalars['String']>;
  /** Json schema */
  schema?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type RequestsMinFields = {
  __typename?: 'RequestsMinFields';
  authorId?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  bodyLang?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  headers?: Maybe<Scalars['String']>;
  headersLang?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Scalars['String']>;
  /** Json schema */
  schema?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "requests" */
export type RequestsMutationResponse = {
  __typename?: 'RequestsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Requests>;
};

/** on_conflict condition type for table "requests" */
export type RequestsOnConflict = {
  constraint: RequestsConstraint;
  update_columns?: Array<RequestsUpdateColumn>;
  where?: InputMaybe<RequestsBoolExp>;
};

/** Ordering options when selecting data from "requests". */
export type RequestsOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  bodyLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  headers?: InputMaybe<OrderBy>;
  headersLang?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  schema?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  tracesAggregate?: InputMaybe<TracesAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  workspace?: InputMaybe<WorkspacesOrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: requests */
export type RequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "requests" */
export enum RequestsSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  BodyLang = 'bodyLang',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Headers = 'headers',
  /** column name */
  HeadersLang = 'headersLang',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Schema = 'schema',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** input type for updating data in table "requests" */
export type RequestsSetInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  bodyLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['String']>;
  headersLang?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<Scalars['String']>;
  /** Json schema */
  schema?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "requests" */
export enum RequestsUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  BodyLang = 'bodyLang',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Headers = 'headers',
  /** column name */
  HeadersLang = 'headersLang',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Schema = 'schema',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type RequestsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RequestsSetInput>;
  where: RequestsBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "traces" */
export type Traces = {
  __typename?: 'Traces';
  /** An object relationship */
  author?: Maybe<Users>;
  authorId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  request: Scalars['jsonb'];
  requestId: Scalars['uuid'];
  response: Scalars['jsonb'];
  timestamp: Scalars['timestamptz'];
};


/** columns and relationships of "traces" */
export type TracesRequestArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "traces" */
export type TracesResponseArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "traces" */
export type TracesAggregate = {
  __typename?: 'TracesAggregate';
  aggregate?: Maybe<TracesAggregateFields>;
  nodes: Array<Traces>;
};

/** aggregate fields of "traces" */
export type TracesAggregateFields = {
  __typename?: 'TracesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TracesMaxFields>;
  min?: Maybe<TracesMinFields>;
};


/** aggregate fields of "traces" */
export type TracesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TracesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "traces" */
export type TracesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Traces_Max_Order_By>;
  min?: InputMaybe<Traces_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TracesAppendInput = {
  request?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "traces" */
export type TracesArrRelInsertInput = {
  data: Array<TracesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TracesOnConflict>;
};

/** Boolean expression to filter rows from the table "traces". All fields are combined with a logical 'AND'. */
export type TracesBoolExp = {
  _and?: InputMaybe<Array<TracesBoolExp>>;
  _not?: InputMaybe<TracesBoolExp>;
  _or?: InputMaybe<Array<TracesBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  request?: InputMaybe<JsonbComparisonExp>;
  requestId?: InputMaybe<UuidComparisonExp>;
  response?: InputMaybe<JsonbComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "traces" */
export enum TracesConstraint {
  /** unique or primary key constraint on columns "id" */
  TracesPkey = 'traces_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TracesDeleteAtPathInput = {
  request?: InputMaybe<Array<Scalars['String']>>;
  response?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TracesDeleteElemInput = {
  request?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TracesDeleteKeyInput = {
  request?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "traces" */
export type TracesInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  request?: InputMaybe<Scalars['jsonb']>;
  requestId?: InputMaybe<Scalars['uuid']>;
  response?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TracesMaxFields = {
  __typename?: 'TracesMaxFields';
  authorId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  requestId?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TracesMinFields = {
  __typename?: 'TracesMinFields';
  authorId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  requestId?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "traces" */
export type TracesMutationResponse = {
  __typename?: 'TracesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Traces>;
};

/** on_conflict condition type for table "traces" */
export type TracesOnConflict = {
  constraint: TracesConstraint;
  update_columns?: Array<TracesUpdateColumn>;
  where?: InputMaybe<TracesBoolExp>;
};

/** Ordering options when selecting data from "traces". */
export type TracesOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  request?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
  response?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: traces */
export type TracesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TracesPrependInput = {
  request?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "traces" */
export enum TracesSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Id = 'id',
  /** column name */
  Request = 'request',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Response = 'response',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "traces" */
export type TracesSetInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  request?: InputMaybe<Scalars['jsonb']>;
  requestId?: InputMaybe<Scalars['uuid']>;
  response?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "traces" */
export enum TracesUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Id = 'id',
  /** column name */
  Request = 'request',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Response = 'response',
  /** column name */
  Timestamp = 'timestamp'
}

export type TracesUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TracesAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<TracesDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<TracesDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<TracesDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TracesPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TracesSetInput>;
  where: TracesBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  username: Scalars['String'];
  /** An aggregate relationship */
  workspaceRolesAggregate: WorkspaceRolesAggregate;
  /** An array relationship */
  workspace_roles: Array<WorkspaceRoles>;
};


/** columns and relationships of "users" */
export type UsersWorkspaceRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersWorkspace_RolesArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  photo?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
  workspace_roles?: InputMaybe<WorkspaceRolesBoolExp>;
  workspace_roles_aggregate?: InputMaybe<Workspace_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "username" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
  workspace_roles?: InputMaybe<WorkspaceRolesArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  photo?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  workspace_rolesAggregate?: InputMaybe<WorkspaceRolesAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** Manage workspace memberships */
export type WorkspaceRoles = {
  __typename?: 'WorkspaceRoles';
  /** An object relationship */
  author: Users;
  authorId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  role: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "workspace_roles" */
export type WorkspaceRolesAggregate = {
  __typename?: 'WorkspaceRolesAggregate';
  aggregate?: Maybe<WorkspaceRolesAggregateFields>;
  nodes: Array<WorkspaceRoles>;
};

/** aggregate fields of "workspace_roles" */
export type WorkspaceRolesAggregateFields = {
  __typename?: 'WorkspaceRolesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<WorkspaceRolesMaxFields>;
  min?: Maybe<WorkspaceRolesMinFields>;
};


/** aggregate fields of "workspace_roles" */
export type WorkspaceRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_roles" */
export type WorkspaceRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Workspace_Roles_Max_Order_By>;
  min?: InputMaybe<Workspace_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_roles" */
export type WorkspaceRolesArrRelInsertInput = {
  data: Array<WorkspaceRolesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<WorkspaceRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "workspace_roles". All fields are combined with a logical 'AND'. */
export type WorkspaceRolesBoolExp = {
  _and?: InputMaybe<Array<WorkspaceRolesBoolExp>>;
  _not?: InputMaybe<WorkspaceRolesBoolExp>;
  _or?: InputMaybe<Array<WorkspaceRolesBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
  workspace?: InputMaybe<WorkspacesBoolExp>;
  workspaceId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "workspace_roles" */
export enum WorkspaceRolesConstraint {
  /** unique or primary key constraint on columns "workspace_id", "user_id" */
  WorkspaceRolesPkey = 'workspace_roles_pkey'
}

/** input type for inserting data into table "workspace_roles" */
export type WorkspaceRolesInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<WorkspacesObjRelInsertInput>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkspaceRolesMaxFields = {
  __typename?: 'WorkspaceRolesMaxFields';
  authorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type WorkspaceRolesMinFields = {
  __typename?: 'WorkspaceRolesMinFields';
  authorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "workspace_roles" */
export type WorkspaceRolesMutationResponse = {
  __typename?: 'WorkspaceRolesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceRoles>;
};

/** on_conflict condition type for table "workspace_roles" */
export type WorkspaceRolesOnConflict = {
  constraint: WorkspaceRolesConstraint;
  update_columns?: Array<WorkspaceRolesUpdateColumn>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};

/** Ordering options when selecting data from "workspace_roles". */
export type WorkspaceRolesOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
  workspace?: InputMaybe<WorkspacesOrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: workspace_roles */
export type WorkspaceRolesPkColumnsInput = {
  userId: Scalars['uuid'];
  workspaceId: Scalars['uuid'];
};

/** select columns of table "workspace_roles" */
export enum WorkspaceRolesSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** input type for updating data in table "workspace_roles" */
export type WorkspaceRolesSetInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_roles" */
export enum WorkspaceRolesUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type WorkspaceRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspaceRolesSetInput>;
  where: WorkspaceRolesBoolExp;
};

/** columns and relationships of "workspaces" */
export type Workspaces = {
  __typename?: 'Workspaces';
  /** An object relationship */
  author: Users;
  authorId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  requests: Array<Requests>;
  /** An aggregate relationship */
  requestsAggregate: RequestsAggregate;
  updatedAt: Scalars['timestamptz'];
  /** An aggregate relationship */
  workspaceRolesAggregate: WorkspaceRolesAggregate;
  /** An array relationship */
  workspace_roles: Array<WorkspaceRoles>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspace_RolesArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};

/** aggregated selection of "workspaces" */
export type WorkspacesAggregate = {
  __typename?: 'WorkspacesAggregate';
  aggregate?: Maybe<WorkspacesAggregateFields>;
  nodes: Array<Workspaces>;
};

/** aggregate fields of "workspaces" */
export type WorkspacesAggregateFields = {
  __typename?: 'WorkspacesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<WorkspacesMaxFields>;
  min?: Maybe<WorkspacesMinFields>;
};


/** aggregate fields of "workspaces" */
export type WorkspacesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspacesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "workspaces". All fields are combined with a logical 'AND'. */
export type WorkspacesBoolExp = {
  _and?: InputMaybe<Array<WorkspacesBoolExp>>;
  _not?: InputMaybe<WorkspacesBoolExp>;
  _or?: InputMaybe<Array<WorkspacesBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  requests?: InputMaybe<RequestsBoolExp>;
  requests_aggregate?: InputMaybe<Requests_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  workspace_roles?: InputMaybe<WorkspaceRolesBoolExp>;
  workspace_roles_aggregate?: InputMaybe<Workspace_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workspaces" */
export enum WorkspacesConstraint {
  /** unique or primary key constraint on columns "id" */
  WorkspacesPkey = 'workspaces_pkey'
}

/** input type for inserting data into table "workspaces" */
export type WorkspacesInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  requests?: InputMaybe<RequestsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspace_roles?: InputMaybe<WorkspaceRolesArrRelInsertInput>;
};

/** aggregate max on columns */
export type WorkspacesMaxFields = {
  __typename?: 'WorkspacesMaxFields';
  authorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type WorkspacesMinFields = {
  __typename?: 'WorkspacesMinFields';
  authorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "workspaces" */
export type WorkspacesMutationResponse = {
  __typename?: 'WorkspacesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workspaces>;
};

/** input type for inserting object relation for remote table "workspaces" */
export type WorkspacesObjRelInsertInput = {
  data: WorkspacesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<WorkspacesOnConflict>;
};

/** on_conflict condition type for table "workspaces" */
export type WorkspacesOnConflict = {
  constraint: WorkspacesConstraint;
  update_columns?: Array<WorkspacesUpdateColumn>;
  where?: InputMaybe<WorkspacesBoolExp>;
};

/** Ordering options when selecting data from "workspaces". */
export type WorkspacesOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  requestsAggregate?: InputMaybe<RequestsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  workspace_rolesAggregate?: InputMaybe<WorkspaceRolesAggregateOrderBy>;
};

/** primary key columns input for table: workspaces */
export type WorkspacesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "workspaces" */
export enum WorkspacesSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "workspaces" */
export type WorkspacesSetInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "workspaces" */
export enum WorkspacesUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type WorkspacesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspacesSetInput>;
  where: WorkspacesBoolExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "requests" */
  deleteRequests?: Maybe<RequestsMutationResponse>;
  /** delete single row from the table: "requests" */
  deleteRequestsByPk?: Maybe<Requests>;
  /** delete data from the table: "traces" */
  deleteTraces?: Maybe<TracesMutationResponse>;
  /** delete single row from the table: "traces" */
  deleteTracesByPk?: Maybe<Traces>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** delete data from the table: "workspace_roles" */
  deleteWorkspaceRoles?: Maybe<WorkspaceRolesMutationResponse>;
  /** delete single row from the table: "workspace_roles" */
  deleteWorkspaceRolesByPk?: Maybe<WorkspaceRoles>;
  /** delete data from the table: "workspaces" */
  deleteWorkspaces?: Maybe<WorkspacesMutationResponse>;
  /** delete single row from the table: "workspaces" */
  deleteWorkspacesByPk?: Maybe<Workspaces>;
  /** insert data into the table: "requests" */
  insertRequests?: Maybe<RequestsMutationResponse>;
  /** insert a single row into the table: "requests" */
  insertRequestsOne?: Maybe<Requests>;
  /** insert data into the table: "traces" */
  insertTraces?: Maybe<TracesMutationResponse>;
  /** insert a single row into the table: "traces" */
  insertTracesOne?: Maybe<Traces>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** insert data into the table: "workspace_roles" */
  insertWorkspaceRoles?: Maybe<WorkspaceRolesMutationResponse>;
  /** insert a single row into the table: "workspace_roles" */
  insertWorkspaceRolesOne?: Maybe<WorkspaceRoles>;
  /** insert data into the table: "workspaces" */
  insertWorkspaces?: Maybe<WorkspacesMutationResponse>;
  /** insert a single row into the table: "workspaces" */
  insertWorkspacesOne?: Maybe<Workspaces>;
  /** update data of the table: "requests" */
  updateRequests?: Maybe<RequestsMutationResponse>;
  /** update single row of the table: "requests" */
  updateRequestsByPk?: Maybe<Requests>;
  /** update multiples rows of table: "requests" */
  updateRequestsMany?: Maybe<Array<Maybe<RequestsMutationResponse>>>;
  /** update data of the table: "traces" */
  updateTraces?: Maybe<TracesMutationResponse>;
  /** update single row of the table: "traces" */
  updateTracesByPk?: Maybe<Traces>;
  /** update multiples rows of table: "traces" */
  updateTracesMany?: Maybe<Array<Maybe<TracesMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "workspace_roles" */
  updateWorkspaceRoles?: Maybe<WorkspaceRolesMutationResponse>;
  /** update single row of the table: "workspace_roles" */
  updateWorkspaceRolesByPk?: Maybe<WorkspaceRoles>;
  /** update multiples rows of table: "workspace_roles" */
  updateWorkspaceRolesMany?: Maybe<Array<Maybe<WorkspaceRolesMutationResponse>>>;
  /** update data of the table: "workspaces" */
  updateWorkspaces?: Maybe<WorkspacesMutationResponse>;
  /** update single row of the table: "workspaces" */
  updateWorkspacesByPk?: Maybe<Workspaces>;
  /** update multiples rows of table: "workspaces" */
  updateWorkspacesMany?: Maybe<Array<Maybe<WorkspacesMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteRequestsArgs = {
  where: RequestsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRequestsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTracesArgs = {
  where: TracesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTracesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceRolesArgs = {
  where: WorkspaceRolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceRolesByPkArgs = {
  userId: Scalars['uuid'];
  workspaceId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspacesArgs = {
  where: WorkspacesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspacesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertRequestsArgs = {
  objects: Array<RequestsInsertInput>;
  onConflict?: InputMaybe<RequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRequestsOneArgs = {
  object: RequestsInsertInput;
  onConflict?: InputMaybe<RequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTracesArgs = {
  objects: Array<TracesInsertInput>;
  onConflict?: InputMaybe<TracesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTracesOneArgs = {
  object: TracesInsertInput;
  onConflict?: InputMaybe<TracesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceRolesArgs = {
  objects: Array<WorkspaceRolesInsertInput>;
  onConflict?: InputMaybe<WorkspaceRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceRolesOneArgs = {
  object: WorkspaceRolesInsertInput;
  onConflict?: InputMaybe<WorkspaceRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspacesArgs = {
  objects: Array<WorkspacesInsertInput>;
  onConflict?: InputMaybe<WorkspacesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspacesOneArgs = {
  object: WorkspacesInsertInput;
  onConflict?: InputMaybe<WorkspacesOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateRequestsArgs = {
  _set?: InputMaybe<RequestsSetInput>;
  where: RequestsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRequestsByPkArgs = {
  _set?: InputMaybe<RequestsSetInput>;
  pk_columns: RequestsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRequestsManyArgs = {
  updates: Array<RequestsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTracesArgs = {
  _append?: InputMaybe<TracesAppendInput>;
  _deleteAtPath?: InputMaybe<TracesDeleteAtPathInput>;
  _deleteElem?: InputMaybe<TracesDeleteElemInput>;
  _deleteKey?: InputMaybe<TracesDeleteKeyInput>;
  _prepend?: InputMaybe<TracesPrependInput>;
  _set?: InputMaybe<TracesSetInput>;
  where: TracesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTracesByPkArgs = {
  _append?: InputMaybe<TracesAppendInput>;
  _deleteAtPath?: InputMaybe<TracesDeleteAtPathInput>;
  _deleteElem?: InputMaybe<TracesDeleteElemInput>;
  _deleteKey?: InputMaybe<TracesDeleteKeyInput>;
  _prepend?: InputMaybe<TracesPrependInput>;
  _set?: InputMaybe<TracesSetInput>;
  pk_columns: TracesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTracesManyArgs = {
  updates: Array<TracesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceRolesArgs = {
  _set?: InputMaybe<WorkspaceRolesSetInput>;
  where: WorkspaceRolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceRolesByPkArgs = {
  _set?: InputMaybe<WorkspaceRolesSetInput>;
  pk_columns: WorkspaceRolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceRolesManyArgs = {
  updates: Array<WorkspaceRolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateWorkspacesArgs = {
  _set?: InputMaybe<WorkspacesSetInput>;
  where: WorkspacesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspacesByPkArgs = {
  _set?: InputMaybe<WorkspacesSetInput>;
  pk_columns: WorkspacesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateWorkspacesManyArgs = {
  updates: Array<WorkspacesUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  requests: Array<Requests>;
  /** An aggregate relationship */
  requestsAggregate: RequestsAggregate;
  /** fetch data from the table: "requests" using primary key columns */
  requestsByPk?: Maybe<Requests>;
  /** An array relationship */
  traces: Array<Traces>;
  /** An aggregate relationship */
  tracesAggregate: TracesAggregate;
  /** fetch data from the table: "traces" using primary key columns */
  tracesByPk?: Maybe<Traces>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table: "workspace_roles" */
  workspaceRoles: Array<WorkspaceRoles>;
  /** An aggregate relationship */
  workspaceRolesAggregate: WorkspaceRolesAggregate;
  /** fetch data from the table: "workspace_roles" using primary key columns */
  workspaceRolesByPk?: Maybe<WorkspaceRoles>;
  /** fetch data from the table: "workspaces" */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: WorkspacesAggregate;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspacesByPk?: Maybe<Workspaces>;
};


export type Query_RootRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


export type Query_RootRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


export type Query_RootRequestsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTracesArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};


export type Query_RootTracesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};


export type Query_RootTracesByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceRolesArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


export type Query_RootWorkspaceRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


export type Query_RootWorkspaceRolesByPkArgs = {
  userId: Scalars['uuid'];
  workspaceId: Scalars['uuid'];
};


export type Query_RootWorkspacesArgs = {
  distinctOn?: InputMaybe<Array<WorkspacesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspacesOrderBy>>;
  where?: InputMaybe<WorkspacesBoolExp>;
};


export type Query_RootWorkspacesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspacesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspacesOrderBy>>;
  where?: InputMaybe<WorkspacesBoolExp>;
};


export type Query_RootWorkspacesByPkArgs = {
  id: Scalars['uuid'];
};

export type Requests_Aggregate_Bool_Exp = {
  count?: InputMaybe<Requests_Aggregate_Bool_Exp_Count>;
};

export type Requests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<RequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<RequestsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "requests" */
export type Requests_Max_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  bodyLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  headers?: InputMaybe<OrderBy>;
  headersLang?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  /** Json schema */
  schema?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "requests" */
export type Requests_Min_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  bodyLang?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  headers?: InputMaybe<OrderBy>;
  headersLang?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  /** Json schema */
  schema?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "requests" */
export type Requests_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Requests_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Requests_StreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  bodyLang?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['String']>;
  headersLang?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  method?: InputMaybe<Scalars['String']>;
  /** Json schema */
  schema?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  requests: Array<Requests>;
  /** An aggregate relationship */
  requestsAggregate: RequestsAggregate;
  /** fetch data from the table: "requests" using primary key columns */
  requestsByPk?: Maybe<Requests>;
  /** fetch data from the table in a streaming manner: "requests" */
  requestsStream: Array<Requests>;
  /** An array relationship */
  traces: Array<Traces>;
  /** An aggregate relationship */
  tracesAggregate: TracesAggregate;
  /** fetch data from the table: "traces" using primary key columns */
  tracesByPk?: Maybe<Traces>;
  /** fetch data from the table in a streaming manner: "traces" */
  tracesStream: Array<Traces>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
  /** fetch data from the table: "workspace_roles" */
  workspaceRoles: Array<WorkspaceRoles>;
  /** An aggregate relationship */
  workspaceRolesAggregate: WorkspaceRolesAggregate;
  /** fetch data from the table: "workspace_roles" using primary key columns */
  workspaceRolesByPk?: Maybe<WorkspaceRoles>;
  /** fetch data from the table in a streaming manner: "workspace_roles" */
  workspaceRolesStream: Array<WorkspaceRoles>;
  /** fetch data from the table: "workspaces" */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: WorkspacesAggregate;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspacesByPk?: Maybe<Workspaces>;
  /** fetch data from the table in a streaming manner: "workspaces" */
  workspacesStream: Array<Workspaces>;
};


export type Subscription_RootRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


export type Subscription_RootRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RequestsOrderBy>>;
  where?: InputMaybe<RequestsBoolExp>;
};


export type Subscription_RootRequestsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRequestsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Requests_StreamCursorInput>>;
  where?: InputMaybe<RequestsBoolExp>;
};


export type Subscription_RootTracesArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};


export type Subscription_RootTracesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TracesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracesOrderBy>>;
  where?: InputMaybe<TracesBoolExp>;
};


export type Subscription_RootTracesByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTracesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Traces_StreamCursorInput>>;
  where?: InputMaybe<TracesBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Users_StreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootWorkspaceRolesArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


export type Subscription_RootWorkspaceRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceRolesOrderBy>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


export type Subscription_RootWorkspaceRolesByPkArgs = {
  userId: Scalars['uuid'];
  workspaceId: Scalars['uuid'];
};


export type Subscription_RootWorkspaceRolesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Workspace_Roles_StreamCursorInput>>;
  where?: InputMaybe<WorkspaceRolesBoolExp>;
};


export type Subscription_RootWorkspacesArgs = {
  distinctOn?: InputMaybe<Array<WorkspacesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspacesOrderBy>>;
  where?: InputMaybe<WorkspacesBoolExp>;
};


export type Subscription_RootWorkspacesAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspacesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspacesOrderBy>>;
  where?: InputMaybe<WorkspacesBoolExp>;
};


export type Subscription_RootWorkspacesByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspacesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Workspaces_StreamCursorInput>>;
  where?: InputMaybe<WorkspacesBoolExp>;
};

export type Traces_Aggregate_Bool_Exp = {
  count?: InputMaybe<Traces_Aggregate_Bool_Exp_Count>;
};

export type Traces_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TracesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TracesBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "traces" */
export type Traces_Max_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "traces" */
export type Traces_Min_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "traces" */
export type Traces_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Traces_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Traces_StreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  request?: InputMaybe<Scalars['jsonb']>;
  requestId?: InputMaybe<Scalars['uuid']>;
  response?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Workspace_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workspace_Roles_Aggregate_Bool_Exp_Count>;
};

export type Workspace_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkspaceRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceRolesBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "workspace_roles" */
export type Workspace_Roles_Max_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "workspace_roles" */
export type Workspace_Roles_Min_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  workspaceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "workspace_roles" */
export type Workspace_Roles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Workspace_Roles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspace_Roles_StreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspaces" */
export type Workspaces_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Workspaces_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspaces_StreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type UserFieldsFragment = { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null };

export type GetUsersByUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersByUsernameQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  updates?: InputMaybe<UsersSetInput>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type InsertUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const GetUsersByUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersByUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersByUsernameQuery, GetUsersByUsernameQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersSetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const InsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"insertUsersOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<InsertUserMutation, InsertUserMutationVariables>;