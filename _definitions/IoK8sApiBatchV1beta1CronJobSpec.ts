
import { IIoK8sApiBatchV1beta1JobTemplateSpec } from "./IoK8sApiBatchV1beta1JobTemplateSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1beta1CronJobSpec.ts";

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export interface IIoK8sApiBatchV1beta1CronJobSpec {
/**
 * Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
 */
"concurrencyPolicy"?: string;
/**
 * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
 */
"failedJobsHistoryLimit"?: number;
/**
 * Specifies the job that will be created when executing a CronJob.
 */
"jobTemplate": IIoK8sApiBatchV1beta1JobTemplateSpec;
/**
 * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
 */
"schedule": string;
/**
 * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
 */
"startingDeadlineSeconds"?: number;
/**
 * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3.
 */
"successfulJobsHistoryLimit"?: number;
/**
 * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
 */
"suspend"?: boolean;
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export class IoK8sApiBatchV1beta1CronJobSpec extends Model<IIoK8sApiBatchV1beta1CronJobSpec> implements IIoK8sApiBatchV1beta1CronJobSpec {

"concurrencyPolicy"?: string;

"failedJobsHistoryLimit"?: number;

"jobTemplate": IIoK8sApiBatchV1beta1JobTemplateSpec;

"schedule": string;

"startingDeadlineSeconds"?: number;

"successfulJobsHistoryLimit"?: number;

"suspend"?: boolean;
}

Model.setSchema(IoK8sApiBatchV1beta1CronJobSpec, "io.k8s.api.batch.v1beta1.CronJobSpec", addSchema);

export {
  IIoK8sApiBatchV1beta1CronJobSpec as ICronJobSpec,
  IoK8sApiBatchV1beta1CronJobSpec as CronJobSpec
};
