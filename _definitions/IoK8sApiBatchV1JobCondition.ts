
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1JobCondition.ts";

/**
 * JobCondition describes current state of a job.
 */
export interface IIoK8sApiBatchV1JobCondition {
/**
 * Last time the condition was checked.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transit from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human readable message indicating details about last transition.
 */
"message"?: string;
/**
 * (brief) reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of job condition, Complete or Failed.
 */
"type": string;
}

/**
 * JobCondition describes current state of a job.
 */
export class IoK8sApiBatchV1JobCondition extends Model<IIoK8sApiBatchV1JobCondition> implements IIoK8sApiBatchV1JobCondition {

"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiBatchV1JobCondition, "io.k8s.api.batch.v1.JobCondition", addSchema);

export {
  IIoK8sApiBatchV1JobCondition as IJobCondition,
  IoK8sApiBatchV1JobCondition as JobCondition
};
