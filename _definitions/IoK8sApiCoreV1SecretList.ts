
import { IIoK8sApiCoreV1Secret } from "./IoK8sApiCoreV1Secret.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecretList.ts";

/**
 * SecretList is a list of Secret.
 */
export interface IIoK8sApiCoreV1SecretList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
 */
"items": Array<IIoK8sApiCoreV1Secret>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "SecretList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * SecretList is a list of Secret.
 */
export class IoK8sApiCoreV1SecretList extends Model<IIoK8sApiCoreV1SecretList> implements IIoK8sApiCoreV1SecretList {

apiVersion: IIoK8sApiCoreV1SecretList["apiVersion"] = IoK8sApiCoreV1SecretList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Secret>;

kind: IIoK8sApiCoreV1SecretList["kind"] = IoK8sApiCoreV1SecretList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1SecretList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1SecretList["kind"] = "SecretList";
}

Model.setSchema(IoK8sApiCoreV1SecretList, "io.k8s.api.core.v1.SecretList", addSchema);

export {
  IIoK8sApiCoreV1SecretList as ISecretList,
  IoK8sApiCoreV1SecretList as SecretList
};
