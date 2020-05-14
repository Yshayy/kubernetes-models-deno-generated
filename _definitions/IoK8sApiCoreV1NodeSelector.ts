
import { IIoK8sApiCoreV1NodeSelectorTerm } from "./IoK8sApiCoreV1NodeSelectorTerm.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeSelector.ts";

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export interface IIoK8sApiCoreV1NodeSelector {
/**
 * Required. A list of node selector terms. The terms are ORed.
 */
"nodeSelectorTerms": Array<IIoK8sApiCoreV1NodeSelectorTerm>;
}

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export class IoK8sApiCoreV1NodeSelector extends Model<IIoK8sApiCoreV1NodeSelector> implements IIoK8sApiCoreV1NodeSelector {

"nodeSelectorTerms": Array<IIoK8sApiCoreV1NodeSelectorTerm>;
}

Model.setSchema(IoK8sApiCoreV1NodeSelector, "io.k8s.api.core.v1.NodeSelector", addSchema);

export {
  IIoK8sApiCoreV1NodeSelector as INodeSelector,
  IoK8sApiCoreV1NodeSelector as NodeSelector
};
