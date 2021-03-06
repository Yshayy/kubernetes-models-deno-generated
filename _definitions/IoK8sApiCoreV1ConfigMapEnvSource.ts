
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ConfigMapEnvSource.ts";

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export interface IIoK8sApiCoreV1ConfigMapEnvSource {
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the ConfigMap must be defined
 */
"optional"?: boolean;
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export class IoK8sApiCoreV1ConfigMapEnvSource extends Model<IIoK8sApiCoreV1ConfigMapEnvSource> implements IIoK8sApiCoreV1ConfigMapEnvSource {

"name"?: string;

"optional"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1ConfigMapEnvSource, "io.k8s.api.core.v1.ConfigMapEnvSource", addSchema);

export {
  IIoK8sApiCoreV1ConfigMapEnvSource as IConfigMapEnvSource,
  IoK8sApiCoreV1ConfigMapEnvSource as ConfigMapEnvSource
};
