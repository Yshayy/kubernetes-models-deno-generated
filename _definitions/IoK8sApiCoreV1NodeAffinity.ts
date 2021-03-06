
import { IIoK8sApiCoreV1PreferredSchedulingTerm } from "./IoK8sApiCoreV1PreferredSchedulingTerm.ts";

import { IIoK8sApiCoreV1NodeSelector } from "./IoK8sApiCoreV1NodeSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeAffinity.ts";

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export interface IIoK8sApiCoreV1NodeAffinity {
/**
 * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
 */
"preferredDuringSchedulingIgnoredDuringExecution"?: Array<IIoK8sApiCoreV1PreferredSchedulingTerm>;
/**
 * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
 */
"requiredDuringSchedulingIgnoredDuringExecution"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export class IoK8sApiCoreV1NodeAffinity extends Model<IIoK8sApiCoreV1NodeAffinity> implements IIoK8sApiCoreV1NodeAffinity {

"preferredDuringSchedulingIgnoredDuringExecution"?: Array<IIoK8sApiCoreV1PreferredSchedulingTerm>;

"requiredDuringSchedulingIgnoredDuringExecution"?: IIoK8sApiCoreV1NodeSelector;
}

Model.setSchema(IoK8sApiCoreV1NodeAffinity, "io.k8s.api.core.v1.NodeAffinity", addSchema);

export {
  IIoK8sApiCoreV1NodeAffinity as INodeAffinity,
  IoK8sApiCoreV1NodeAffinity as NodeAffinity
};
