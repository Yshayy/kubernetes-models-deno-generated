
import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServiceAccount.ts";

/**
 * ServiceAccount binds together: \* a name, understood by users, and perhaps by peripheral systems, for an identity \* a principal that can be authenticated and authorized \* a set of secrets
 */
export interface IIoK8sApiCoreV1ServiceAccount {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
 */
"automountServiceAccountToken"?: boolean;
/**
 * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
 */
"imagePullSecrets"?: Array<IIoK8sApiCoreV1LocalObjectReference>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ServiceAccount";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
 */
"secrets"?: Array<IIoK8sApiCoreV1ObjectReference>;
}

/**
 * ServiceAccount binds together: \* a name, understood by users, and perhaps by peripheral systems, for an identity \* a principal that can be authenticated and authorized \* a set of secrets
 */
export class IoK8sApiCoreV1ServiceAccount extends Model<IIoK8sApiCoreV1ServiceAccount> implements IIoK8sApiCoreV1ServiceAccount {

apiVersion: IIoK8sApiCoreV1ServiceAccount["apiVersion"] = IoK8sApiCoreV1ServiceAccount["apiVersion"];

"automountServiceAccountToken"?: boolean;

"imagePullSecrets"?: Array<IIoK8sApiCoreV1LocalObjectReference>;

kind: IIoK8sApiCoreV1ServiceAccount["kind"] = IoK8sApiCoreV1ServiceAccount["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"secrets"?: Array<IIoK8sApiCoreV1ObjectReference>;

static apiVersion: IIoK8sApiCoreV1ServiceAccount["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ServiceAccount["kind"] = "ServiceAccount";
}

Model.setSchema(IoK8sApiCoreV1ServiceAccount, "io.k8s.api.core.v1.ServiceAccount", addSchema);

export {
  IIoK8sApiCoreV1ServiceAccount as IServiceAccount,
  IoK8sApiCoreV1ServiceAccount as ServiceAccount
};
