
import { IIoK8sApiCoreV1EnvVarSource } from "./IoK8sApiCoreV1EnvVarSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EnvVar.ts";

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface IIoK8sApiCoreV1EnvVar {
/**
 * Name of the environment variable. Must be a C_IDENTIFIER.
 */
"name": string;
/**
 * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
 */
"value"?: string;
/**
 * Source for the environment variable's value. Cannot be used if value is not empty.
 */
"valueFrom"?: IIoK8sApiCoreV1EnvVarSource;
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export class IoK8sApiCoreV1EnvVar extends Model<IIoK8sApiCoreV1EnvVar> implements IIoK8sApiCoreV1EnvVar {

"name": string;

"value"?: string;

"valueFrom"?: IIoK8sApiCoreV1EnvVarSource;
}

Model.setSchema(IoK8sApiCoreV1EnvVar, "io.k8s.api.core.v1.EnvVar", addSchema);

export {
  IIoK8sApiCoreV1EnvVar as IEnvVar,
  IoK8sApiCoreV1EnvVar as EnvVar
};
