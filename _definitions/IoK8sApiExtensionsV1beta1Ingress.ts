
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiExtensionsV1beta1IngressSpec } from "./IoK8sApiExtensionsV1beta1IngressSpec.ts";

import { IIoK8sApiExtensionsV1beta1IngressStatus } from "./IoK8sApiExtensionsV1beta1IngressStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiExtensionsV1beta1Ingress.ts";

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information.
 */
export interface IIoK8sApiExtensionsV1beta1Ingress {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "extensions/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Ingress";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiExtensionsV1beta1IngressSpec;
/**
 * Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiExtensionsV1beta1IngressStatus;
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information.
 */
export class IoK8sApiExtensionsV1beta1Ingress extends Model<IIoK8sApiExtensionsV1beta1Ingress> implements IIoK8sApiExtensionsV1beta1Ingress {

apiVersion: IIoK8sApiExtensionsV1beta1Ingress["apiVersion"] = IoK8sApiExtensionsV1beta1Ingress["apiVersion"];

kind: IIoK8sApiExtensionsV1beta1Ingress["kind"] = IoK8sApiExtensionsV1beta1Ingress["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiExtensionsV1beta1IngressSpec;

"status"?: IIoK8sApiExtensionsV1beta1IngressStatus;

static apiVersion: IIoK8sApiExtensionsV1beta1Ingress["apiVersion"] = "extensions/v1beta1";
static kind: IIoK8sApiExtensionsV1beta1Ingress["kind"] = "Ingress";
}

Model.setSchema(IoK8sApiExtensionsV1beta1Ingress, "io.k8s.api.extensions.v1beta1.Ingress", addSchema);

export {
  IIoK8sApiExtensionsV1beta1Ingress as IIngress,
  IoK8sApiExtensionsV1beta1Ingress as Ingress
};
