
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1Policy.ts";

/**
 * Policy defines the configuration of how audit events are logged
 */
export interface IIoK8sApiAuditregistrationV1alpha1Policy {
/**
 * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
 */
"level": string;
/**
 * Stages is a list of stages for which events are created.
 */
"stages"?: Array<string>;
}

/**
 * Policy defines the configuration of how audit events are logged
 */
export class IoK8sApiAuditregistrationV1alpha1Policy extends Model<IIoK8sApiAuditregistrationV1alpha1Policy> implements IIoK8sApiAuditregistrationV1alpha1Policy {

"level": string;

"stages"?: Array<string>;
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1Policy, "io.k8s.api.auditregistration.v1alpha1.Policy", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1Policy as IPolicy,
  IoK8sApiAuditregistrationV1alpha1Policy as Policy
};
