initSidebarItems({"enum":[["DeviceKeyAlgorithm","The basic key algorithms in the specification."],["EventEncryptionAlgorithm","An encryption algorithm to be used to encrypt messages sent to a room."],["IdParseError","An error encountered when trying to parse an invalid ID string."],["KeyDerivationAlgorithm","A key algorithm to be used to generate a key from a passphrase."],["RoomVersionId","A Matrix room version ID."],["SigningKeyAlgorithm","The signing key algorithms defined in the Matrix spec."]],"macro":[["device_id","Shorthand for `<&DeviceId>::from`."],["device_key_id","Compile-time checked `DeviceKeyId` construction."],["event_id","Compile-time checked `EventId` construction."],["mxc_uri","Compile-time checked `MxcUri` construction."],["room_alias_id","Compile-time checked `RoomAliasId` construction."],["room_id","Compile-time checked `RoomId` construction."],["room_version_id","Compile-time checked `RoomVersionId` construction."],["server_name","Compile-time checked `ServerName` construction."],["server_signing_key_id","Compile-time checked `ServerSigningKeyId` construction."],["user_id","Compile-time checked `UserId` construction."]],"mod":[["api","Core types used to define the requests and responses for each endpoint in the various Matrix API specifications."],["authentication","Common types for authentication."],["directory","Common types for room directory endpoints."],["encryption","Common types for encryption related tasks."],["events","(De)serializable types for the events in the Matrix specification. These types are used by other Ruma crates."],["matrix_uri","Matrix URIs."],["power_levels","Common types for the `m.room.power_levels` event."],["presence","Common types for the presence module."],["push","Common types for the push notifications module."],["receipt","Common types for receipts."],["room","Common types for rooms."],["serde","(De)serialization helpers for other Ruma crates."],["thirdparty","Common types for the third party networks module."],["to_device","Common types for the Send-To-Device Messaging"],["user_id","Matrix user identifiers."]],"struct":[["ClientSecret","A client secret."],["DeviceId","A Matrix key ID."],["DeviceKeyId","A key algorithm and a device id, combined with a ‘:’."],["EventId","A Matrix event ID."],["KeyId","A key algorithm and key name delimited by a colon."],["KeyName","A Matrix key identifier."],["MatrixToUri","The `matrix.to` URI representation of a user, room or event."],["MatrixUri","The `matrix:` URI representation of a user, room or event."],["MilliSecondsSinceUnixEpoch","A timestamp represented as the number of milliseconds since the unix epoch."],["MxcUri","A URI that should be a Matrix-spec compliant MXC URI."],["OwnedClientSecret","Owned variant of ClientSecret"],["OwnedDeviceId","Owned variant of DeviceId"],["OwnedDeviceKeyId","Owned variant of DeviceKeyId"],["OwnedEventId","Owned variant of EventId"],["OwnedKeyId","Owned variant of KeyId"],["OwnedKeyName","Owned variant of KeyName"],["OwnedMxcUri","Owned variant of MxcUri"],["OwnedRoomAliasId","Owned variant of RoomAliasId"],["OwnedRoomId","Owned variant of RoomId"],["OwnedRoomName","Owned variant of RoomName"],["OwnedRoomOrAliasId","Owned variant of RoomOrAliasId"],["OwnedServerName","Owned variant of ServerName"],["OwnedSessionId","Owned variant of SessionId"],["OwnedTransactionId","Owned variant of TransactionId"],["OwnedUserId","Owned variant of UserId"],["RoomAliasId","A Matrix room alias ID."],["RoomId","A Matrix room ID."],["RoomName","The name of a room."],["RoomOrAliasId","A Matrix room ID or a Matrix room alias ID."],["SecondsSinceUnixEpoch","A timestamp represented as the number of seconds since the unix epoch."],["ServerName","A Matrix-spec compliant server name."],["SessionId","A session ID."],["Signatures","Map of all signatures, grouped by entity"],["TransactionId","A Matrix transaction ID."],["UserId","A Matrix user ID."]],"type":[["DeviceSignatures","Map of device signatures for an event, grouped by user."],["DeviceSigningKeyId","Algorithm + key name for device keys."],["EntitySignatures","Map of key identifier to signature values."],["OwnedDeviceSigningKeyId","Algorithm + key name for device keys."],["OwnedServerSigningKeyId","Algorithm + key name for homeserver signing keys."],["OwnedSigningKeyId","Algorithm + key name for signing keys."],["ServerSignatures","Map of server signatures for an event, grouped by server."],["ServerSigningKeyId","Algorithm + key name for homeserver signing keys."],["SigningKeyId","Algorithm + key name for signing keys."]]});