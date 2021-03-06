
import { IIoK8sApiCoreV1ConfigMapKeySelector } from "./IoK8sApiCoreV1ConfigMapKeySelector.ts";

import { IIoK8sApiCoreV1ObjectFieldSelector } from "./IoK8sApiCoreV1ObjectFieldSelector.ts";

import { IIoK8sApiCoreV1ResourceFieldSelector } from "./IoK8sApiCoreV1ResourceFieldSelector.ts";

import { IIoK8sApiCoreV1SecretKeySelector } from "./IoK8sApiCoreV1SecretKeySelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EnvVarSource.ts";

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface IIoK8sApiCoreV1EnvVarSource {
/**
 * Selects a key of a ConfigMap.
 */
"configMapKeyRef"?: IIoK8sApiCoreV1ConfigMapKeySelector;
/**
 * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
 */
"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;
/**
 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
 */
"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;
/**
 * Selects a key of a secret in the pod's namespace
 */
"secretKeyRef"?: IIoK8sApiCoreV1SecretKeySelector;
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export class IoK8sApiCoreV1EnvVarSource extends Model<IIoK8sApiCoreV1EnvVarSource> implements IIoK8sApiCoreV1EnvVarSource {

"configMapKeyRef"?: IIoK8sApiCoreV1ConfigMapKeySelector;

"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;

"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;

"secretKeyRef"?: IIoK8sApiCoreV1SecretKeySelector;
}

Model.setSchema(IoK8sApiCoreV1EnvVarSource, "io.k8s.api.core.v1.EnvVarSource", addSchema);

export {
  IIoK8sApiCoreV1EnvVarSource as IEnvVarSource,
  IoK8sApiCoreV1EnvVarSource as EnvVarSource
};
