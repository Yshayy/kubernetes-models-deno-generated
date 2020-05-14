
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ObjectFieldSelector.ts";

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface IIoK8sApiCoreV1ObjectFieldSelector {
/**
 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
 */
"apiVersion"?: string;
/**
 * Path of the field to select in the specified API version.
 */
"fieldPath": string;
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export class IoK8sApiCoreV1ObjectFieldSelector extends Model<IIoK8sApiCoreV1ObjectFieldSelector> implements IIoK8sApiCoreV1ObjectFieldSelector {

"apiVersion"?: string;

"fieldPath": string;
}

Model.setSchema(IoK8sApiCoreV1ObjectFieldSelector, "io.k8s.api.core.v1.ObjectFieldSelector", addSchema);

export {
  IIoK8sApiCoreV1ObjectFieldSelector as IObjectFieldSelector,
  IoK8sApiCoreV1ObjectFieldSelector as ObjectFieldSelector
};
