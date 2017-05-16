// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dt_apigw_v1_navigation_pb = require('../../../dt/apigw/v1/navigation_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dt_apigw_v1_CreateViewCategoryRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.CreateViewCategoryRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateViewCategoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateViewCategoryRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.CreateViewCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_CreateViewRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.CreateViewRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.CreateViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_CreateViewRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.CreateViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_DeleteViewCategoryRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.DeleteViewCategoryRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DeleteViewCategoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DeleteViewCategoryRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.DeleteViewCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_DeleteViewRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.DeleteViewRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.DeleteViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_DeleteViewRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.DeleteViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_EditViewCategoryRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.EditViewCategoryRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.EditViewCategoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_EditViewCategoryRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.EditViewCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_EditViewRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.EditViewRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.EditViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_EditViewRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.EditViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetViewCategoryRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.GetViewCategoryRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetViewCategoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetViewCategoryRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.GetViewCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_GetViewRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.GetViewRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.GetViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_GetViewRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.GetViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListViewCategoriesRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.ListViewCategoriesRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListViewCategoriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListViewCategoriesRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.ListViewCategoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListViewCategoriesResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.ListViewCategoriesResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListViewCategoriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListViewCategoriesResponse(buffer_arg) {
  return dt_apigw_v1_navigation_pb.ListViewCategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListViewsRequest(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.ListViewsRequest)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListViewsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListViewsRequest(buffer_arg) {
  return dt_apigw_v1_navigation_pb.ListViewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ListViewsResponse(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.ListViewsResponse)) {
    throw new Error('Expected argument of type dt.apigw.v1.ListViewsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ListViewsResponse(buffer_arg) {
  return dt_apigw_v1_navigation_pb.ListViewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_View(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.View)) {
    throw new Error('Expected argument of type dt.apigw.v1.View');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_View(buffer_arg) {
  return dt_apigw_v1_navigation_pb.View.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dt_apigw_v1_ViewCategory(arg) {
  if (!(arg instanceof dt_apigw_v1_navigation_pb.ViewCategory)) {
    throw new Error('Expected argument of type dt.apigw.v1.ViewCategory');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dt_apigw_v1_ViewCategory(buffer_arg) {
  return dt_apigw_v1_navigation_pb.ViewCategory.deserializeBinary(new Uint8Array(buffer_arg));
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


var NavigationServiceService = exports.NavigationServiceService = {
  // / ListViews returns a page of views for the current partner. The page number
  // / is determined by the page token. A page token is also returned if there
  // / are more results available. It can be used to fetch the next page.
  listViews: {
    path: '/dt.apigw.v1.NavigationService/ListViews',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.ListViewsRequest,
    responseType: dt_apigw_v1_navigation_pb.ListViewsResponse,
    requestSerialize: serialize_dt_apigw_v1_ListViewsRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListViewsRequest,
    responseSerialize: serialize_dt_apigw_v1_ListViewsResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListViewsResponse,
  },
  // / CreateView creates a new view (saved search).
  createView: {
    path: '/dt.apigw.v1.NavigationService/CreateView',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.CreateViewRequest,
    responseType: dt_apigw_v1_navigation_pb.View,
    requestSerialize: serialize_dt_apigw_v1_CreateViewRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateViewRequest,
    responseSerialize: serialize_dt_apigw_v1_View,
    responseDeserialize: deserialize_dt_apigw_v1_View,
  },
  // / GetView takes the view ID and returns the corresponding view.
  getView: {
    path: '/dt.apigw.v1.NavigationService/GetView',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.GetViewRequest,
    responseType: dt_apigw_v1_navigation_pb.View,
    requestSerialize: serialize_dt_apigw_v1_GetViewRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetViewRequest,
    responseSerialize: serialize_dt_apigw_v1_View,
    responseDeserialize: deserialize_dt_apigw_v1_View,
  },
  // / EditView makes changes to an existing view.
  editView: {
    path: '/dt.apigw.v1.NavigationService/EditView',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.EditViewRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_EditViewRequest,
    requestDeserialize: deserialize_dt_apigw_v1_EditViewRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // / DeleteView deletes a view.
  deleteView: {
    path: '/dt.apigw.v1.NavigationService/DeleteView',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.DeleteViewRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DeleteViewRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DeleteViewRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // / ListViewCategories returns a page of view categories for the current
  // / partner. The page number is determined by the page token. A page token is
  // / also returned if there are more results available. It can be used to fetch
  // / the next page.
  listViewCategories: {
    path: '/dt.apigw.v1.NavigationService/ListViewCategories',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.ListViewCategoriesRequest,
    responseType: dt_apigw_v1_navigation_pb.ListViewCategoriesResponse,
    requestSerialize: serialize_dt_apigw_v1_ListViewCategoriesRequest,
    requestDeserialize: deserialize_dt_apigw_v1_ListViewCategoriesRequest,
    responseSerialize: serialize_dt_apigw_v1_ListViewCategoriesResponse,
    responseDeserialize: deserialize_dt_apigw_v1_ListViewCategoriesResponse,
  },
  // / CreateViewCategory creates a new view category.
  createViewCategory: {
    path: '/dt.apigw.v1.NavigationService/CreateViewCategory',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.CreateViewCategoryRequest,
    responseType: dt_apigw_v1_navigation_pb.ViewCategory,
    requestSerialize: serialize_dt_apigw_v1_CreateViewCategoryRequest,
    requestDeserialize: deserialize_dt_apigw_v1_CreateViewCategoryRequest,
    responseSerialize: serialize_dt_apigw_v1_ViewCategory,
    responseDeserialize: deserialize_dt_apigw_v1_ViewCategory,
  },
  // / GetViewCategory takes a view category ID and returns the corresponding
  // / view category.
  getViewCategory: {
    path: '/dt.apigw.v1.NavigationService/GetViewCategory',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.GetViewCategoryRequest,
    responseType: dt_apigw_v1_navigation_pb.ViewCategory,
    requestSerialize: serialize_dt_apigw_v1_GetViewCategoryRequest,
    requestDeserialize: deserialize_dt_apigw_v1_GetViewCategoryRequest,
    responseSerialize: serialize_dt_apigw_v1_ViewCategory,
    responseDeserialize: deserialize_dt_apigw_v1_ViewCategory,
  },
  // / EditViewCategory edits an existing view category.
  editViewCategory: {
    path: '/dt.apigw.v1.NavigationService/EditViewCategory',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.EditViewCategoryRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_EditViewCategoryRequest,
    requestDeserialize: deserialize_dt_apigw_v1_EditViewCategoryRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // / DeleteViewCategory deletes a view category.
  deleteViewCategory: {
    path: '/dt.apigw.v1.NavigationService/DeleteViewCategory',
    requestStream: false,
    responseStream: false,
    requestType: dt_apigw_v1_navigation_pb.DeleteViewCategoryRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dt_apigw_v1_DeleteViewCategoryRequest,
    requestDeserialize: deserialize_dt_apigw_v1_DeleteViewCategoryRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.NavigationServiceClient = grpc.makeGenericClientConstructor(NavigationServiceService);
