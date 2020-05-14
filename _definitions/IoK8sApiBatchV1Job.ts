
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiBatchV1JobSpec } from "./IoK8sApiBatchV1JobSpec.ts";

import { IIoK8sApiBatchV1JobStatus } from "./IoK8sApiBatchV1JobStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1Job.ts";

/**
 * Job represents the configuration of a single job.
 */
export interface IIoK8sApiBatchV1Job {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "batch/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Job";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV1JobSpec;
/**
 * Current status of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiBatchV1JobStatus;
}

/**
 * Job represents the configuration of a single job.
 */
export class IoK8sApiBatchV1Job extends Model<IIoK8sApiBatchV1Job> implements IIoK8sApiBatchV1Job {

apiVersion: IIoK8sApiBatchV1Job["apiVersion"] = IoK8sApiBatchV1Job["apiVersion"];

kind: IIoK8sApiBatchV1Job["kind"] = IoK8sApiBatchV1Job["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiBatchV1JobSpec;

"status"?: IIoK8sApiBatchV1JobStatus;

static apiVersion: IIoK8sApiBatchV1Job["apiVersion"] = "batch/v1";
static kind: IIoK8sApiBatchV1Job["kind"] = "Job";
}

Model.setSchema(IoK8sApiBatchV1Job, "io.k8s.api.batch.v1.Job", addSchema);

export {
  IIoK8sApiBatchV1Job as IJob,
  IoK8sApiBatchV1Job as Job
};
