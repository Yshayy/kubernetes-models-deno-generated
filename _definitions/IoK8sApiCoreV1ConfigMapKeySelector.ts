
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ConfigMapKeySelector.ts";

/**
 * Selects a key from a ConfigMap.
 */
export interface IIoK8sApiCoreV1ConfigMapKeySelector {
/**
 * The key to select.
 */
"key": string;
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the ConfigMap or its key must be defined
 */
"optional"?: boolean;
}

/**
 * Selects a key from a ConfigMap.
 */
export class IoK8sApiCoreV1ConfigMapKeySelector extends Model<IIoK8sApiCoreV1ConfigMapKeySelector> implements IIoK8sApiCoreV1ConfigMapKeySelector {

"key": string;

"name"?: string;

"optional"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1ConfigMapKeySelector, "io.k8s.api.core.v1.ConfigMapKeySelector", addSchema);

export {
  IIoK8sApiCoreV1ConfigMapKeySelector as IConfigMapKeySelector,
  IoK8sApiCoreV1ConfigMapKeySelector as ConfigMapKeySelector
};
