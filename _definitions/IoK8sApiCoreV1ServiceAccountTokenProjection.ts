
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServiceAccountTokenProjection.ts";

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export interface IIoK8sApiCoreV1ServiceAccountTokenProjection {
/**
 * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
 */
"audience"?: string;
/**
 * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
 */
"expirationSeconds"?: number;
/**
 * Path is the path relative to the mount point of the file to project the token into.
 */
"path": string;
}

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export class IoK8sApiCoreV1ServiceAccountTokenProjection extends Model<IIoK8sApiCoreV1ServiceAccountTokenProjection> implements IIoK8sApiCoreV1ServiceAccountTokenProjection {

"audience"?: string;

"expirationSeconds"?: number;

"path": string;
}

Model.setSchema(IoK8sApiCoreV1ServiceAccountTokenProjection, "io.k8s.api.core.v1.ServiceAccountTokenProjection", addSchema);

export {
  IIoK8sApiCoreV1ServiceAccountTokenProjection as IServiceAccountTokenProjection,
  IoK8sApiCoreV1ServiceAccountTokenProjection as ServiceAccountTokenProjection
};
