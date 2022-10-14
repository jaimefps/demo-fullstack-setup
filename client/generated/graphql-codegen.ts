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

export type CreateTaskMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: boolean | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  complete?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: boolean | null };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask?: boolean | null };


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
export const CreateTaskDocument = gql`
    mutation CreateTask($title: String!) {
  createTask(title: $title)
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: Int!, $title: String, $complete: Boolean) {
  updateTask(id: $id, title: $title, complete: $complete)
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      complete: // value for 'complete'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: Int!) {
  deleteTask(id: $id)
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;