
import { IIoK8sApiCoreV1NodeSelectorTerm } from "./IoK8sApiCoreV1NodeSelectorTerm.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PreferredSchedulingTerm.ts";

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export interface IIoK8sApiCoreV1PreferredSchedulingTerm {
/**
 * A node selector term, associated with the corresponding weight.
 */
"preference": IIoK8sApiCoreV1NodeSelectorTerm;
/**
 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
 */
"weight": number;
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export class IoK8sApiCoreV1PreferredSchedulingTerm extends Model<IIoK8sApiCoreV1PreferredSchedulingTerm> implements IIoK8sApiCoreV1PreferredSchedulingTerm {

"preference": IIoK8sApiCoreV1NodeSelectorTerm;

"weight": number;
}

Model.setSchema(IoK8sApiCoreV1PreferredSchedulingTerm, "io.k8s.api.core.v1.PreferredSchedulingTerm", addSchema);

export {
  IIoK8sApiCoreV1PreferredSchedulingTerm as IPreferredSchedulingTerm,
  IoK8sApiCoreV1PreferredSchedulingTerm as PreferredSchedulingTerm
};
