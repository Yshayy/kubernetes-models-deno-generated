
import { IIoK8sApiStorageV1alpha1VolumeAttachment } from "./IoK8sApiStorageV1alpha1VolumeAttachment.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1alpha1VolumeAttachmentList.ts";

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface IIoK8sApiStorageV1alpha1VolumeAttachmentList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1alpha1";
/**
 * Items is the list of VolumeAttachments
 */
"items": Array<IIoK8sApiStorageV1alpha1VolumeAttachment>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "VolumeAttachmentList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export class IoK8sApiStorageV1alpha1VolumeAttachmentList extends Model<IIoK8sApiStorageV1alpha1VolumeAttachmentList> implements IIoK8sApiStorageV1alpha1VolumeAttachmentList {

apiVersion: IIoK8sApiStorageV1alpha1VolumeAttachmentList["apiVersion"] = IoK8sApiStorageV1alpha1VolumeAttachmentList["apiVersion"];

"items": Array<IIoK8sApiStorageV1alpha1VolumeAttachment>;

kind: IIoK8sApiStorageV1alpha1VolumeAttachmentList["kind"] = IoK8sApiStorageV1alpha1VolumeAttachmentList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiStorageV1alpha1VolumeAttachmentList["apiVersion"] = "storage.k8s.io/v1alpha1";
static kind: IIoK8sApiStorageV1alpha1VolumeAttachmentList["kind"] = "VolumeAttachmentList";
}

Model.setSchema(IoK8sApiStorageV1alpha1VolumeAttachmentList, "io.k8s.api.storage.v1alpha1.VolumeAttachmentList", addSchema);

export {
  IIoK8sApiStorageV1alpha1VolumeAttachmentList as IVolumeAttachmentList,
  IoK8sApiStorageV1alpha1VolumeAttachmentList as VolumeAttachmentList
};
