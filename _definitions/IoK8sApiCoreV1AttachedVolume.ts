
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1AttachedVolume.ts";

/**
 * AttachedVolume describes a volume attached to a node
 */
export interface IIoK8sApiCoreV1AttachedVolume {
/**
 * DevicePath represents the device path where the volume should be available
 */
"devicePath": string;
/**
 * Name of the attached volume
 */
"name": string;
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export class IoK8sApiCoreV1AttachedVolume extends Model<IIoK8sApiCoreV1AttachedVolume> implements IIoK8sApiCoreV1AttachedVolume {

"devicePath": string;

"name": string;
}

Model.setSchema(IoK8sApiCoreV1AttachedVolume, "io.k8s.api.core.v1.AttachedVolume", addSchema);

export {
  IIoK8sApiCoreV1AttachedVolume as IAttachedVolume,
  IoK8sApiCoreV1AttachedVolume as AttachedVolume
};
