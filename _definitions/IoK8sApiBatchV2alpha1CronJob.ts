
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiBatchV2alpha1CronJobSpec } from "./IoK8sApiBatchV2alpha1CronJobSpec.ts";

import { IIoK8sApiBatchV2alpha1CronJobStatus } from "./IoK8sApiBatchV2alpha1CronJobStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV2alpha1CronJob.ts";

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface IIoK8sApiBatchV2alpha1CronJob {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "batch/v2alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CronJob";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV2alpha1CronJobSpec;
/**
 * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiBatchV2alpha1CronJobStatus;
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export class IoK8sApiBatchV2alpha1CronJob extends Model<IIoK8sApiBatchV2alpha1CronJob> implements IIoK8sApiBatchV2alpha1CronJob {

apiVersion: IIoK8sApiBatchV2alpha1CronJob["apiVersion"] = IoK8sApiBatchV2alpha1CronJob["apiVersion"];

kind: IIoK8sApiBatchV2alpha1CronJob["kind"] = IoK8sApiBatchV2alpha1CronJob["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiBatchV2alpha1CronJobSpec;

"status"?: IIoK8sApiBatchV2alpha1CronJobStatus;

static apiVersion: IIoK8sApiBatchV2alpha1CronJob["apiVersion"] = "batch/v2alpha1";
static kind: IIoK8sApiBatchV2alpha1CronJob["kind"] = "CronJob";
}

Model.setSchema(IoK8sApiBatchV2alpha1CronJob, "io.k8s.api.batch.v2alpha1.CronJob", addSchema);

export {
  IIoK8sApiBatchV2alpha1CronJob as ICronJob,
  IoK8sApiBatchV2alpha1CronJob as CronJob
};
