// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_notification_pb = require('../../../dt/apigw/v1/notification_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_dt_apigw_v1_DismissNotificationRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_notification_pb.DismissNotificationRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DismissNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DismissNotificationRequest(buffer_arg) {
  return dt_apigw_v1_notification_pb.DismissNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetNotificationRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_notification_pb.GetNotificationRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetNotificationRequest(buffer_arg) {
  return dt_apigw_v1_notification_pb.GetNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListNotificationsRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_notification_pb.ListNotificationsRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListNotificationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListNotificationsRequest(buffer_arg) {
  return dt_apigw_v1_notification_pb.ListNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListNotificationsResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_notification_pb.ListNotificationsResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListNotificationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListNotificationsResponse(buffer_arg) {
  return dt_apigw_v1_notification_pb.ListNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_Notification(arg) {
  if (!(arg instanceof dt_apigw_v1_notification_pb.Notification)) {
    throw new Error('Expected argument of type dt.apigw.v1.Notification');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_Notification(buffer_arg) {
  return dt_apigw_v1_notification_pb.Notification.deserializeBinary(new Uint8Array(buffer_arg));
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


var NotificationServiceService = exports.NotificationServiceService = {
  listNotifications: {
    path: '/dt.apigw.v1.NotificationService/ListNotifications',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_notification_pb.ListNotificationsRequest,
    responseType: dt_apigw_v1_notification_pb.ListNotificationsResponse,
    requestSerialize: serialize_dt_apigw_v1_ListNotificationsRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListNotificationsRequest,
    responseSerialize: serialize_dt_apigw_v1_ListNotificationsResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListNotificationsResponse,
  },
  getNotification: {
    path: '/dt.apigw.v1.NotificationService/GetNotification',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_notification_pb.GetNotificationRequest,
    responseType: dt_apigw_v1_notification_pb.Notification,
    requestSerialize: serialize_dt_apigw_v1_GetNotificationRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetNotificationRequest,
    responseSerialize: serialize_dt_apigw_v1_Notification,
    responseDeserialize: deserialize_dt_apigw_v1_Notification,
  },
  dismissNotification: {
    path: '/dt.apigw.v1.NotificationService/DismissNotification',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_notification_pb.DismissNotificationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DismissNotificationRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DismissNotificationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService);
