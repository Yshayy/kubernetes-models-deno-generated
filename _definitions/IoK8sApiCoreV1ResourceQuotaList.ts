
import { IIoK8sApiCoreV1ResourceQuota } from "./IoK8sApiCoreV1ResourceQuota.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceQuotaList.ts";

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export interface IIoK8sApiCoreV1ResourceQuotaList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"items": Array<IIoK8sApiCoreV1ResourceQuota>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ResourceQuotaList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export class IoK8sApiCoreV1ResourceQuotaList extends Model<IIoK8sApiCoreV1ResourceQuotaList> implements IIoK8sApiCoreV1ResourceQuotaList {

apiVersion: IIoK8sApiCoreV1ResourceQuotaList["apiVersion"] = IoK8sApiCoreV1ResourceQuotaList["apiVersion"];

"items": Array<IIoK8sApiCoreV1ResourceQuota>;

kind: IIoK8sApiCoreV1ResourceQuotaList["kind"] = IoK8sApiCoreV1ResourceQuotaList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ResourceQuotaList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ResourceQuotaList["kind"] = "ResourceQuotaList";
}

Model.setSchema(IoK8sApiCoreV1ResourceQuotaList, "io.k8s.api.core.v1.ResourceQuotaList", addSchema);

export {
  IIoK8sApiCoreV1ResourceQuotaList as IResourceQuotaList,
  IoK8sApiCoreV1ResourceQuotaList as ResourceQuotaList
};
