
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ConfigMap.ts";

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export interface IIoK8sApiCoreV1ConfigMap {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
 */
"binaryData"?: {
[key: string]: string;
};
/**
 * Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
 */
"data"?: {
[key: string]: string;
};
/**
 * Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. This is an alpha field enabled by ImmutableEphemeralVolumes feature gate.
 */
"immutable"?: boolean;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ConfigMap";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export class IoK8sApiCoreV1ConfigMap extends Model<IIoK8sApiCoreV1ConfigMap> implements IIoK8sApiCoreV1ConfigMap {

apiVersion: IIoK8sApiCoreV1ConfigMap["apiVersion"] = IoK8sApiCoreV1ConfigMap["apiVersion"];

"binaryData"?: {
[key: string]: string;
};

"data"?: {
[key: string]: string;
};

"immutable"?: boolean;

kind: IIoK8sApiCoreV1ConfigMap["kind"] = IoK8sApiCoreV1ConfigMap["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IIoK8sApiCoreV1ConfigMap["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ConfigMap["kind"] = "ConfigMap";
}

Model.setSchema(IoK8sApiCoreV1ConfigMap, "io.k8s.api.core.v1.ConfigMap", addSchema);

export {
  IIoK8sApiCoreV1ConfigMap as IConfigMap,
  IoK8sApiCoreV1ConfigMap as ConfigMap
};
