
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.ts";

/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export interface IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {
/**
 * The CIDR with which clients can match their IP to figure out the server address that they should use.
 */
"clientCIDR": string;
/**
 * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
 */
"serverAddress": string;
}

/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export class IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR extends Model<IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR> implements IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {

"clientCIDR": string;

"serverAddress": string;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR, "io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR as IServerAddressByClientCIDR,
  IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR as ServerAddressByClientCIDR
};
