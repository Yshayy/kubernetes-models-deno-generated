
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ReplicationControllerSpec } from "./IoK8sApiCoreV1ReplicationControllerSpec.ts";

import { IIoK8sApiCoreV1ReplicationControllerStatus } from "./IoK8sApiCoreV1ReplicationControllerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ReplicationController.ts";

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export interface IIoK8sApiCoreV1ReplicationController {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ReplicationController";
/**
 * If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ReplicationControllerSpec;
/**
 * Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ReplicationControllerStatus;
}

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export class IoK8sApiCoreV1ReplicationController extends Model<IIoK8sApiCoreV1ReplicationController> implements IIoK8sApiCoreV1ReplicationController {

apiVersion: IIoK8sApiCoreV1ReplicationController["apiVersion"] = IoK8sApiCoreV1ReplicationController["apiVersion"];

kind: IIoK8sApiCoreV1ReplicationController["kind"] = IoK8sApiCoreV1ReplicationController["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1ReplicationControllerSpec;

"status"?: IIoK8sApiCoreV1ReplicationControllerStatus;

static apiVersion: IIoK8sApiCoreV1ReplicationController["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ReplicationController["kind"] = "ReplicationController";
}

Model.setSchema(IoK8sApiCoreV1ReplicationController, "io.k8s.api.core.v1.ReplicationController", addSchema);

export {
  IIoK8sApiCoreV1ReplicationController as IReplicationController,
  IoK8sApiCoreV1ReplicationController as ReplicationController
};
