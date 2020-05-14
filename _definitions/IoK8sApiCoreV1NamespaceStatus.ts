
import { IIoK8sApiCoreV1NamespaceCondition } from "./IoK8sApiCoreV1NamespaceCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NamespaceStatus.ts";

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface IIoK8sApiCoreV1NamespaceStatus {
/**
 * Represents the latest available observations of a namespace's current state.
 */
"conditions"?: Array<IIoK8sApiCoreV1NamespaceCondition>;
/**
 * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
 */
"phase"?: string;
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export class IoK8sApiCoreV1NamespaceStatus extends Model<IIoK8sApiCoreV1NamespaceStatus> implements IIoK8sApiCoreV1NamespaceStatus {

"conditions"?: Array<IIoK8sApiCoreV1NamespaceCondition>;

"phase"?: string;
}

Model.setSchema(IoK8sApiCoreV1NamespaceStatus, "io.k8s.api.core.v1.NamespaceStatus", addSchema);

export {
  IIoK8sApiCoreV1NamespaceStatus as INamespaceStatus,
  IoK8sApiCoreV1NamespaceStatus as NamespaceStatus
};
