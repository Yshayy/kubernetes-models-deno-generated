
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1StatusCause.ts";

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export interface IIoK8sApimachineryPkgApisMetaV1StatusCause {
/**
 * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
 * 
 * Examples:
 *   "name" - the field "name" on the current resource
 *   "items[0].name" - the field "name" on the first array entry in "items"
 */
"field"?: string;
/**
 * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
 */
"message"?: string;
/**
 * A machine-readable description of the cause of the error. If this value is empty there is no information available.
 */
"reason"?: string;
}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export class IoK8sApimachineryPkgApisMetaV1StatusCause extends Model<IIoK8sApimachineryPkgApisMetaV1StatusCause> implements IIoK8sApimachineryPkgApisMetaV1StatusCause {

"field"?: string;

"message"?: string;

"reason"?: string;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1StatusCause, "io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1StatusCause as IStatusCause,
  IoK8sApimachineryPkgApisMetaV1StatusCause as StatusCause
};
