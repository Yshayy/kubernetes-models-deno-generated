
import { IIoK8sApiCoreV1PodDNSConfigOption } from "./IoK8sApiCoreV1PodDNSConfigOption.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodDNSConfig.ts";

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export interface IIoK8sApiCoreV1PodDNSConfig {
/**
 * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
 */
"nameservers"?: Array<string>;
/**
 * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
 */
"options"?: Array<IIoK8sApiCoreV1PodDNSConfigOption>;
/**
 * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
 */
"searches"?: Array<string>;
}

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export class IoK8sApiCoreV1PodDNSConfig extends Model<IIoK8sApiCoreV1PodDNSConfig> implements IIoK8sApiCoreV1PodDNSConfig {

"nameservers"?: Array<string>;

"options"?: Array<IIoK8sApiCoreV1PodDNSConfigOption>;

"searches"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1PodDNSConfig, "io.k8s.api.core.v1.PodDNSConfig", addSchema);

export {
  IIoK8sApiCoreV1PodDNSConfig as IPodDNSConfig,
  IoK8sApiCoreV1PodDNSConfig as PodDNSConfig
};
