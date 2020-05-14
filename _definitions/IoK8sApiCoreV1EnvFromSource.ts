
import { IIoK8sApiCoreV1ConfigMapEnvSource } from "./IoK8sApiCoreV1ConfigMapEnvSource.ts";

import { IIoK8sApiCoreV1SecretEnvSource } from "./IoK8sApiCoreV1SecretEnvSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EnvFromSource.ts";

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export interface IIoK8sApiCoreV1EnvFromSource {
/**
 * The ConfigMap to select from
 */
"configMapRef"?: IIoK8sApiCoreV1ConfigMapEnvSource;
/**
 * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
 */
"prefix"?: string;
/**
 * The Secret to select from
 */
"secretRef"?: IIoK8sApiCoreV1SecretEnvSource;
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export class IoK8sApiCoreV1EnvFromSource extends Model<IIoK8sApiCoreV1EnvFromSource> implements IIoK8sApiCoreV1EnvFromSource {

"configMapRef"?: IIoK8sApiCoreV1ConfigMapEnvSource;

"prefix"?: string;

"secretRef"?: IIoK8sApiCoreV1SecretEnvSource;
}

Model.setSchema(IoK8sApiCoreV1EnvFromSource, "io.k8s.api.core.v1.EnvFromSource", addSchema);

export {
  IIoK8sApiCoreV1EnvFromSource as IEnvFromSource,
  IoK8sApiCoreV1EnvFromSource as EnvFromSource
};
