/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type HomeQuery = {|
  posts:  Array< {|
    id: string,
    title: string,
    description: string,
    createdAt: string,
    user: {|
      name: string,
    |},
  |} >,
|};

export type PostQueryVariables = {|
  id: string,
|};

export type PostQuery = {|
  post: {|
    id: string,
    title: string,
    content: string,
    createdAt: string,
    user: {|
      name: string,
    |},
  |},
|};