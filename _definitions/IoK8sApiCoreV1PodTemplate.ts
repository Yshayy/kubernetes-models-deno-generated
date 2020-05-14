
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodTemplate.ts";

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export interface IIoK8sApiCoreV1PodTemplate {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodTemplate";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"template"?: IIoK8sApiCoreV1PodTemplateSpec;
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export class IoK8sApiCoreV1PodTemplate extends Model<IIoK8sApiCoreV1PodTemplate> implements IIoK8sApiCoreV1PodTemplate {

apiVersion: IIoK8sApiCoreV1PodTemplate["apiVersion"] = IoK8sApiCoreV1PodTemplate["apiVersion"];

kind: IIoK8sApiCoreV1PodTemplate["kind"] = IoK8sApiCoreV1PodTemplate["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"template"?: IIoK8sApiCoreV1PodTemplateSpec;

static apiVersion: IIoK8sApiCoreV1PodTemplate["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PodTemplate["kind"] = "PodTemplate";
}

Model.setSchema(IoK8sApiCoreV1PodTemplate, "io.k8s.api.core.v1.PodTemplate", addSchema);

export {
  IIoK8sApiCoreV1PodTemplate as IPodTemplate,
  IoK8sApiCoreV1PodTemplate as PodTemplate
};
