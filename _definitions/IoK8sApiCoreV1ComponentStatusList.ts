
import { IIoK8sApiCoreV1ComponentStatus } from "./IoK8sApiCoreV1ComponentStatus.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ComponentStatusList.ts";

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export interface IIoK8sApiCoreV1ComponentStatusList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of ComponentStatus objects.
 */
"items": Array<IIoK8sApiCoreV1ComponentStatus>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ComponentStatusList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export class IoK8sApiCoreV1ComponentStatusList extends Model<IIoK8sApiCoreV1ComponentStatusList> implements IIoK8sApiCoreV1ComponentStatusList {

apiVersion: IIoK8sApiCoreV1ComponentStatusList["apiVersion"] = IoK8sApiCoreV1ComponentStatusList["apiVersion"];

"items": Array<IIoK8sApiCoreV1ComponentStatus>;

kind: IIoK8sApiCoreV1ComponentStatusList["kind"] = IoK8sApiCoreV1ComponentStatusList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ComponentStatusList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ComponentStatusList["kind"] = "ComponentStatusList";
}

Model.setSchema(IoK8sApiCoreV1ComponentStatusList, "io.k8s.api.core.v1.ComponentStatusList", addSchema);

export {
  IIoK8sApiCoreV1ComponentStatusList as IComponentStatusList,
  IoK8sApiCoreV1ComponentStatusList as ComponentStatusList
};
