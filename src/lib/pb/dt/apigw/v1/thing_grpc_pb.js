// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_thing_pb = require('../../../dt/apigw/v1/thing_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var dt_apigw_v1_common_pb = require('../../../dt/apigw/v1/common_pb.js');
var dt_apigw_v1_folder_pb = require('../../../dt/apigw/v1/folder_pb.js');
var dt_apigw_v1_label_pb = require('../../../dt/apigw/v1/label_pb.js');
var dt_apigw_v1_notification_pb = require('../../../dt/apigw/v1/notification_pb.js');
var dt_apigw_v1_events_thing_pb = require('../../../dt/apigw/v1/events/thing_pb.js');

function serialize_dt_apigw_v1_BulkEditThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.BulkEditThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.BulkEditThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_BulkEditThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.BulkEditThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_BulkEditThingResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.BulkEditThingResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.BulkEditThingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_BulkEditThingResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.BulkEditThingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_CreateThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.CreateThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.CreateThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_CreateThingResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.CreateThingResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateThingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateThingResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.CreateThingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_EditThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.EditThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.EditThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_EditThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.EditThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.GetThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.GetThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListThingsRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ListThingsRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListThingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListThingsRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.ListThingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListThingsResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ListThingsResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListThingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListThingsResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.ListThingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_StarThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.StarThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.StarThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_StarThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.StarThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_Thing(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.Thing)) {
    throw new Error('Expected argument of type dt.apigw.v1.Thing');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_Thing(buffer_arg) {
  return dt_apigw_v1_thing_pb.Thing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ThingStateAggregateRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ThingStateAggregateRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ThingStateAggregateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ThingStateAggregateRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.ThingStateAggregateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ThingStateAggregateResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ThingStateAggregateResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ThingStateAggregateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ThingStateAggregateResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.ThingStateAggregateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ThingStateQueryRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ThingStateQueryRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ThingStateQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ThingStateQueryRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.ThingStateQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ThingStateQueryResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.ThingStateQueryResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ThingStateQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ThingStateQueryResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.ThingStateQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_UnstarThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.UnstarThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.UnstarThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_UnstarThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.UnstarThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_WatchRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.WatchRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.WatchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_WatchRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.WatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_WatchResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.WatchResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.WatchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_WatchResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.WatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_WatchThingRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.WatchThingRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.WatchThingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_WatchThingRequest(buffer_arg) {
  return dt_apigw_v1_thing_pb.WatchThingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_WatchThingResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_thing_pb.WatchThingResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.WatchThingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_WatchThingResponse(buffer_arg) {
  return dt_apigw_v1_thing_pb.WatchThingResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var ThingServiceService = exports.ThingServiceService = {
  // CreateThing creates a new thing based on an existing device ID. Returns the
  // newly created thing ID.
  createThing: {
    path: '/dt.apigw.v1.ThingService/CreateThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.CreateThingRequest,
    responseType: dt_apigw_v1_thing_pb.CreateThingResponse,
    requestSerialize: serialize_dt_apigw_v1_CreateThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateThingRequest,
    responseSerialize: serialize_dt_apigw_v1_CreateThingResponse,
    responseDeserialize: deserialize_dt_apigw_v1_CreateThingResponse,
  },
  // ListThings provides a list of available `Thing` objects.
  // Takes an optional `query` to filter the returned items.
  listThings: {
    path: '/dt.apigw.v1.ThingService/ListThings',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.ListThingsRequest,
    responseType: dt_apigw_v1_thing_pb.ListThingsResponse,
    requestSerialize: serialize_dt_apigw_v1_ListThingsRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListThingsRequest,
    responseSerialize: serialize_dt_apigw_v1_ListThingsResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListThingsResponse,
  },
  getThing: {
    path: '/dt.apigw.v1.ThingService/GetThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.GetThingRequest,
    responseType: dt_apigw_v1_thing_pb.Thing,
    requestSerialize: serialize_dt_apigw_v1_GetThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetThingRequest,
    responseSerialize: serialize_dt_apigw_v1_Thing,
    responseDeserialize: deserialize_dt_apigw_v1_Thing,
  },
  thingStateQuery: {
    path: '/dt.apigw.v1.ThingService/ThingStateQuery',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.ThingStateQueryRequest,
    responseType: dt_apigw_v1_thing_pb.ThingStateQueryResponse,
    requestSerialize: serialize_dt_apigw_v1_ThingStateQueryRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ThingStateQueryRequest,
    responseSerialize: serialize_dt_apigw_v1_ThingStateQueryResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ThingStateQueryResponse,
  },
  thingStateAggregate: {
    path: '/dt.apigw.v1.ThingService/ThingStateAggregate',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.ThingStateAggregateRequest,
    responseType: dt_apigw_v1_thing_pb.ThingStateAggregateResponse,
    requestSerialize: serialize_dt_apigw_v1_ThingStateAggregateRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ThingStateAggregateRequest,
    responseSerialize: serialize_dt_apigw_v1_ThingStateAggregateResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ThingStateAggregateResponse,
  },
  // EditThing allows partial updates of a `Thing`.
  editThing: {
    path: '/dt.apigw.v1.ThingService/EditThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.EditThingRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_EditThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_EditThingRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // StarThing marks a `Thing` as starred.
  starThing: {
    path: '/dt.apigw.v1.ThingService/StarThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.StarThingRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_StarThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_StarThingRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // UnstarThing marks a `Thing` as un-starred.
  unstarThing: {
    path: '/dt.apigw.v1.ThingService/UnstarThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.UnstarThingRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_UnstarThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_UnstarThingRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // TODO: Remove this, since its already covered by "Watch"?
  watchThing: {
    path: '/dt.apigw.v1.ThingService/WatchThing',
    requestStream: false,
    responseStream: true,
    requestType: dt_apigw_v1_thing_pb.WatchThingRequest,
    responseType: dt_apigw_v1_thing_pb.WatchThingResponse,
    requestSerialize: serialize_dt_apigw_v1_WatchThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_WatchThingRequest,
    responseSerialize: serialize_dt_apigw_v1_WatchThingResponse,
    responseDeserialize: deserialize_dt_apigw_v1_WatchThingResponse,
  },
  watch: {
    path: '/dt.apigw.v1.ThingService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: dt_apigw_v1_thing_pb.WatchRequest,
    responseType: dt_apigw_v1_thing_pb.WatchResponse,
    requestSerialize: serialize_dt_apigw_v1_WatchRequest,
    requestDeserialize: deserialize_dt_apigw_v1_WatchRequest,
    responseSerialize: serialize_dt_apigw_v1_WatchResponse,
    responseDeserialize: deserialize_dt_apigw_v1_WatchResponse,
  },
  // / BulkEditThing takes a series of thing IDs or a query resulting in a set
  // / of things, and applies the update to all elements of the set.
  bulkEditThing: {
    path: '/dt.apigw.v1.ThingService/BulkEditThing',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_thing_pb.BulkEditThingRequest,
    responseType: dt_apigw_v1_thing_pb.BulkEditThingResponse,
    requestSerialize: serialize_dt_apigw_v1_BulkEditThingRequest,
    requestDeserialize: deserialize_dt_apigw_v1_BulkEditThingRequest,
    responseSerialize: serialize_dt_apigw_v1_BulkEditThingResponse,
    responseDeserialize: deserialize_dt_apigw_v1_BulkEditThingResponse,
  },
};

exports.ThingServiceClient = grpc.makeGenericClientConstructor(ThingServiceService);
