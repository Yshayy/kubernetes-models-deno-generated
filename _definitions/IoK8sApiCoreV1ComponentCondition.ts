
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ComponentCondition.ts";

/**
 * Information about the condition of a component.
 */
export interface IIoK8sApiCoreV1ComponentCondition {
/**
 * Condition error code for a component. For example, a health check error code.
 */
"error"?: string;
/**
 * Message about the condition for a component. For example, information about a health check.
 */
"message"?: string;
/**
 * Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
 */
"status": string;
/**
 * Type of condition for a component. Valid value: "Healthy"
 */
"type": string;
}

/**
 * Information about the condition of a component.
 */
export class IoK8sApiCoreV1ComponentCondition extends Model<IIoK8sApiCoreV1ComponentCondition> implements IIoK8sApiCoreV1ComponentCondition {

"error"?: string;

"message"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1ComponentCondition, "io.k8s.api.core.v1.ComponentCondition", addSchema);

export {
  IIoK8sApiCoreV1ComponentCondition as IComponentCondition,
  IoK8sApiCoreV1ComponentCondition as ComponentCondition
};
