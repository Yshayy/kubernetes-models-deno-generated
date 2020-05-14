
import { IIoK8sApiCoreV1TopologySelectorLabelRequirement } from "./IoK8sApiCoreV1TopologySelectorLabelRequirement.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1TopologySelectorTerm.ts";

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export interface IIoK8sApiCoreV1TopologySelectorTerm {
/**
 * A list of topology selector requirements by labels.
 */
"matchLabelExpressions"?: Array<IIoK8sApiCoreV1TopologySelectorLabelRequirement>;
}

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export class IoK8sApiCoreV1TopologySelectorTerm extends Model<IIoK8sApiCoreV1TopologySelectorTerm> implements IIoK8sApiCoreV1TopologySelectorTerm {

"matchLabelExpressions"?: Array<IIoK8sApiCoreV1TopologySelectorLabelRequirement>;
}

Model.setSchema(IoK8sApiCoreV1TopologySelectorTerm, "io.k8s.api.core.v1.TopologySelectorTerm", addSchema);

export {
  IIoK8sApiCoreV1TopologySelectorTerm as ITopologySelectorTerm,
  IoK8sApiCoreV1TopologySelectorTerm as TopologySelectorTerm
};
