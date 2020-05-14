
import { IIoK8sApiCoreV1PodTemplate } from "./IoK8sApiCoreV1PodTemplate.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodTemplateList.ts";

/**
 * PodTemplateList is a list of PodTemplates.
 */
export interface IIoK8sApiCoreV1PodTemplateList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of pod templates
 */
"items": Array<IIoK8sApiCoreV1PodTemplate>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodTemplateList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodTemplateList is a list of PodTemplates.
 */
export class IoK8sApiCoreV1PodTemplateList extends Model<IIoK8sApiCoreV1PodTemplateList> implements IIoK8sApiCoreV1PodTemplateList {

apiVersion: IIoK8sApiCoreV1PodTemplateList["apiVersion"] = IoK8sApiCoreV1PodTemplateList["apiVersion"];

"items": Array<IIoK8sApiCoreV1PodTemplate>;

kind: IIoK8sApiCoreV1PodTemplateList["kind"] = IoK8sApiCoreV1PodTemplateList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1PodTemplateList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PodTemplateList["kind"] = "PodTemplateList";
}

Model.setSchema(IoK8sApiCoreV1PodTemplateList, "io.k8s.api.core.v1.PodTemplateList", addSchema);

export {
  IIoK8sApiCoreV1PodTemplateList as IPodTemplateList,
  IoK8sApiCoreV1PodTemplateList as PodTemplateList
};
