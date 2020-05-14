
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Binding.ts";

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export interface IIoK8sApiCoreV1Binding {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Binding";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The target object that you want to bind to the standard object.
 */
"target": IIoK8sApiCoreV1ObjectReference;
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export class IoK8sApiCoreV1Binding extends Model<IIoK8sApiCoreV1Binding> implements IIoK8sApiCoreV1Binding {

apiVersion: IIoK8sApiCoreV1Binding["apiVersion"] = IoK8sApiCoreV1Binding["apiVersion"];

kind: IIoK8sApiCoreV1Binding["kind"] = IoK8sApiCoreV1Binding["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"target": IIoK8sApiCoreV1ObjectReference;

static apiVersion: IIoK8sApiCoreV1Binding["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Binding["kind"] = "Binding";
}

Model.setSchema(IoK8sApiCoreV1Binding, "io.k8s.api.core.v1.Binding", addSchema);

export {
  IIoK8sApiCoreV1Binding as IBinding,
  IoK8sApiCoreV1Binding as Binding
};
