/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        completed
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        timestamp
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      timestamp
      createdAt
      updatedAt
      owner
      photos {
        nextToken
      }
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      albumId
      bucket
      fullsize {
        key
        width
        height
        labels
      }
      thumbnail {
        key
        width
        height
        labels
      }
      labels
      createdAt
      updatedAt
      album {
        id
        name
        timestamp
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        albumId
        bucket
        labels
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listPhotosByAlbum = /* GraphQL */ `
  query ListPhotosByAlbum(
    $albumId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotosByAlbum(
      albumId: $albumId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        albumId
        bucket
        labels
        thumbnail {
          key
          width
          height
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchPhotos = /* GraphQL */ `
  query SearchPhotos(
    $filter: SearchablePhotoFilterInput
    $sort: SearchablePhotoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPhotos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        albumId
        bucket
        labels
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
