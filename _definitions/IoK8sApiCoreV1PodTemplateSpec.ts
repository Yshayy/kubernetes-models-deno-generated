
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1PodSpec } from "./IoK8sApiCoreV1PodSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodTemplateSpec.ts";

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface IIoK8sApiCoreV1PodTemplateSpec {
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1PodSpec;
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export class IoK8sApiCoreV1PodTemplateSpec extends Model<IIoK8sApiCoreV1PodTemplateSpec> implements IIoK8sApiCoreV1PodTemplateSpec {

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1PodSpec;
}

Model.setSchema(IoK8sApiCoreV1PodTemplateSpec, "io.k8s.api.core.v1.PodTemplateSpec", addSchema);

export {
  IIoK8sApiCoreV1PodTemplateSpec as IPodTemplateSpec,
  IoK8sApiCoreV1PodTemplateSpec as PodTemplateSpec
};
