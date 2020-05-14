
import { IIoK8sApiCoreV1Toleration } from "./IoK8sApiCoreV1Toleration.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1beta1Scheduling.ts";

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 */
export interface IIoK8sApiNodeV1beta1Scheduling {
/**
 * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
 */
"nodeSelector"?: {
[key: string]: string;
};
/**
 * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
 */
"tolerations"?: Array<IIoK8sApiCoreV1Toleration>;
}

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 */
export class IoK8sApiNodeV1beta1Scheduling extends Model<IIoK8sApiNodeV1beta1Scheduling> implements IIoK8sApiNodeV1beta1Scheduling {

"nodeSelector"?: {
[key: string]: string;
};

"tolerations"?: Array<IIoK8sApiCoreV1Toleration>;
}

Model.setSchema(IoK8sApiNodeV1beta1Scheduling, "io.k8s.api.node.v1beta1.Scheduling", addSchema);

export {
  IIoK8sApiNodeV1beta1Scheduling as IScheduling,
  IoK8sApiNodeV1beta1Scheduling as Scheduling
};
