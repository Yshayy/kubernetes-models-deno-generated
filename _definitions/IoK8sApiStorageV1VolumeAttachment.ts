
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiStorageV1VolumeAttachmentSpec } from "./IoK8sApiStorageV1VolumeAttachmentSpec.ts";

import { IIoK8sApiStorageV1VolumeAttachmentStatus } from "./IoK8sApiStorageV1VolumeAttachmentStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1VolumeAttachment.ts";

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export interface IIoK8sApiStorageV1VolumeAttachment {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "VolumeAttachment";
/**
 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
 */
"spec": IIoK8sApiStorageV1VolumeAttachmentSpec;
/**
 * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
 */
"status"?: IIoK8sApiStorageV1VolumeAttachmentStatus;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export class IoK8sApiStorageV1VolumeAttachment extends Model<IIoK8sApiStorageV1VolumeAttachment> implements IIoK8sApiStorageV1VolumeAttachment {

apiVersion: IIoK8sApiStorageV1VolumeAttachment["apiVersion"] = IoK8sApiStorageV1VolumeAttachment["apiVersion"];

kind: IIoK8sApiStorageV1VolumeAttachment["kind"] = IoK8sApiStorageV1VolumeAttachment["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiStorageV1VolumeAttachmentSpec;

"status"?: IIoK8sApiStorageV1VolumeAttachmentStatus;

static apiVersion: IIoK8sApiStorageV1VolumeAttachment["apiVersion"] = "storage.k8s.io/v1";
static kind: IIoK8sApiStorageV1VolumeAttachment["kind"] = "VolumeAttachment";
}

Model.setSchema(IoK8sApiStorageV1VolumeAttachment, "io.k8s.api.storage.v1.VolumeAttachment", addSchema);

export {
  IIoK8sApiStorageV1VolumeAttachment as IVolumeAttachment,
  IoK8sApiStorageV1VolumeAttachment as VolumeAttachment
};
