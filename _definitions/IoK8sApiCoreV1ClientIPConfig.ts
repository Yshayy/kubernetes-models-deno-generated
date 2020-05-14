
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ClientIPConfig.ts";

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export interface IIoK8sApiCoreV1ClientIPConfig {
/**
 * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
 */
"timeoutSeconds"?: number;
}

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export class IoK8sApiCoreV1ClientIPConfig extends Model<IIoK8sApiCoreV1ClientIPConfig> implements IIoK8sApiCoreV1ClientIPConfig {

"timeoutSeconds"?: number;
}

Model.setSchema(IoK8sApiCoreV1ClientIPConfig, "io.k8s.api.core.v1.ClientIPConfig", addSchema);

export {
  IIoK8sApiCoreV1ClientIPConfig as IClientIPConfig,
  IoK8sApiCoreV1ClientIPConfig as ClientIPConfig
};
