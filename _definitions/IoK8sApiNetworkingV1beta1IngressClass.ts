
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiNetworkingV1beta1IngressClassSpec } from "./IoK8sApiNetworkingV1beta1IngressClassSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressClass.ts";

/**
 * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
 */
export interface IIoK8sApiNetworkingV1beta1IngressClass {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "networking.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "IngressClass";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiNetworkingV1beta1IngressClassSpec;
}

/**
 * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
 */
export class IoK8sApiNetworkingV1beta1IngressClass extends Model<IIoK8sApiNetworkingV1beta1IngressClass> implements IIoK8sApiNetworkingV1beta1IngressClass {

apiVersion: IIoK8sApiNetworkingV1beta1IngressClass["apiVersion"] = IoK8sApiNetworkingV1beta1IngressClass["apiVersion"];

kind: IIoK8sApiNetworkingV1beta1IngressClass["kind"] = IoK8sApiNetworkingV1beta1IngressClass["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiNetworkingV1beta1IngressClassSpec;

static apiVersion: IIoK8sApiNetworkingV1beta1IngressClass["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IIoK8sApiNetworkingV1beta1IngressClass["kind"] = "IngressClass";
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressClass, "io.k8s.api.networking.v1beta1.IngressClass", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressClass as IIngressClass,
  IoK8sApiNetworkingV1beta1IngressClass as IngressClass
};
