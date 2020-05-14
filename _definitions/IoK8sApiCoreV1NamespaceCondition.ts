
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NamespaceCondition.ts";

/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface IIoK8sApiCoreV1NamespaceCondition {
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of namespace controller condition.
 */
"type": string;
}

/**
 * NamespaceCondition contains details about state of namespace.
 */
export class IoK8sApiCoreV1NamespaceCondition extends Model<IIoK8sApiCoreV1NamespaceCondition> implements IIoK8sApiCoreV1NamespaceCondition {
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1NamespaceCondition, "io.k8s.api.core.v1.NamespaceCondition", addSchema);

export {
  IIoK8sApiCoreV1NamespaceCondition as INamespaceCondition,
  IoK8sApiCoreV1NamespaceCondition as NamespaceCondition
};
