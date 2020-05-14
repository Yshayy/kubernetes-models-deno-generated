
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1AllowedFlexVolume.ts";

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export interface IIoK8sApiPolicyV1beta1AllowedFlexVolume {
/**
 * driver is the name of the Flexvolume driver.
 */
"driver": string;
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export class IoK8sApiPolicyV1beta1AllowedFlexVolume extends Model<IIoK8sApiPolicyV1beta1AllowedFlexVolume> implements IIoK8sApiPolicyV1beta1AllowedFlexVolume {

"driver": string;
}

Model.setSchema(IoK8sApiPolicyV1beta1AllowedFlexVolume, "io.k8s.api.policy.v1beta1.AllowedFlexVolume", addSchema);

export {
  IIoK8sApiPolicyV1beta1AllowedFlexVolume as IAllowedFlexVolume,
  IoK8sApiPolicyV1beta1AllowedFlexVolume as AllowedFlexVolume
};
