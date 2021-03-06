
import { IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from "./IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1APIVersions.ts";

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export interface IIoK8sApimachineryPkgApisMetaV1APIVersions {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIVersions";
/**
 * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
 */
"serverAddressByClientCIDRs": Array<IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
/**
 * versions are the api versions that are available.
 */
"versions": Array<string>;
}

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export class IoK8sApimachineryPkgApisMetaV1APIVersions extends Model<IIoK8sApimachineryPkgApisMetaV1APIVersions> implements IIoK8sApimachineryPkgApisMetaV1APIVersions {

apiVersion: IIoK8sApimachineryPkgApisMetaV1APIVersions["apiVersion"] = IoK8sApimachineryPkgApisMetaV1APIVersions["apiVersion"];

kind: IIoK8sApimachineryPkgApisMetaV1APIVersions["kind"] = IoK8sApimachineryPkgApisMetaV1APIVersions["kind"];

"serverAddressByClientCIDRs": Array<IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;

"versions": Array<string>;

static apiVersion: IIoK8sApimachineryPkgApisMetaV1APIVersions["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1APIVersions["kind"] = "APIVersions";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1APIVersions, "io.k8s.apimachinery.pkg.apis.meta.v1.APIVersions", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1APIVersions as IAPIVersions,
  IoK8sApimachineryPkgApisMetaV1APIVersions as APIVersions
};
