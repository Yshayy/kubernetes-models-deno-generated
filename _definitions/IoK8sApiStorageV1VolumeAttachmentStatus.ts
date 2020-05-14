
import { IIoK8sApiStorageV1VolumeError } from "./IoK8sApiStorageV1VolumeError.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1VolumeAttachmentStatus.ts";

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface IIoK8sApiStorageV1VolumeAttachmentStatus {
/**
 * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachError"?: IIoK8sApiStorageV1VolumeError;
/**
 * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attached": boolean;
/**
 * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachmentMetadata"?: {
[key: string]: string;
};
/**
 * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
 */
"detachError"?: IIoK8sApiStorageV1VolumeError;
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export class IoK8sApiStorageV1VolumeAttachmentStatus extends Model<IIoK8sApiStorageV1VolumeAttachmentStatus> implements IIoK8sApiStorageV1VolumeAttachmentStatus {

"attachError"?: IIoK8sApiStorageV1VolumeError;

"attached": boolean;

"attachmentMetadata"?: {
[key: string]: string;
};

"detachError"?: IIoK8sApiStorageV1VolumeError;
}

Model.setSchema(IoK8sApiStorageV1VolumeAttachmentStatus, "io.k8s.api.storage.v1.VolumeAttachmentStatus", addSchema);

export {
  IIoK8sApiStorageV1VolumeAttachmentStatus as IVolumeAttachmentStatus,
  IoK8sApiStorageV1VolumeAttachmentStatus as VolumeAttachmentStatus
};
