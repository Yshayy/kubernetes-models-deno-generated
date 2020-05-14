
import { IIoK8sApiCoreV1ConfigMapNodeConfigSource } from "./IoK8sApiCoreV1ConfigMapNodeConfigSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeConfigSource.ts";

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export interface IIoK8sApiCoreV1NodeConfigSource {
/**
 * ConfigMap is a reference to a Node's ConfigMap
 */
"configMap"?: IIoK8sApiCoreV1ConfigMapNodeConfigSource;
}

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export class IoK8sApiCoreV1NodeConfigSource extends Model<IIoK8sApiCoreV1NodeConfigSource> implements IIoK8sApiCoreV1NodeConfigSource {

"configMap"?: IIoK8sApiCoreV1ConfigMapNodeConfigSource;
}

Model.setSchema(IoK8sApiCoreV1NodeConfigSource, "io.k8s.api.core.v1.NodeConfigSource", addSchema);

export {
  IIoK8sApiCoreV1NodeConfigSource as INodeConfigSource,
  IoK8sApiCoreV1NodeConfigSource as NodeConfigSource
};
