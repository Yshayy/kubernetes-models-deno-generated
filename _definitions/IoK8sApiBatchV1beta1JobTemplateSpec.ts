
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiBatchV1JobSpec } from "./IoK8sApiBatchV1JobSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1beta1JobTemplateSpec.ts";

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface IIoK8sApiBatchV1beta1JobTemplateSpec {
/**
 * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV1JobSpec;
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export class IoK8sApiBatchV1beta1JobTemplateSpec extends Model<IIoK8sApiBatchV1beta1JobTemplateSpec> implements IIoK8sApiBatchV1beta1JobTemplateSpec {

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiBatchV1JobSpec;
}

Model.setSchema(IoK8sApiBatchV1beta1JobTemplateSpec, "io.k8s.api.batch.v1beta1.JobTemplateSpec", addSchema);

export {
  IIoK8sApiBatchV1beta1JobTemplateSpec as IJobTemplateSpec,
  IoK8sApiBatchV1beta1JobTemplateSpec as JobTemplateSpec
};
