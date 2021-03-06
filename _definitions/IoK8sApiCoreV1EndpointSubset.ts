
import { IIoK8sApiCoreV1EndpointAddress } from "./IoK8sApiCoreV1EndpointAddress.ts";

import { IIoK8sApiCoreV1EndpointPort } from "./IoK8sApiCoreV1EndpointPort.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EndpointSubset.ts";

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 *   {
 *     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *   }
 * The resulting set of endpoints can be viewed as:
 *     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 *     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 */
export interface IIoK8sApiCoreV1EndpointSubset {
/**
 * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
 */
"addresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
/**
 * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
 */
"notReadyAddresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;
/**
 * Port numbers available on the related IP addresses.
 */
"ports"?: Array<IIoK8sApiCoreV1EndpointPort>;
}

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 *   {
 *     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *   }
 * The resulting set of endpoints can be viewed as:
 *     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 *     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 */
export class IoK8sApiCoreV1EndpointSubset extends Model<IIoK8sApiCoreV1EndpointSubset> implements IIoK8sApiCoreV1EndpointSubset {

"addresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;

"notReadyAddresses"?: Array<IIoK8sApiCoreV1EndpointAddress>;

"ports"?: Array<IIoK8sApiCoreV1EndpointPort>;
}

Model.setSchema(IoK8sApiCoreV1EndpointSubset, "io.k8s.api.core.v1.EndpointSubset", addSchema);

export {
  IIoK8sApiCoreV1EndpointSubset as IEndpointSubset,
  IoK8sApiCoreV1EndpointSubset as EndpointSubset
};
