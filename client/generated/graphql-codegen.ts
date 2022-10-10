/*
  IMPORTANT: This file is auto-generated, do not edit directly!
*/
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type HelloWorld = {
  __typename?: 'HelloWorld';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a task item */
  createTask?: Maybe<Scalars['Boolean']>;
  /** Delete a task item */
  deleteTask?: Maybe<Scalars['Boolean']>;
  /** Update a task item */
  updateTask?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTaskArgs = {
  title: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateTaskArgs = {
  complete?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  helloWorld?: Maybe<HelloWorld>;
  /** Get task items */
  tasks?: Maybe<Array<Maybe<Task>>>;
};


export type QueryTasksArgs = {
  complete?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** A task that needs to be done */
export type Task = {
  __typename?: 'Task';
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskContainerQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskContainerQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id?: number | null, title?: string | null, complete?: boolean | null } | null> | null };


export const TaskContainerDocument = gql`
    query TaskContainer {
  tasks {
    id
    title
    complete
  }
}
    `;

/**
 * __useTaskContainerQuery__
 *
 * To run a query within a React component, call `useTaskContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskContainerQuery({
 *   variables: {
 *   },
 * });
 */
export function useTaskContainerQuery(baseOptions?: Apollo.QueryHookOptions<TaskContainerQuery, TaskContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskContainerQuery, TaskContainerQueryVariables>(TaskContainerDocument, options);
      }
export function useTaskContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskContainerQuery, TaskContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskContainerQuery, TaskContainerQueryVariables>(TaskContainerDocument, options);
        }
export type TaskContainerQueryHookResult = ReturnType<typeof useTaskContainerQuery>;
export type TaskContainerLazyQueryHookResult = ReturnType<typeof useTaskContainerLazyQuery>;
export type TaskContainerQueryResult = Apollo.QueryResult<TaskContainerQuery, TaskContainerQueryVariables>;