
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1AllowedCSIDriver.ts";

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export interface IIoK8sApiPolicyV1beta1AllowedCSIDriver {
/**
 * Name is the registered name of the CSI driver
 */
"name": string;
}

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export class IoK8sApiPolicyV1beta1AllowedCSIDriver extends Model<IIoK8sApiPolicyV1beta1AllowedCSIDriver> implements IIoK8sApiPolicyV1beta1AllowedCSIDriver {

"name": string;
}

Model.setSchema(IoK8sApiPolicyV1beta1AllowedCSIDriver, "io.k8s.api.policy.v1beta1.AllowedCSIDriver", addSchema);

export {
  IIoK8sApiPolicyV1beta1AllowedCSIDriver as IAllowedCSIDriver,
  IoK8sApiPolicyV1beta1AllowedCSIDriver as AllowedCSIDriver
};
