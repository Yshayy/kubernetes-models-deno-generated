
import { IIoK8sApiDiscoveryV1beta1EndpointConditions } from "./IoK8sApiDiscoveryV1beta1EndpointConditions.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiDiscoveryV1beta1Endpoint.ts";

/**
 * Endpoint represents a single logical "backend" implementing a service.
 */
export interface IIoK8sApiDiscoveryV1beta1Endpoint {
/**
 * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100.
 */
"addresses": Array<string>;
/**
 * conditions contains information about the current status of the endpoint.
 */
"conditions"?: IIoK8sApiDiscoveryV1beta1EndpointConditions;
/**
 * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must pass DNS Label (RFC 1123) validation.
 */
"hostname"?: string;
/**
 * targetRef is a reference to a Kubernetes object that represents this endpoint.
 */
"targetRef"?: IIoK8sApiCoreV1ObjectReference;
/**
 * topology contains arbitrary topology information associated with the endpoint. These key/value pairs must conform with the label format. https://kubernetes.io/docs/concepts/overview/working-with-objects/labels Topology may include a maximum of 16 key/value pairs. This includes, but is not limited to the following well known keys: \* kubernetes.io/hostname: the value indicates the hostname of the node
 *   where the endpoint is located. This should match the corresponding
 *   node label.
 * \* topology.kubernetes.io/zone: the value indicates the zone where the
 *   endpoint is located. This should match the corresponding node label.
 * \* topology.kubernetes.io/region: the value indicates the region where the
 *   endpoint is located. This should match the corresponding node label.
 */
"topology"?: {
[key: string]: string;
};
}

/**
 * Endpoint represents a single logical "backend" implementing a service.
 */
export class IoK8sApiDiscoveryV1beta1Endpoint extends Model<IIoK8sApiDiscoveryV1beta1Endpoint> implements IIoK8sApiDiscoveryV1beta1Endpoint {

"addresses": Array<string>;

"conditions"?: IIoK8sApiDiscoveryV1beta1EndpointConditions;

"hostname"?: string;

"targetRef"?: IIoK8sApiCoreV1ObjectReference;

"topology"?: {
[key: string]: string;
};
}

Model.setSchema(IoK8sApiDiscoveryV1beta1Endpoint, "io.k8s.api.discovery.v1beta1.Endpoint", addSchema);

export {
  IIoK8sApiDiscoveryV1beta1Endpoint as IEndpoint,
  IoK8sApiDiscoveryV1beta1Endpoint as Endpoint
};
