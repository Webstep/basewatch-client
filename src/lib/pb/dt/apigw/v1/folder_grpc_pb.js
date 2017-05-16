// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_folder_pb = require('../../../dt/apigw/v1/folder_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dt_apigw_v1_CreateFolderRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.CreateFolderRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateFolderRequest(buffer_arg) {
  return dt_apigw_v1_folder_pb.CreateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_DeleteFolderRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.DeleteFolderRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DeleteFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DeleteFolderRequest(buffer_arg) {
  return dt_apigw_v1_folder_pb.DeleteFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_Folder(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.Folder)) {
    throw new Error('Expected argument of type dt.apigw.v1.Folder');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_Folder(buffer_arg) {
  return dt_apigw_v1_folder_pb.Folder.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetFolderRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.GetFolderRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetFolderRequest(buffer_arg) {
  return dt_apigw_v1_folder_pb.GetFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListFoldersRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.ListFoldersRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListFoldersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListFoldersRequest(buffer_arg) {
  return dt_apigw_v1_folder_pb.ListFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListFoldersResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.ListFoldersResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListFoldersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListFoldersResponse(buffer_arg) {
  return dt_apigw_v1_folder_pb.ListFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_MoveFolderRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_folder_pb.MoveFolderRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.MoveFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_MoveFolderRequest(buffer_arg) {
  return dt_apigw_v1_folder_pb.MoveFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FolderServiceService = exports.FolderServiceService = {
  // ListFolders provides a list of the available folders.
  listFolders: {
    path: '/dt.apigw.v1.FolderService/ListFolders',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.ListFoldersRequest,
    responseType: dt_apigw_v1_folder_pb.ListFoldersResponse,
    requestSerialize: serialize_dt_apigw_v1_ListFoldersRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListFoldersRequest,
    responseSerialize: serialize_dt_apigw_v1_ListFoldersResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListFoldersResponse,
  },
  // CreateFolder creates new Folders.
  createFolder: {
    path: '/dt.apigw.v1.FolderService/CreateFolder',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.CreateFolderRequest,
    responseType: dt_apigw_v1_folder_pb.Folder,
    requestSerialize: serialize_dt_apigw_v1_CreateFolderRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateFolderRequest,
    responseSerialize: serialize_dt_apigw_v1_Folder,
    responseDeserialize: deserialize_dt_apigw_v1_Folder,
  },
  // GetFolder fetches a Folder.
  getFolder: {
    path: '/dt.apigw.v1.FolderService/GetFolder',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.GetFolderRequest,
    responseType: dt_apigw_v1_folder_pb.Folder,
    requestSerialize: serialize_dt_apigw_v1_GetFolderRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetFolderRequest,
    responseSerialize: serialize_dt_apigw_v1_Folder,
    responseDeserialize: deserialize_dt_apigw_v1_Folder,
  },
  // EditFolder updates the name and/or description of the Folder.
  editFolder: {
    path: '/dt.apigw.v1.FolderService/EditFolder',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.Folder,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_Folder,
    requestDeserialize: deserialize_dt_apigw_v1_Folder,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteFolder deletes the specified Folder.
  deleteFolder: {
    path: '/dt.apigw.v1.FolderService/DeleteFolder',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.DeleteFolderRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DeleteFolderRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DeleteFolderRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // MoveFolder moves the specified Folder.
  moveFolder: {
    path: '/dt.apigw.v1.FolderService/MoveFolder',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_folder_pb.MoveFolderRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_MoveFolderRequest,
    requestDeserialize: deserialize_dt_apigw_v1_MoveFolderRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FolderServiceClient = grpc.makeGenericClientConstructor(FolderServiceService);
