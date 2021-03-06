
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1QuobyteVolumeSource.ts";

/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1QuobyteVolumeSource {
/**
 * Group to map volume access to Default is no group
 */
"group"?: string;
/**
 * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
 */
"readOnly"?: boolean;
/**
 * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
 */
"registry": string;
/**
 * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
 */
"tenant"?: string;
/**
 * User to map volume access to Defaults to serivceaccount user
 */
"user"?: string;
/**
 * Volume is a string that references an already created Quobyte volume by name.
 */
"volume": string;
}

/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1QuobyteVolumeSource extends Model<IIoK8sApiCoreV1QuobyteVolumeSource> implements IIoK8sApiCoreV1QuobyteVolumeSource {

"group"?: string;

"readOnly"?: boolean;

"registry": string;

"tenant"?: string;

"user"?: string;

"volume": string;
}

Model.setSchema(IoK8sApiCoreV1QuobyteVolumeSource, "io.k8s.api.core.v1.QuobyteVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1QuobyteVolumeSource as IQuobyteVolumeSource,
  IoK8sApiCoreV1QuobyteVolumeSource as QuobyteVolumeSource
};
