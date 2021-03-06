
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1EndpointSubset } from "./IoK8sApiCoreV1EndpointSubset.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Endpoints.ts";

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *   Name: "mysvc",
 *   Subsets: [
 *     {
 *       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *     },
 *     {
 *       Addresses: [{"ip": "10.10.3.3"}],
 *       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 *     },
 *  ]
 */
export interface IIoK8sApiCoreV1Endpoints {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Endpoints";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
 */
"subsets"?: Array<IIoK8sApiCoreV1EndpointSubset>;
}

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *   Name: "mysvc",
 *   Subsets: [
 *     {
 *       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *     },
 *     {
 *       Addresses: [{"ip": "10.10.3.3"}],
 *       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 *     },
 *  ]
 */
export class IoK8sApiCoreV1Endpoints extends Model<IIoK8sApiCoreV1Endpoints> implements IIoK8sApiCoreV1Endpoints {

apiVersion: IIoK8sApiCoreV1Endpoints["apiVersion"] = IoK8sApiCoreV1Endpoints["apiVersion"];

kind: IIoK8sApiCoreV1Endpoints["kind"] = IoK8sApiCoreV1Endpoints["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"subsets"?: Array<IIoK8sApiCoreV1EndpointSubset>;

static apiVersion: IIoK8sApiCoreV1Endpoints["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Endpoints["kind"] = "Endpoints";
}

Model.setSchema(IoK8sApiCoreV1Endpoints, "io.k8s.api.core.v1.Endpoints", addSchema);

export {
  IIoK8sApiCoreV1Endpoints as IEndpoints,
  IoK8sApiCoreV1Endpoints as Endpoints
};
