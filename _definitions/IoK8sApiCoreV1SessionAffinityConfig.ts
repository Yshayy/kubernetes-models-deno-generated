
import { IIoK8sApiCoreV1ClientIPConfig } from "./IoK8sApiCoreV1ClientIPConfig.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SessionAffinityConfig.ts";

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface IIoK8sApiCoreV1SessionAffinityConfig {
/**
 * clientIP contains the configurations of Client IP based session affinity.
 */
"clientIP"?: IIoK8sApiCoreV1ClientIPConfig;
}

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export class IoK8sApiCoreV1SessionAffinityConfig extends Model<IIoK8sApiCoreV1SessionAffinityConfig> implements IIoK8sApiCoreV1SessionAffinityConfig {

"clientIP"?: IIoK8sApiCoreV1ClientIPConfig;
}

Model.setSchema(IoK8sApiCoreV1SessionAffinityConfig, "io.k8s.api.core.v1.SessionAffinityConfig", addSchema);

export {
  IIoK8sApiCoreV1SessionAffinityConfig as ISessionAffinityConfig,
  IoK8sApiCoreV1SessionAffinityConfig as SessionAffinityConfig
};
