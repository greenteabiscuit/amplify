/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      completed
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($owner: String) {
    onCreatePhoto(owner: $owner) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($owner: String) {
    onUpdatePhoto(owner: $owner) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($owner: String) {
    onDeletePhoto(owner: $owner) {
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
