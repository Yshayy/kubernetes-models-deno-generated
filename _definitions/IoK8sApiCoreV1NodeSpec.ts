
import { IIoK8sApiCoreV1NodeConfigSource } from "./IoK8sApiCoreV1NodeConfigSource.ts";

import { IIoK8sApiCoreV1Taint } from "./IoK8sApiCoreV1Taint.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeSpec.ts";

/**
 * NodeSpec describes the attributes that a node is created with.
 */
export interface IIoK8sApiCoreV1NodeSpec {
/**
 * If specified, the source to get node configuration from The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field
 */
"configSource"?: IIoK8sApiCoreV1NodeConfigSource;
/**
 * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
 */
"externalID"?: string;
/**
 * PodCIDR represents the pod IP range assigned to the node.
 */
"podCIDR"?: string;
/**
 * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
 */
"podCIDRs"?: Array<string>;
/**
 * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
 */
"providerID"?: string;
/**
 * If specified, the node's taints.
 */
"taints"?: Array<IIoK8sApiCoreV1Taint>;
/**
 * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
 */
"unschedulable"?: boolean;
}

/**
 * NodeSpec describes the attributes that a node is created with.
 */
export class IoK8sApiCoreV1NodeSpec extends Model<IIoK8sApiCoreV1NodeSpec> implements IIoK8sApiCoreV1NodeSpec {

"configSource"?: IIoK8sApiCoreV1NodeConfigSource;

"externalID"?: string;

"podCIDR"?: string;

"podCIDRs"?: Array<string>;

"providerID"?: string;

"taints"?: Array<IIoK8sApiCoreV1Taint>;

"unschedulable"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1NodeSpec, "io.k8s.api.core.v1.NodeSpec", addSchema);

export {
  IIoK8sApiCoreV1NodeSpec as INodeSpec,
  IoK8sApiCoreV1NodeSpec as NodeSpec
};
