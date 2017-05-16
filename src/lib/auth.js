var grpc = require('grpc');

exports.createFromApiKeyCredential = function (apiKey) {
  return grpc.credentials.createFromMetadataGenerator(function (auth_context, callback) {
    var metadata = new grpc.Metadata();
    metadata.add('authorization', 'ApiKey ' + apiKey);
    callback(null, metadata);
  });
};
