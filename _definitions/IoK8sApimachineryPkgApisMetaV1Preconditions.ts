
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1Preconditions.ts";

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export interface IIoK8sApimachineryPkgApisMetaV1Preconditions {
/**
 * Specifies the target ResourceVersion
 */
"resourceVersion"?: string;
/**
 * Specifies the target UID.
 */
"uid"?: string;
}

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export class IoK8sApimachineryPkgApisMetaV1Preconditions extends Model<IIoK8sApimachineryPkgApisMetaV1Preconditions> implements IIoK8sApimachineryPkgApisMetaV1Preconditions {

"resourceVersion"?: string;

"uid"?: string;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1Preconditions, "io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1Preconditions as IPreconditions,
  IoK8sApimachineryPkgApisMetaV1Preconditions as Preconditions
};
