
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1DaemonEndpoint.ts";

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export interface IIoK8sApiCoreV1DaemonEndpoint {
/**
 * Port number of the given endpoint.
 */
"Port": number;
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export class IoK8sApiCoreV1DaemonEndpoint extends Model<IIoK8sApiCoreV1DaemonEndpoint> implements IIoK8sApiCoreV1DaemonEndpoint {

"Port": number;
}

Model.setSchema(IoK8sApiCoreV1DaemonEndpoint, "io.k8s.api.core.v1.DaemonEndpoint", addSchema);

export {
  IIoK8sApiCoreV1DaemonEndpoint as IDaemonEndpoint,
  IoK8sApiCoreV1DaemonEndpoint as DaemonEndpoint
};
