
import { IIoK8sApiBatchV2alpha1CronJob } from "./IoK8sApiBatchV2alpha1CronJob.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV2alpha1CronJobList.ts";

/**
 * CronJobList is a collection of cron jobs.
 */
export interface IIoK8sApiBatchV2alpha1CronJobList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "batch/v2alpha1";
/**
 * items is the list of CronJobs.
 */
"items": Array<IIoK8sApiBatchV2alpha1CronJob>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CronJobList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CronJobList is a collection of cron jobs.
 */
export class IoK8sApiBatchV2alpha1CronJobList extends Model<IIoK8sApiBatchV2alpha1CronJobList> implements IIoK8sApiBatchV2alpha1CronJobList {

apiVersion: IIoK8sApiBatchV2alpha1CronJobList["apiVersion"] = IoK8sApiBatchV2alpha1CronJobList["apiVersion"];

"items": Array<IIoK8sApiBatchV2alpha1CronJob>;

kind: IIoK8sApiBatchV2alpha1CronJobList["kind"] = IoK8sApiBatchV2alpha1CronJobList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiBatchV2alpha1CronJobList["apiVersion"] = "batch/v2alpha1";
static kind: IIoK8sApiBatchV2alpha1CronJobList["kind"] = "CronJobList";
}

Model.setSchema(IoK8sApiBatchV2alpha1CronJobList, "io.k8s.api.batch.v2alpha1.CronJobList", addSchema);

export {
  IIoK8sApiBatchV2alpha1CronJobList as ICronJobList,
  IoK8sApiBatchV2alpha1CronJobList as CronJobList
};
