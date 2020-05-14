
import { IIoK8sApiCoreV1NodeSelector } from "./IoK8sApiCoreV1NodeSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1VolumeNodeAffinity.ts";

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface IIoK8sApiCoreV1VolumeNodeAffinity {
/**
 * Required specifies hard node constraints that must be met.
 */
"required"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export class IoK8sApiCoreV1VolumeNodeAffinity extends Model<IIoK8sApiCoreV1VolumeNodeAffinity> implements IIoK8sApiCoreV1VolumeNodeAffinity {

"required"?: IIoK8sApiCoreV1NodeSelector;
}

Model.setSchema(IoK8sApiCoreV1VolumeNodeAffinity, "io.k8s.api.core.v1.VolumeNodeAffinity", addSchema);

export {
  IIoK8sApiCoreV1VolumeNodeAffinity as IVolumeNodeAffinity,
  IoK8sApiCoreV1VolumeNodeAffinity as VolumeNodeAffinity
};
