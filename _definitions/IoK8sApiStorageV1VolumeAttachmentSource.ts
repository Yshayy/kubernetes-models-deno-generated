
import { IIoK8sApiCoreV1PersistentVolumeSpec } from "./IoK8sApiCoreV1PersistentVolumeSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1VolumeAttachmentSource.ts";

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface IIoK8sApiStorageV1VolumeAttachmentSource {
/**
 * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature.
 */
"inlineVolumeSpec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
/**
 * Name of the persistent volume to attach.
 */
"persistentVolumeName"?: string;
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export class IoK8sApiStorageV1VolumeAttachmentSource extends Model<IIoK8sApiStorageV1VolumeAttachmentSource> implements IIoK8sApiStorageV1VolumeAttachmentSource {

"inlineVolumeSpec"?: IIoK8sApiCoreV1PersistentVolumeSpec;

"persistentVolumeName"?: string;
}

Model.setSchema(IoK8sApiStorageV1VolumeAttachmentSource, "io.k8s.api.storage.v1.VolumeAttachmentSource", addSchema);

export {
  IIoK8sApiStorageV1VolumeAttachmentSource as IVolumeAttachmentSource,
  IoK8sApiStorageV1VolumeAttachmentSource as VolumeAttachmentSource
};
