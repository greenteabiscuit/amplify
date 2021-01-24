/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  completed: boolean,
  timestamp: number,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  completed?: boolean | null,
  timestamp?: number | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  timestamp: number,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  timestamp?: number | null,
};

export type DeleteAlbumInput = {
  id?: string | null,
};

export type CreatePhotoInput = {
  id?: string | null,
  owner?: string | null,
  albumId: string,
  bucket: string,
  fullsize: PhotoS3InfoInput,
  thumbnail: PhotoS3InfoInput,
};

export type PhotoS3InfoInput = {
  key: string,
  width: number,
  height: number,
};

export type ModelPhotoConditionInput = {
  albumId?: ModelIDInput | null,
  bucket?: ModelStringInput | null,
  and?: Array< ModelPhotoConditionInput | null > | null,
  or?: Array< ModelPhotoConditionInput | null > | null,
  not?: ModelPhotoConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePhotoInput = {
  id: string,
  albumId?: string | null,
  bucket?: string | null,
  fullsize?: PhotoS3InfoInput | null,
  thumbnail?: PhotoS3InfoInput | null,
};

export type DeletePhotoInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelPhotoFilterInput = {
  id?: ModelIDInput | null,
  albumId?: ModelIDInput | null,
  bucket?: ModelStringInput | null,
  and?: Array< ModelPhotoFilterInput | null > | null,
  or?: Array< ModelPhotoFilterInput | null > | null,
  not?: ModelPhotoFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePhotoMutationVariables = {
  input: CreatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type CreatePhotoMutation = {
  createPhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdatePhotoMutationVariables = {
  input: UpdatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type UpdatePhotoMutation = {
  updatePhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeletePhotoMutationVariables = {
  input: DeletePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type DeletePhotoMutation = {
  deletePhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetPhotoQueryVariables = {
  id: string,
};

export type GetPhotoQuery = {
  getPhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListPhotosQueryVariables = {
  filter?: ModelPhotoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotosQuery = {
  listPhotos:  {
    __typename: "ModelPhotoConnection",
    items:  Array< {
      __typename: "Photo",
      id: string,
      albumId: string,
      bucket: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListPhotosByAlbumQueryVariables = {
  albumId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPhotoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotosByAlbumQuery = {
  listPhotosByAlbum:  {
    __typename: "ModelPhotoConnection",
    items:  Array< {
      __typename: "Photo",
      id: string,
      albumId: string,
      bucket: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum:  {
    __typename: "Album",
    id: string,
    name: string,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePhotoSubscription = {
  onCreatePhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdatePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePhotoSubscription = {
  onUpdatePhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeletePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePhotoSubscription = {
  onDeletePhoto:  {
    __typename: "Photo",
    id: string,
    albumId: string,
    bucket: string,
    fullsize:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "PhotoS3Info",
      key: string,
      width: number,
      height: number,
    },
    createdAt: string,
    updatedAt: string,
    album:  {
      __typename: "Album",
      id: string,
      name: string,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};
