
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SELinuxOptions.ts";

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface IIoK8sApiCoreV1SELinuxOptions {
/**
 * Level is SELinux level label that applies to the container.
 */
"level"?: string;
/**
 * Role is a SELinux role label that applies to the container.
 */
"role"?: string;
/**
 * Type is a SELinux type label that applies to the container.
 */
"type"?: string;
/**
 * User is a SELinux user label that applies to the container.
 */
"user"?: string;
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export class IoK8sApiCoreV1SELinuxOptions extends Model<IIoK8sApiCoreV1SELinuxOptions> implements IIoK8sApiCoreV1SELinuxOptions {

"level"?: string;

"role"?: string;

"type"?: string;

"user"?: string;
}

Model.setSchema(IoK8sApiCoreV1SELinuxOptions, "io.k8s.api.core.v1.SELinuxOptions", addSchema);

export {
  IIoK8sApiCoreV1SELinuxOptions as ISELinuxOptions,
  IoK8sApiCoreV1SELinuxOptions as SELinuxOptions
};
