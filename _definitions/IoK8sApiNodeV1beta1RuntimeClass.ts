
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiNodeV1beta1Overhead } from "./IoK8sApiNodeV1beta1Overhead.ts";

import { IIoK8sApiNodeV1beta1Scheduling } from "./IoK8sApiNodeV1beta1Scheduling.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1beta1RuntimeClass.ts";

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export interface IIoK8sApiNodeV1beta1RuntimeClass {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "node.k8s.io/v1beta1";
/**
 * Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must conform to the DNS Label (RFC 1123) requirements, and is immutable.
 */
"handler": string;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RuntimeClass";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see https://git.k8s.io/enhancements/keps/sig-node/20190226-pod-overhead.md This field is alpha-level as of Kubernetes v1.15, and is only honored by servers that enable the PodOverhead feature.
 */
"overhead"?: IIoK8sApiNodeV1beta1Overhead;
/**
 * Scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes.
 */
"scheduling"?: IIoK8sApiNodeV1beta1Scheduling;
}

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 */
export class IoK8sApiNodeV1beta1RuntimeClass extends Model<IIoK8sApiNodeV1beta1RuntimeClass> implements IIoK8sApiNodeV1beta1RuntimeClass {

apiVersion: IIoK8sApiNodeV1beta1RuntimeClass["apiVersion"] = IoK8sApiNodeV1beta1RuntimeClass["apiVersion"];

"handler": string;

kind: IIoK8sApiNodeV1beta1RuntimeClass["kind"] = IoK8sApiNodeV1beta1RuntimeClass["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"overhead"?: IIoK8sApiNodeV1beta1Overhead;

"scheduling"?: IIoK8sApiNodeV1beta1Scheduling;

static apiVersion: IIoK8sApiNodeV1beta1RuntimeClass["apiVersion"] = "node.k8s.io/v1beta1";
static kind: IIoK8sApiNodeV1beta1RuntimeClass["kind"] = "RuntimeClass";
}

Model.setSchema(IoK8sApiNodeV1beta1RuntimeClass, "io.k8s.api.node.v1beta1.RuntimeClass", addSchema);

export {
  IIoK8sApiNodeV1beta1RuntimeClass as IRuntimeClass,
  IoK8sApiNodeV1beta1RuntimeClass as RuntimeClass
};
