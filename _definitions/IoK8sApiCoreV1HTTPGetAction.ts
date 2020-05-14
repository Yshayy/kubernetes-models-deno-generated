
import { IIoK8sApiCoreV1HTTPHeader } from "./IoK8sApiCoreV1HTTPHeader.ts";

import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1HTTPGetAction.ts";

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export interface IIoK8sApiCoreV1HTTPGetAction {
/**
 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
 */
"host"?: string;
/**
 * Custom headers to set in the request. HTTP allows repeated headers.
 */
"httpHeaders"?: Array<IIoK8sApiCoreV1HTTPHeader>;
/**
 * Path to access on the HTTP server.
 */
"path"?: string;
/**
 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
 */
"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * Scheme to use for connecting to the host. Defaults to HTTP.
 */
"scheme"?: string;
}

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export class IoK8sApiCoreV1HTTPGetAction extends Model<IIoK8sApiCoreV1HTTPGetAction> implements IIoK8sApiCoreV1HTTPGetAction {

"host"?: string;

"httpHeaders"?: Array<IIoK8sApiCoreV1HTTPHeader>;

"path"?: string;

"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;

"scheme"?: string;
}

Model.setSchema(IoK8sApiCoreV1HTTPGetAction, "io.k8s.api.core.v1.HTTPGetAction", addSchema);

export {
  IIoK8sApiCoreV1HTTPGetAction as IHTTPGetAction,
  IoK8sApiCoreV1HTTPGetAction as HTTPGetAction
};
