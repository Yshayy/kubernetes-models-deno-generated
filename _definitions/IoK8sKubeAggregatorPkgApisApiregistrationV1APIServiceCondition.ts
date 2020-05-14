
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition.ts";

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * Unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status is the status of the condition. Can be True, False, Unknown.
 */
"status": string;
/**
 * Type is the type of the condition.
 */
"type": string;
}

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceCondition", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition as IAPIServiceCondition,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition as APIServiceCondition
};
