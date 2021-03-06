
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1TopologySpreadConstraint.ts";

/**
 * TopologySpreadConstraint specifies how to spread matching pods among the given topology.
 */
export interface IIoK8sApiCoreV1TopologySpreadConstraint {
/**
 * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
 */
"labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * MaxSkew describes the degree to which pods may be unevenly distributed. It's the maximum permitted difference between the number of matching pods in any two topology domains of a given topology type. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. It's a required field. Default value is 1 and 0 is not allowed.
 */
"maxSkew": number;
/**
 * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
 */
"topologyKey": string;
/**
 * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it - ScheduleAnyway tells the scheduler to still schedule it It's considered as "Unsatisfiable" if and only if placing incoming pod on any topology violates "MaxSkew". For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
 */
"whenUnsatisfiable": string;
}

/**
 * TopologySpreadConstraint specifies how to spread matching pods among the given topology.
 */
export class IoK8sApiCoreV1TopologySpreadConstraint extends Model<IIoK8sApiCoreV1TopologySpreadConstraint> implements IIoK8sApiCoreV1TopologySpreadConstraint {

"labelSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"maxSkew": number;

"topologyKey": string;

"whenUnsatisfiable": string;
}

Model.setSchema(IoK8sApiCoreV1TopologySpreadConstraint, "io.k8s.api.core.v1.TopologySpreadConstraint", addSchema);

export {
  IIoK8sApiCoreV1TopologySpreadConstraint as ITopologySpreadConstraint,
  IoK8sApiCoreV1TopologySpreadConstraint as TopologySpreadConstraint
};
