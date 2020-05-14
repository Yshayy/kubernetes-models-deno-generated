
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiBatchV1beta1CronJobSpec } from "./IoK8sApiBatchV1beta1CronJobSpec.ts";

import { IIoK8sApiBatchV1beta1CronJobStatus } from "./IoK8sApiBatchV1beta1CronJobStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1beta1CronJob.ts";

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface IIoK8sApiBatchV1beta1CronJob {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "batch/v1beta1";
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
"spec"?: IIoK8sApiBatchV1beta1CronJobSpec;
/**
 * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiBatchV1beta1CronJobStatus;
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export class IoK8sApiBatchV1beta1CronJob extends Model<IIoK8sApiBatchV1beta1CronJob> implements IIoK8sApiBatchV1beta1CronJob {

apiVersion: IIoK8sApiBatchV1beta1CronJob["apiVersion"] = IoK8sApiBatchV1beta1CronJob["apiVersion"];

kind: IIoK8sApiBatchV1beta1CronJob["kind"] = IoK8sApiBatchV1beta1CronJob["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiBatchV1beta1CronJobSpec;

"status"?: IIoK8sApiBatchV1beta1CronJobStatus;

static apiVersion: IIoK8sApiBatchV1beta1CronJob["apiVersion"] = "batch/v1beta1";
static kind: IIoK8sApiBatchV1beta1CronJob["kind"] = "CronJob";
}

Model.setSchema(IoK8sApiBatchV1beta1CronJob, "io.k8s.api.batch.v1beta1.CronJob", addSchema);

export {
  IIoK8sApiBatchV1beta1CronJob as ICronJob,
  IoK8sApiBatchV1beta1CronJob as CronJob
};
