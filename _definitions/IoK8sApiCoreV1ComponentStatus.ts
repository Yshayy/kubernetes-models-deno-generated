
import { IIoK8sApiCoreV1ComponentCondition } from "./IoK8sApiCoreV1ComponentCondition.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ComponentStatus.ts";

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export interface IIoK8sApiCoreV1ComponentStatus {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of component conditions observed
 */
"conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ComponentStatus";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export class IoK8sApiCoreV1ComponentStatus extends Model<IIoK8sApiCoreV1ComponentStatus> implements IIoK8sApiCoreV1ComponentStatus {

apiVersion: IIoK8sApiCoreV1ComponentStatus["apiVersion"] = IoK8sApiCoreV1ComponentStatus["apiVersion"];

"conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;

kind: IIoK8sApiCoreV1ComponentStatus["kind"] = IoK8sApiCoreV1ComponentStatus["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IIoK8sApiCoreV1ComponentStatus["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ComponentStatus["kind"] = "ComponentStatus";
}

Model.setSchema(IoK8sApiCoreV1ComponentStatus, "io.k8s.api.core.v1.ComponentStatus", addSchema);

export {
  IIoK8sApiCoreV1ComponentStatus as IComponentStatus,
  IoK8sApiCoreV1ComponentStatus as ComponentStatus
};
