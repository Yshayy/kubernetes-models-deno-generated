
import { IIoK8sApiFlowcontrolV1alpha1QueuingConfiguration } from "./IoK8sApiFlowcontrolV1alpha1QueuingConfiguration.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1LimitResponse.ts";

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export interface IIoK8sApiFlowcontrolV1alpha1LimitResponse {
/**
 * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.
 */
"queuing"?: IIoK8sApiFlowcontrolV1alpha1QueuingConfiguration;
/**
 * `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
 */
"type": string;
}

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export class IoK8sApiFlowcontrolV1alpha1LimitResponse extends Model<IIoK8sApiFlowcontrolV1alpha1LimitResponse> implements IIoK8sApiFlowcontrolV1alpha1LimitResponse {

"queuing"?: IIoK8sApiFlowcontrolV1alpha1QueuingConfiguration;

"type": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1LimitResponse, "io.k8s.api.flowcontrol.v1alpha1.LimitResponse", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1LimitResponse as ILimitResponse,
  IoK8sApiFlowcontrolV1alpha1LimitResponse as LimitResponse
};
