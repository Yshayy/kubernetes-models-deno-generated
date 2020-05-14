
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Capabilities.ts";

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface IIoK8sApiCoreV1Capabilities {
/**
 * Added capabilities
 */
"add"?: Array<string>;
/**
 * Removed capabilities
 */
"drop"?: Array<string>;
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export class IoK8sApiCoreV1Capabilities extends Model<IIoK8sApiCoreV1Capabilities> implements IIoK8sApiCoreV1Capabilities {

"add"?: Array<string>;

"drop"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1Capabilities, "io.k8s.api.core.v1.Capabilities", addSchema);

export {
  IIoK8sApiCoreV1Capabilities as ICapabilities,
  IoK8sApiCoreV1Capabilities as Capabilities
};
