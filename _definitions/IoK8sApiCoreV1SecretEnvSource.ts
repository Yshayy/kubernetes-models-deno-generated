
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecretEnvSource.ts";

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export interface IIoK8sApiCoreV1SecretEnvSource {
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the Secret must be defined
 */
"optional"?: boolean;
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export class IoK8sApiCoreV1SecretEnvSource extends Model<IIoK8sApiCoreV1SecretEnvSource> implements IIoK8sApiCoreV1SecretEnvSource {

"name"?: string;

"optional"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1SecretEnvSource, "io.k8s.api.core.v1.SecretEnvSource", addSchema);

export {
  IIoK8sApiCoreV1SecretEnvSource as ISecretEnvSource,
  IoK8sApiCoreV1SecretEnvSource as SecretEnvSource
};
