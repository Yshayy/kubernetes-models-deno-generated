
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1VolumeDevice.ts";

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export interface IIoK8sApiCoreV1VolumeDevice {
/**
 * devicePath is the path inside of the container that the device will be mapped to.
 */
"devicePath": string;
/**
 * name must match the name of a persistentVolumeClaim in the pod
 */
"name": string;
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export class IoK8sApiCoreV1VolumeDevice extends Model<IIoK8sApiCoreV1VolumeDevice> implements IIoK8sApiCoreV1VolumeDevice {

"devicePath": string;

"name": string;
}

Model.setSchema(IoK8sApiCoreV1VolumeDevice, "io.k8s.api.core.v1.VolumeDevice", addSchema);

export {
  IIoK8sApiCoreV1VolumeDevice as IVolumeDevice,
  IoK8sApiCoreV1VolumeDevice as VolumeDevice
};
