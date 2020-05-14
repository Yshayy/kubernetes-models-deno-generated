
import { IIoK8sApiCoreV1ReplicationController } from "./IoK8sApiCoreV1ReplicationController.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ReplicationControllerList.ts";

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export interface IIoK8sApiCoreV1ReplicationControllerList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
 */
"items": Array<IIoK8sApiCoreV1ReplicationController>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ReplicationControllerList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export class IoK8sApiCoreV1ReplicationControllerList extends Model<IIoK8sApiCoreV1ReplicationControllerList> implements IIoK8sApiCoreV1ReplicationControllerList {

apiVersion: IIoK8sApiCoreV1ReplicationControllerList["apiVersion"] = IoK8sApiCoreV1ReplicationControllerList["apiVersion"];

"items": Array<IIoK8sApiCoreV1ReplicationController>;

kind: IIoK8sApiCoreV1ReplicationControllerList["kind"] = IoK8sApiCoreV1ReplicationControllerList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ReplicationControllerList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ReplicationControllerList["kind"] = "ReplicationControllerList";
}

Model.setSchema(IoK8sApiCoreV1ReplicationControllerList, "io.k8s.api.core.v1.ReplicationControllerList", addSchema);

export {
  IIoK8sApiCoreV1ReplicationControllerList as IReplicationControllerList,
  IoK8sApiCoreV1ReplicationControllerList as ReplicationControllerList
};
