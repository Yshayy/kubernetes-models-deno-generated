
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1AllowedHostPath.ts";

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export interface IIoK8sApiPolicyV1beta1AllowedHostPath {
/**
 * pathPrefix is the path prefix that the host volume must match. It does not support `\*`. Trailing slashes are trimmed when validating the path prefix with a host path.
 * 
 * Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
 */
"pathPrefix"?: string;
/**
 * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
 */
"readOnly"?: boolean;
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export class IoK8sApiPolicyV1beta1AllowedHostPath extends Model<IIoK8sApiPolicyV1beta1AllowedHostPath> implements IIoK8sApiPolicyV1beta1AllowedHostPath {

"pathPrefix"?: string;

"readOnly"?: boolean;
}

Model.setSchema(IoK8sApiPolicyV1beta1AllowedHostPath, "io.k8s.api.policy.v1beta1.AllowedHostPath", addSchema);

export {
  IIoK8sApiPolicyV1beta1AllowedHostPath as IAllowedHostPath,
  IoK8sApiPolicyV1beta1AllowedHostPath as AllowedHostPath
};
