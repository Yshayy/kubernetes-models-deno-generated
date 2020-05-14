
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1HostAlias.ts";

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export interface IIoK8sApiCoreV1HostAlias {
/**
 * Hostnames for the above IP address.
 */
"hostnames"?: Array<string>;
/**
 * IP address of the host file entry.
 */
"ip"?: string;
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export class IoK8sApiCoreV1HostAlias extends Model<IIoK8sApiCoreV1HostAlias> implements IIoK8sApiCoreV1HostAlias {

"hostnames"?: Array<string>;

"ip"?: string;
}

Model.setSchema(IoK8sApiCoreV1HostAlias, "io.k8s.api.core.v1.HostAlias", addSchema);

export {
  IIoK8sApiCoreV1HostAlias as IHostAlias,
  IoK8sApiCoreV1HostAlias as HostAlias
};
