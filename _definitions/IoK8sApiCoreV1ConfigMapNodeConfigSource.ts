
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ConfigMapNodeConfigSource.ts";

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export interface IIoK8sApiCoreV1ConfigMapNodeConfigSource {
/**
 * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
 */
"kubeletConfigKey": string;
/**
 * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
 */
"name": string;
/**
 * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
 */
"namespace": string;
/**
 * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
 */
"resourceVersion"?: string;
/**
 * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
 */
"uid"?: string;
}

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export class IoK8sApiCoreV1ConfigMapNodeConfigSource extends Model<IIoK8sApiCoreV1ConfigMapNodeConfigSource> implements IIoK8sApiCoreV1ConfigMapNodeConfigSource {

"kubeletConfigKey": string;

"name": string;

"namespace": string;

"resourceVersion"?: string;

"uid"?: string;
}

Model.setSchema(IoK8sApiCoreV1ConfigMapNodeConfigSource, "io.k8s.api.core.v1.ConfigMapNodeConfigSource", addSchema);

export {
  IIoK8sApiCoreV1ConfigMapNodeConfigSource as IConfigMapNodeConfigSource,
  IoK8sApiCoreV1ConfigMapNodeConfigSource as ConfigMapNodeConfigSource
};
