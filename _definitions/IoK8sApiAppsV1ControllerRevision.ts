
import { IIoK8sApimachineryPkgRuntimeRawExtension } from "./IoK8sApimachineryPkgRuntimeRawExtension.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ControllerRevision.ts";

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export interface IIoK8sApiAppsV1ControllerRevision {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Data is the serialized representation of the state.
 */
"data"?: IIoK8sApimachineryPkgRuntimeRawExtension;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ControllerRevision";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Revision indicates the revision of the state represented by Data.
 */
"revision": number;
}

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export class IoK8sApiAppsV1ControllerRevision extends Model<IIoK8sApiAppsV1ControllerRevision> implements IIoK8sApiAppsV1ControllerRevision {

apiVersion: IIoK8sApiAppsV1ControllerRevision["apiVersion"] = IoK8sApiAppsV1ControllerRevision["apiVersion"];

"data"?: IIoK8sApimachineryPkgRuntimeRawExtension;

kind: IIoK8sApiAppsV1ControllerRevision["kind"] = IoK8sApiAppsV1ControllerRevision["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"revision": number;

static apiVersion: IIoK8sApiAppsV1ControllerRevision["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1ControllerRevision["kind"] = "ControllerRevision";
}

Model.setSchema(IoK8sApiAppsV1ControllerRevision, "io.k8s.api.apps.v1.ControllerRevision", addSchema);

export {
  IIoK8sApiAppsV1ControllerRevision as IControllerRevision,
  IoK8sApiAppsV1ControllerRevision as ControllerRevision
};
