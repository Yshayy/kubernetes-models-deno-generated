
import { IIoK8sApiCoreV1NodeSelectorRequirement } from "./IoK8sApiCoreV1NodeSelectorRequirement.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeSelectorTerm.ts";

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface IIoK8sApiCoreV1NodeSelectorTerm {
/**
 * A list of node selector requirements by node's labels.
 */
"matchExpressions"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
/**
 * A list of node selector requirements by node's fields.
 */
"matchFields"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
}

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export class IoK8sApiCoreV1NodeSelectorTerm extends Model<IIoK8sApiCoreV1NodeSelectorTerm> implements IIoK8sApiCoreV1NodeSelectorTerm {

"matchExpressions"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;

"matchFields"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
}

Model.setSchema(IoK8sApiCoreV1NodeSelectorTerm, "io.k8s.api.core.v1.NodeSelectorTerm", addSchema);

export {
  IIoK8sApiCoreV1NodeSelectorTerm as INodeSelectorTerm,
  IoK8sApiCoreV1NodeSelectorTerm as NodeSelectorTerm
};
