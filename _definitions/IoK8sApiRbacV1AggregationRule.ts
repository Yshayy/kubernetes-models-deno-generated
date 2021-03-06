
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1AggregationRule.ts";

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface IIoK8sApiRbacV1AggregationRule {
/**
 * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
 */
"clusterRoleSelectors"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelector>;
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export class IoK8sApiRbacV1AggregationRule extends Model<IIoK8sApiRbacV1AggregationRule> implements IIoK8sApiRbacV1AggregationRule {

"clusterRoleSelectors"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelector>;
}

Model.setSchema(IoK8sApiRbacV1AggregationRule, "io.k8s.api.rbac.v1.AggregationRule", addSchema);

export {
  IIoK8sApiRbacV1AggregationRule as IAggregationRule,
  IoK8sApiRbacV1AggregationRule as AggregationRule
};
