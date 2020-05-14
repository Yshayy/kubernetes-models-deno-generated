
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiDiscoveryV1beta1EndpointConditions.ts";

/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export interface IIoK8sApiDiscoveryV1beta1EndpointConditions {
/**
 * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready.
 */
"ready"?: boolean;
}

/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export class IoK8sApiDiscoveryV1beta1EndpointConditions extends Model<IIoK8sApiDiscoveryV1beta1EndpointConditions> implements IIoK8sApiDiscoveryV1beta1EndpointConditions {

"ready"?: boolean;
}

Model.setSchema(IoK8sApiDiscoveryV1beta1EndpointConditions, "io.k8s.api.discovery.v1beta1.EndpointConditions", addSchema);

export {
  IIoK8sApiDiscoveryV1beta1EndpointConditions as IEndpointConditions,
  IoK8sApiDiscoveryV1beta1EndpointConditions as EndpointConditions
};
