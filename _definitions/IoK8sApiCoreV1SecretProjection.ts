
import { IIoK8sApiCoreV1KeyToPath } from "./IoK8sApiCoreV1KeyToPath.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecretProjection.ts";

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export interface IIoK8sApiCoreV1SecretProjection {
/**
 * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
 */
"items"?: Array<IIoK8sApiCoreV1KeyToPath>;
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the Secret or its key must be defined
 */
"optional"?: boolean;
}

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export class IoK8sApiCoreV1SecretProjection extends Model<IIoK8sApiCoreV1SecretProjection> implements IIoK8sApiCoreV1SecretProjection {

"items"?: Array<IIoK8sApiCoreV1KeyToPath>;

"name"?: string;

"optional"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1SecretProjection, "io.k8s.api.core.v1.SecretProjection", addSchema);

export {
  IIoK8sApiCoreV1SecretProjection as ISecretProjection,
  IoK8sApiCoreV1SecretProjection as SecretProjection
};
