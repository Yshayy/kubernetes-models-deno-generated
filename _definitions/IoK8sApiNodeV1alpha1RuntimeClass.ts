
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiNodeV1alpha1RuntimeClassSpec } from "./IoK8sApiNodeV1alpha1RuntimeClassSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1alpha1RuntimeClass.ts";

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export interface IIoK8sApiNodeV1alpha1RuntimeClass {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "node.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RuntimeClass";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the RuntimeClass More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec": IIoK8sApiNodeV1alpha1RuntimeClassSpec;
}

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export class IoK8sApiNodeV1alpha1RuntimeClass extends Model<IIoK8sApiNodeV1alpha1RuntimeClass> implements IIoK8sApiNodeV1alpha1RuntimeClass {

apiVersion: IIoK8sApiNodeV1alpha1RuntimeClass["apiVersion"] = IoK8sApiNodeV1alpha1RuntimeClass["apiVersion"];

kind: IIoK8sApiNodeV1alpha1RuntimeClass["kind"] = IoK8sApiNodeV1alpha1RuntimeClass["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiNodeV1alpha1RuntimeClassSpec;

static apiVersion: IIoK8sApiNodeV1alpha1RuntimeClass["apiVersion"] = "node.k8s.io/v1alpha1";
static kind: IIoK8sApiNodeV1alpha1RuntimeClass["kind"] = "RuntimeClass";
}

Model.setSchema(IoK8sApiNodeV1alpha1RuntimeClass, "io.k8s.api.node.v1alpha1.RuntimeClass", addSchema);

export {
  IIoK8sApiNodeV1alpha1RuntimeClass as IRuntimeClass,
  IoK8sApiNodeV1alpha1RuntimeClass as RuntimeClass
};
