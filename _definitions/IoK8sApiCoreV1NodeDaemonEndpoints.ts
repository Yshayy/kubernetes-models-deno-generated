
import { IIoK8sApiCoreV1DaemonEndpoint } from "./IoK8sApiCoreV1DaemonEndpoint.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeDaemonEndpoints.ts";

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface IIoK8sApiCoreV1NodeDaemonEndpoints {
/**
 * Endpoint on which Kubelet is listening.
 */
"kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export class IoK8sApiCoreV1NodeDaemonEndpoints extends Model<IIoK8sApiCoreV1NodeDaemonEndpoints> implements IIoK8sApiCoreV1NodeDaemonEndpoints {

"kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;
}

Model.setSchema(IoK8sApiCoreV1NodeDaemonEndpoints, "io.k8s.api.core.v1.NodeDaemonEndpoints", addSchema);

export {
  IIoK8sApiCoreV1NodeDaemonEndpoints as INodeDaemonEndpoints,
  IoK8sApiCoreV1NodeDaemonEndpoints as NodeDaemonEndpoints
};
