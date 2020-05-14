
import { IIoK8sApiAppsV1ReplicaSet } from "./IoK8sApiAppsV1ReplicaSet.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ReplicaSetList.ts";

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface IIoK8sApiAppsV1ReplicaSetList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
 */
"items": Array<IIoK8sApiAppsV1ReplicaSet>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ReplicaSetList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export class IoK8sApiAppsV1ReplicaSetList extends Model<IIoK8sApiAppsV1ReplicaSetList> implements IIoK8sApiAppsV1ReplicaSetList {

apiVersion: IIoK8sApiAppsV1ReplicaSetList["apiVersion"] = IoK8sApiAppsV1ReplicaSetList["apiVersion"];

"items": Array<IIoK8sApiAppsV1ReplicaSet>;

kind: IIoK8sApiAppsV1ReplicaSetList["kind"] = IoK8sApiAppsV1ReplicaSetList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAppsV1ReplicaSetList["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1ReplicaSetList["kind"] = "ReplicaSetList";
}

Model.setSchema(IoK8sApiAppsV1ReplicaSetList, "io.k8s.api.apps.v1.ReplicaSetList", addSchema);

export {
  IIoK8sApiAppsV1ReplicaSetList as IReplicaSetList,
  IoK8sApiAppsV1ReplicaSetList as ReplicaSetList
};
