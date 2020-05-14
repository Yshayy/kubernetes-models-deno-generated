
import { IIoK8sApiCoreV1Service } from "./IoK8sApiCoreV1Service.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServiceList.ts";

/**
 * ServiceList holds a list of services.
 */
export interface IIoK8sApiCoreV1ServiceList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of services
 */
"items": Array<IIoK8sApiCoreV1Service>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ServiceList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ServiceList holds a list of services.
 */
export class IoK8sApiCoreV1ServiceList extends Model<IIoK8sApiCoreV1ServiceList> implements IIoK8sApiCoreV1ServiceList {

apiVersion: IIoK8sApiCoreV1ServiceList["apiVersion"] = IoK8sApiCoreV1ServiceList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Service>;

kind: IIoK8sApiCoreV1ServiceList["kind"] = IoK8sApiCoreV1ServiceList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ServiceList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ServiceList["kind"] = "ServiceList";
}

Model.setSchema(IoK8sApiCoreV1ServiceList, "io.k8s.api.core.v1.ServiceList", addSchema);

export {
  IIoK8sApiCoreV1ServiceList as IServiceList,
  IoK8sApiCoreV1ServiceList as ServiceList
};
