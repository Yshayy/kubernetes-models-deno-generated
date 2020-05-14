
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Sysctl.ts";

/**
 * Sysctl defines a kernel parameter to be set
 */
export interface IIoK8sApiCoreV1Sysctl {
/**
 * Name of a property to set
 */
"name": string;
/**
 * Value of a property to set
 */
"value": string;
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export class IoK8sApiCoreV1Sysctl extends Model<IIoK8sApiCoreV1Sysctl> implements IIoK8sApiCoreV1Sysctl {

"name": string;

"value": string;
}

Model.setSchema(IoK8sApiCoreV1Sysctl, "io.k8s.api.core.v1.Sysctl", addSchema);

export {
  IIoK8sApiCoreV1Sysctl as ISysctl,
  IoK8sApiCoreV1Sysctl as Sysctl
};
