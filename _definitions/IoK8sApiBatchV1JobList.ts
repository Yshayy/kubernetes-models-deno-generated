
import { IIoK8sApiBatchV1Job } from "./IoK8sApiBatchV1Job.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1JobList.ts";

/**
 * JobList is a collection of jobs.
 */
export interface IIoK8sApiBatchV1JobList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "batch/v1";
/**
 * items is the list of Jobs.
 */
"items": Array<IIoK8sApiBatchV1Job>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "JobList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * JobList is a collection of jobs.
 */
export class IoK8sApiBatchV1JobList extends Model<IIoK8sApiBatchV1JobList> implements IIoK8sApiBatchV1JobList {

apiVersion: IIoK8sApiBatchV1JobList["apiVersion"] = IoK8sApiBatchV1JobList["apiVersion"];

"items": Array<IIoK8sApiBatchV1Job>;

kind: IIoK8sApiBatchV1JobList["kind"] = IoK8sApiBatchV1JobList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiBatchV1JobList["apiVersion"] = "batch/v1";
static kind: IIoK8sApiBatchV1JobList["kind"] = "JobList";
}

Model.setSchema(IoK8sApiBatchV1JobList, "io.k8s.api.batch.v1.JobList", addSchema);

export {
  IIoK8sApiBatchV1JobList as IJobList,
  IoK8sApiBatchV1JobList as JobList
};
