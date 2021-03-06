
import { IIoK8sApimachineryPkgApisMetaV1StatusDetails } from "./IoK8sApimachineryPkgApisMetaV1StatusDetails.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1Status.ts";

/**
 * Status is a return value for calls that don't return other objects.
 */
export interface IIoK8sApimachineryPkgApisMetaV1Status {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Suggested HTTP return code for this status, 0 if not set.
 */
"code"?: number;
/**
 * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
 */
"details"?: IIoK8sApimachineryPkgApisMetaV1StatusDetails;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Status";
/**
 * A human-readable description of the status of this operation.
 */
"message"?: string;
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
/**
 * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
 */
"reason"?: string;
/**
 * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: string;
}

/**
 * Status is a return value for calls that don't return other objects.
 */
export class IoK8sApimachineryPkgApisMetaV1Status extends Model<IIoK8sApimachineryPkgApisMetaV1Status> implements IIoK8sApimachineryPkgApisMetaV1Status {

apiVersion: IIoK8sApimachineryPkgApisMetaV1Status["apiVersion"] = IoK8sApimachineryPkgApisMetaV1Status["apiVersion"];

"code"?: number;

"details"?: IIoK8sApimachineryPkgApisMetaV1StatusDetails;

kind: IIoK8sApimachineryPkgApisMetaV1Status["kind"] = IoK8sApimachineryPkgApisMetaV1Status["kind"];

"message"?: string;

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

"reason"?: string;

"status"?: string;

static apiVersion: IIoK8sApimachineryPkgApisMetaV1Status["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1Status["kind"] = "Status";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1Status, "io.k8s.apimachinery.pkg.apis.meta.v1.Status", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1Status as IStatus,
  IoK8sApimachineryPkgApisMetaV1Status as Status
};
