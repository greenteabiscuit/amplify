/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
