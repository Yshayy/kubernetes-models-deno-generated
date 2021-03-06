
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { IIoK8sApiBatchV1JobCondition } from "./IoK8sApiBatchV1JobCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1JobStatus.ts";

/**
 * JobStatus represents the current state of a Job.
 */
export interface IIoK8sApiBatchV1JobStatus {
/**
 * The number of actively running pods.
 */
"active"?: number;
/**
 * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
 */
"completionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
 */
"conditions"?: Array<IIoK8sApiBatchV1JobCondition>;
/**
 * The number of pods which reached phase Failed.
 */
"failed"?: number;
/**
 * Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
 */
"startTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The number of pods which reached phase Succeeded.
 */
"succeeded"?: number;
}

/**
 * JobStatus represents the current state of a Job.
 */
export class IoK8sApiBatchV1JobStatus extends Model<IIoK8sApiBatchV1JobStatus> implements IIoK8sApiBatchV1JobStatus {

"active"?: number;

"completionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"conditions"?: Array<IIoK8sApiBatchV1JobCondition>;

"failed"?: number;

"startTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"succeeded"?: number;
}

Model.setSchema(IoK8sApiBatchV1JobStatus, "io.k8s.api.batch.v1.JobStatus", addSchema);

export {
  IIoK8sApiBatchV1JobStatus as IJobStatus,
  IoK8sApiBatchV1JobStatus as JobStatus
};
