
import { IIoK8sApiCoreV1ServiceAccount } from "./IoK8sApiCoreV1ServiceAccount.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServiceAccountList.ts";

/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export interface IIoK8sApiCoreV1ServiceAccountList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
 */
"items": Array<IIoK8sApiCoreV1ServiceAccount>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ServiceAccountList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export class IoK8sApiCoreV1ServiceAccountList extends Model<IIoK8sApiCoreV1ServiceAccountList> implements IIoK8sApiCoreV1ServiceAccountList {

apiVersion: IIoK8sApiCoreV1ServiceAccountList["apiVersion"] = IoK8sApiCoreV1ServiceAccountList["apiVersion"];

"items": Array<IIoK8sApiCoreV1ServiceAccount>;

kind: IIoK8sApiCoreV1ServiceAccountList["kind"] = IoK8sApiCoreV1ServiceAccountList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ServiceAccountList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ServiceAccountList["kind"] = "ServiceAccountList";
}

Model.setSchema(IoK8sApiCoreV1ServiceAccountList, "io.k8s.api.core.v1.ServiceAccountList", addSchema);

export {
  IIoK8sApiCoreV1ServiceAccountList as IServiceAccountList,
  IoK8sApiCoreV1ServiceAccountList as ServiceAccountList
};
