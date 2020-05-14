
import { IIoK8sApiAppsV1DaemonSet } from "./IoK8sApiAppsV1DaemonSet.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSetList.ts";

/**
 * DaemonSetList is a collection of daemon sets.
 */
export interface IIoK8sApiAppsV1DaemonSetList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * A list of daemon sets.
 */
"items": Array<IIoK8sApiAppsV1DaemonSet>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "DaemonSetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export class IoK8sApiAppsV1DaemonSetList extends Model<IIoK8sApiAppsV1DaemonSetList> implements IIoK8sApiAppsV1DaemonSetList {

apiVersion: IIoK8sApiAppsV1DaemonSetList["apiVersion"] = IoK8sApiAppsV1DaemonSetList["apiVersion"];

"items": Array<IIoK8sApiAppsV1DaemonSet>;

kind: IIoK8sApiAppsV1DaemonSetList["kind"] = IoK8sApiAppsV1DaemonSetList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAppsV1DaemonSetList["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1DaemonSetList["kind"] = "DaemonSetList";
}

Model.setSchema(IoK8sApiAppsV1DaemonSetList, "io.k8s.api.apps.v1.DaemonSetList", addSchema);

export {
  IIoK8sApiAppsV1DaemonSetList as IDaemonSetList,
  IoK8sApiAppsV1DaemonSetList as DaemonSetList
};
