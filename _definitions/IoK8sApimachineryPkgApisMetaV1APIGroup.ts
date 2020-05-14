
import { IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from "./IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.ts";

import { IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from "./IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1APIGroup.ts";

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export interface IIoK8sApimachineryPkgApisMetaV1APIGroup {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIGroup";
/**
 * name is the name of the group.
 */
"name": string;
/**
 * preferredVersion is the version preferred by the API server, which probably is the storage version.
 */
"preferredVersion"?: IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
/**
 * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
 */
"serverAddressByClientCIDRs"?: Array<IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
/**
 * versions are the versions supported in this group.
 */
"versions": Array<IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>;
}

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export class IoK8sApimachineryPkgApisMetaV1APIGroup extends Model<IIoK8sApimachineryPkgApisMetaV1APIGroup> implements IIoK8sApimachineryPkgApisMetaV1APIGroup {

apiVersion: IIoK8sApimachineryPkgApisMetaV1APIGroup["apiVersion"] = IoK8sApimachineryPkgApisMetaV1APIGroup["apiVersion"];

kind: IIoK8sApimachineryPkgApisMetaV1APIGroup["kind"] = IoK8sApimachineryPkgApisMetaV1APIGroup["kind"];

"name": string;

"preferredVersion"?: IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;

"serverAddressByClientCIDRs"?: Array<IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;

"versions": Array<IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>;

static apiVersion: IIoK8sApimachineryPkgApisMetaV1APIGroup["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1APIGroup["kind"] = "APIGroup";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1APIGroup, "io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1APIGroup as IAPIGroup,
  IoK8sApimachineryPkgApisMetaV1APIGroup as APIGroup
};
