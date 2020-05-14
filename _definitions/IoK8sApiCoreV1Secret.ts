
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Secret.ts";

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export interface IIoK8sApiCoreV1Secret {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
 */
"data"?: {
[key: string]: string;
};
/**
 * Immutable, if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. This is an alpha field enabled by ImmutableEphemeralVolumes feature gate.
 */
"immutable"?: boolean;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Secret";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.
 */
"stringData"?: {
[key: string]: string;
};
/**
 * Used to facilitate programmatic handling of secret data.
 */
"type"?: string;
}

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export class IoK8sApiCoreV1Secret extends Model<IIoK8sApiCoreV1Secret> implements IIoK8sApiCoreV1Secret {

apiVersion: IIoK8sApiCoreV1Secret["apiVersion"] = IoK8sApiCoreV1Secret["apiVersion"];

"data"?: {
[key: string]: string;
};

"immutable"?: boolean;

kind: IIoK8sApiCoreV1Secret["kind"] = IoK8sApiCoreV1Secret["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"stringData"?: {
[key: string]: string;
};

"type"?: string;

static apiVersion: IIoK8sApiCoreV1Secret["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Secret["kind"] = "Secret";
}

Model.setSchema(IoK8sApiCoreV1Secret, "io.k8s.api.core.v1.Secret", addSchema);

export {
  IIoK8sApiCoreV1Secret as ISecret,
  IoK8sApiCoreV1Secret as Secret
};
