
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecretKeySelector.ts";

/**
 * SecretKeySelector selects a key of a Secret.
 */
export interface IIoK8sApiCoreV1SecretKeySelector {
/**
 * The key of the secret to select from.  Must be a valid secret key.
 */
"key": string;
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
 * SecretKeySelector selects a key of a Secret.
 */
export class IoK8sApiCoreV1SecretKeySelector extends Model<IIoK8sApiCoreV1SecretKeySelector> implements IIoK8sApiCoreV1SecretKeySelector {

"key": string;

"name"?: string;

"optional"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1SecretKeySelector, "io.k8s.api.core.v1.SecretKeySelector", addSchema);

export {
  IIoK8sApiCoreV1SecretKeySelector as ISecretKeySelector,
  IoK8sApiCoreV1SecretKeySelector as SecretKeySelector
};
