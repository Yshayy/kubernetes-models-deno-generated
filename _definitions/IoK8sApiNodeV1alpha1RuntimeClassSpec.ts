
import { IIoK8sApiNodeV1alpha1Overhead } from "./IoK8sApiNodeV1alpha1Overhead.ts";

import { IIoK8sApiNodeV1alpha1Scheduling } from "./IoK8sApiNodeV1alpha1Scheduling.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1alpha1RuntimeClassSpec.ts";

/**
 * RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
 */
export interface IIoK8sApiNodeV1alpha1RuntimeClassSpec {
/**
 * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see https://git.k8s.io/enhancements/keps/sig-node/20190226-pod-overhead.md This field is alpha-level as of Kubernetes v1.15, and is only honored by servers that enable the PodOverhead feature.
 */
"overhead"?: IIoK8sApiNodeV1alpha1Overhead;
/**
 * RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must conform to the DNS Label (RFC 1123) requirements and is immutable.
 */
"runtimeHandler": string;
/**
 * Scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes.
 */
"scheduling"?: IIoK8sApiNodeV1alpha1Scheduling;
}

/**
 * RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
 */
export class IoK8sApiNodeV1alpha1RuntimeClassSpec extends Model<IIoK8sApiNodeV1alpha1RuntimeClassSpec> implements IIoK8sApiNodeV1alpha1RuntimeClassSpec {

"overhead"?: IIoK8sApiNodeV1alpha1Overhead;

"runtimeHandler": string;

"scheduling"?: IIoK8sApiNodeV1alpha1Scheduling;
}

Model.setSchema(IoK8sApiNodeV1alpha1RuntimeClassSpec, "io.k8s.api.node.v1alpha1.RuntimeClassSpec", addSchema);

export {
  IIoK8sApiNodeV1alpha1RuntimeClassSpec as IRuntimeClassSpec,
  IoK8sApiNodeV1alpha1RuntimeClassSpec as RuntimeClassSpec
};
