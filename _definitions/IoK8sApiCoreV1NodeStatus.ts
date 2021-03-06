
import { IIoK8sApiCoreV1NodeAddress } from "./IoK8sApiCoreV1NodeAddress.ts";

import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApiCoreV1NodeCondition } from "./IoK8sApiCoreV1NodeCondition.ts";

import { IIoK8sApiCoreV1NodeConfigStatus } from "./IoK8sApiCoreV1NodeConfigStatus.ts";

import { IIoK8sApiCoreV1NodeDaemonEndpoints } from "./IoK8sApiCoreV1NodeDaemonEndpoints.ts";

import { IIoK8sApiCoreV1ContainerImage } from "./IoK8sApiCoreV1ContainerImage.ts";

import { IIoK8sApiCoreV1NodeSystemInfo } from "./IoK8sApiCoreV1NodeSystemInfo.ts";

import { IIoK8sApiCoreV1AttachedVolume } from "./IoK8sApiCoreV1AttachedVolume.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeStatus.ts";

/**
 * NodeStatus is information about the current status of a node.
 */
export interface IIoK8sApiCoreV1NodeStatus {
/**
 * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See http://pr.k8s.io/79391 for an example.
 */
"addresses"?: Array<IIoK8sApiCoreV1NodeAddress>;
/**
 * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
 */
"allocatable"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
 */
"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
 */
"conditions"?: Array<IIoK8sApiCoreV1NodeCondition>;
/**
 * Status of the config assigned to the node via the dynamic Kubelet config feature.
 */
"config"?: IIoK8sApiCoreV1NodeConfigStatus;
/**
 * Endpoints of daemons running on the Node.
 */
"daemonEndpoints"?: IIoK8sApiCoreV1NodeDaemonEndpoints;
/**
 * List of container images on this node
 */
"images"?: Array<IIoK8sApiCoreV1ContainerImage>;
/**
 * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
 */
"nodeInfo"?: IIoK8sApiCoreV1NodeSystemInfo;
/**
 * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
 */
"phase"?: string;
/**
 * List of volumes that are attached to the node.
 */
"volumesAttached"?: Array<IIoK8sApiCoreV1AttachedVolume>;
/**
 * List of attachable volumes in use (mounted) by the node.
 */
"volumesInUse"?: Array<string>;
}

/**
 * NodeStatus is information about the current status of a node.
 */
export class IoK8sApiCoreV1NodeStatus extends Model<IIoK8sApiCoreV1NodeStatus> implements IIoK8sApiCoreV1NodeStatus {

"addresses"?: Array<IIoK8sApiCoreV1NodeAddress>;

"allocatable"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"conditions"?: Array<IIoK8sApiCoreV1NodeCondition>;

"config"?: IIoK8sApiCoreV1NodeConfigStatus;

"daemonEndpoints"?: IIoK8sApiCoreV1NodeDaemonEndpoints;

"images"?: Array<IIoK8sApiCoreV1ContainerImage>;

"nodeInfo"?: IIoK8sApiCoreV1NodeSystemInfo;

"phase"?: string;

"volumesAttached"?: Array<IIoK8sApiCoreV1AttachedVolume>;

"volumesInUse"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1NodeStatus, "io.k8s.api.core.v1.NodeStatus", addSchema);

export {
  IIoK8sApiCoreV1NodeStatus as INodeStatus,
  IoK8sApiCoreV1NodeStatus as NodeStatus
};
