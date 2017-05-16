// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_note_pb = require('../../../dt/apigw/v1/note_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dt_apigw_v1_CreateNoteRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.CreateNoteRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateNoteRequest(buffer_arg) {
  return dt_apigw_v1_note_pb.CreateNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_DeleteNoteRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.DeleteNoteRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DeleteNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DeleteNoteRequest(buffer_arg) {
  return dt_apigw_v1_note_pb.DeleteNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_EditNoteRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.EditNoteRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.EditNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_EditNoteRequest(buffer_arg) {
  return dt_apigw_v1_note_pb.EditNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetNoteRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.GetNoteRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetNoteRequest(buffer_arg) {
  return dt_apigw_v1_note_pb.GetNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListNotesRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.ListNotesRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListNotesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListNotesRequest(buffer_arg) {
  return dt_apigw_v1_note_pb.ListNotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListNotesResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.ListNotesResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListNotesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListNotesResponse(buffer_arg) {
  return dt_apigw_v1_note_pb.ListNotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_Note(arg) {
  if (!(arg instanceof dt_apigw_v1_note_pb.Note)) {
    throw new Error('Expected argument of type dt.apigw.v1.Note');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_Note(buffer_arg) {
  return dt_apigw_v1_note_pb.Note.deserializeBinary(new Uint8Array(buffer_arg));
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


// Note service provide comment functionality for Things.
var NoteServiceService = exports.NoteServiceService = {
  listNotes: {
    path: '/dt.apigw.v1.NoteService/ListNotes',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_note_pb.ListNotesRequest,
    responseType: dt_apigw_v1_note_pb.ListNotesResponse,
    requestSerialize: serialize_dt_apigw_v1_ListNotesRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListNotesRequest,
    responseSerialize: serialize_dt_apigw_v1_ListNotesResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListNotesResponse,
  },
  createNote: {
    path: '/dt.apigw.v1.NoteService/CreateNote',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_note_pb.CreateNoteRequest,
    responseType: dt_apigw_v1_note_pb.Note,
    requestSerialize: serialize_dt_apigw_v1_CreateNoteRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateNoteRequest,
    responseSerialize: serialize_dt_apigw_v1_Note,
    responseDeserialize: deserialize_dt_apigw_v1_Note,
  },
  editNote: {
    path: '/dt.apigw.v1.NoteService/EditNote',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_note_pb.EditNoteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_EditNoteRequest,
    requestDeserialize: deserialize_dt_apigw_v1_EditNoteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getNote: {
    path: '/dt.apigw.v1.NoteService/GetNote',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_note_pb.GetNoteRequest,
    responseType: dt_apigw_v1_note_pb.Note,
    requestSerialize: serialize_dt_apigw_v1_GetNoteRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetNoteRequest,
    responseSerialize: serialize_dt_apigw_v1_Note,
    responseDeserialize: deserialize_dt_apigw_v1_Note,
  },
  deleteNote: {
    path: '/dt.apigw.v1.NoteService/DeleteNote',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_note_pb.DeleteNoteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DeleteNoteRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DeleteNoteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.NoteServiceClient = grpc.makeGenericClientConstructor(NoteServiceService);
