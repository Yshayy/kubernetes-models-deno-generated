
import { IIoK8sApiStorageV1alpha1VolumeAttachmentSource } from "./IoK8sApiStorageV1alpha1VolumeAttachmentSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1alpha1VolumeAttachmentSpec.ts";

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface IIoK8sApiStorageV1alpha1VolumeAttachmentSpec {
/**
 * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
 */
"attacher": string;
/**
 * The node that the volume should be attached to.
 */
"nodeName": string;
/**
 * Source represents the volume that should be attached.
 */
"source": IIoK8sApiStorageV1alpha1VolumeAttachmentSource;
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export class IoK8sApiStorageV1alpha1VolumeAttachmentSpec extends Model<IIoK8sApiStorageV1alpha1VolumeAttachmentSpec> implements IIoK8sApiStorageV1alpha1VolumeAttachmentSpec {

"attacher": string;

"nodeName": string;

"source": IIoK8sApiStorageV1alpha1VolumeAttachmentSource;
}

Model.setSchema(IoK8sApiStorageV1alpha1VolumeAttachmentSpec, "io.k8s.api.storage.v1alpha1.VolumeAttachmentSpec", addSchema);

export {
  IIoK8sApiStorageV1alpha1VolumeAttachmentSpec as IVolumeAttachmentSpec,
  IoK8sApiStorageV1alpha1VolumeAttachmentSpec as VolumeAttachmentSpec
};
