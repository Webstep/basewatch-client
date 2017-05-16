// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_label_pb = require('../../../dt/apigw/v1/label_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dt_apigw_v1_CreateLabelRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.CreateLabelRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateLabelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateLabelRequest(buffer_arg) {
  return dt_apigw_v1_label_pb.CreateLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_DeleteLabelRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.DeleteLabelRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DeleteLabelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DeleteLabelRequest(buffer_arg) {
  return dt_apigw_v1_label_pb.DeleteLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetLabelRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.GetLabelRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetLabelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetLabelRequest(buffer_arg) {
  return dt_apigw_v1_label_pb.GetLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_Label(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.Label)) {
    throw new Error('Expected argument of type dt.apigw.v1.Label');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_Label(buffer_arg) {
  return dt_apigw_v1_label_pb.Label.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListLabelsRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.ListLabelsRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListLabelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListLabelsRequest(buffer_arg) {
  return dt_apigw_v1_label_pb.ListLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListLabelsResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_label_pb.ListLabelsResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListLabelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListLabelsResponse(buffer_arg) {
  return dt_apigw_v1_label_pb.ListLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var LabelServiceService = exports.LabelServiceService = {
  listLabels: {
    path: '/dt.apigw.v1.LabelService/ListLabels',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_label_pb.ListLabelsRequest,
    responseType: dt_apigw_v1_label_pb.ListLabelsResponse,
    requestSerialize: serialize_dt_apigw_v1_ListLabelsRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListLabelsRequest,
    responseSerialize: serialize_dt_apigw_v1_ListLabelsResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListLabelsResponse,
  },
  createLabel: {
    path: '/dt.apigw.v1.LabelService/CreateLabel',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_label_pb.CreateLabelRequest,
    responseType: dt_apigw_v1_label_pb.Label,
    requestSerialize: serialize_dt_apigw_v1_CreateLabelRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateLabelRequest,
    responseSerialize: serialize_dt_apigw_v1_Label,
    responseDeserialize: deserialize_dt_apigw_v1_Label,
  },
  getLabel: {
    path: '/dt.apigw.v1.LabelService/GetLabel',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_label_pb.GetLabelRequest,
    responseType: dt_apigw_v1_label_pb.Label,
    requestSerialize: serialize_dt_apigw_v1_GetLabelRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetLabelRequest,
    responseSerialize: serialize_dt_apigw_v1_Label,
    responseDeserialize: deserialize_dt_apigw_v1_Label,
  },
  editLabel: {
    path: '/dt.apigw.v1.LabelService/EditLabel',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_label_pb.Label,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_Label,
    requestDeserialize: deserialize_dt_apigw_v1_Label,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteLabel: {
    path: '/dt.apigw.v1.LabelService/DeleteLabel',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_label_pb.DeleteLabelRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DeleteLabelRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DeleteLabelRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.LabelServiceClient = grpc.makeGenericClientConstructor(LabelServiceService);
