
import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV2alpha1CronJobStatus.ts";

/**
 * CronJobStatus represents the current state of a cron job.
 */
export interface IIoK8sApiBatchV2alpha1CronJobStatus {
/**
 * A list of pointers to currently running jobs.
 */
"active"?: Array<IIoK8sApiCoreV1ObjectReference>;
/**
 * Information when was the last time the job was successfully scheduled.
 */
"lastScheduleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export class IoK8sApiBatchV2alpha1CronJobStatus extends Model<IIoK8sApiBatchV2alpha1CronJobStatus> implements IIoK8sApiBatchV2alpha1CronJobStatus {

"active"?: Array<IIoK8sApiCoreV1ObjectReference>;

"lastScheduleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApiBatchV2alpha1CronJobStatus, "io.k8s.api.batch.v2alpha1.CronJobStatus", addSchema);

export {
  IIoK8sApiBatchV2alpha1CronJobStatus as ICronJobStatus,
  IoK8sApiBatchV2alpha1CronJobStatus as CronJobStatus
};
