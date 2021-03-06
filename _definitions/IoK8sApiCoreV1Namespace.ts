
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1NamespaceSpec } from "./IoK8sApiCoreV1NamespaceSpec.ts";

import { IIoK8sApiCoreV1NamespaceStatus } from "./IoK8sApiCoreV1NamespaceStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Namespace.ts";

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export interface IIoK8sApiCoreV1Namespace {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Namespace";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1NamespaceSpec;
/**
 * Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1NamespaceStatus;
}

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export class IoK8sApiCoreV1Namespace extends Model<IIoK8sApiCoreV1Namespace> implements IIoK8sApiCoreV1Namespace {

apiVersion: IIoK8sApiCoreV1Namespace["apiVersion"] = IoK8sApiCoreV1Namespace["apiVersion"];

kind: IIoK8sApiCoreV1Namespace["kind"] = IoK8sApiCoreV1Namespace["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1NamespaceSpec;

"status"?: IIoK8sApiCoreV1NamespaceStatus;

static apiVersion: IIoK8sApiCoreV1Namespace["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Namespace["kind"] = "Namespace";
}

Model.setSchema(IoK8sApiCoreV1Namespace, "io.k8s.api.core.v1.Namespace", addSchema);

export {
  IIoK8sApiCoreV1Namespace as INamespace,
  IoK8sApiCoreV1Namespace as Namespace
};
