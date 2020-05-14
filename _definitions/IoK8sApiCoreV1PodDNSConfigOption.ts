
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodDNSConfigOption.ts";

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface IIoK8sApiCoreV1PodDNSConfigOption {
/**
 * Required.
 */
"name"?: string;
"value"?: string;
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export class IoK8sApiCoreV1PodDNSConfigOption extends Model<IIoK8sApiCoreV1PodDNSConfigOption> implements IIoK8sApiCoreV1PodDNSConfigOption {

"name"?: string;
"value"?: string;
}

Model.setSchema(IoK8sApiCoreV1PodDNSConfigOption, "io.k8s.api.core.v1.PodDNSConfigOption", addSchema);

export {
  IIoK8sApiCoreV1PodDNSConfigOption as IPodDNSConfigOption,
  IoK8sApiCoreV1PodDNSConfigOption as PodDNSConfigOption
};
