
import { IIoK8sApimachineryPkgApisMetaV1StatusCause } from "./IoK8sApimachineryPkgApisMetaV1StatusCause.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1StatusDetails.ts";

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export interface IIoK8sApimachineryPkgApisMetaV1StatusDetails {
/**
 * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
 */
"causes"?: Array<IIoK8sApimachineryPkgApisMetaV1StatusCause>;
/**
 * The group attribute of the resource associated with the status StatusReason.
 */
"group"?: string;
/**
 * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind"?: string;
/**
 * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
 */
"name"?: string;
/**
 * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
 */
"retryAfterSeconds"?: number;
/**
 * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
 */
"uid"?: string;
}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export class IoK8sApimachineryPkgApisMetaV1StatusDetails extends Model<IIoK8sApimachineryPkgApisMetaV1StatusDetails> implements IIoK8sApimachineryPkgApisMetaV1StatusDetails {

"causes"?: Array<IIoK8sApimachineryPkgApisMetaV1StatusCause>;

"group"?: string;

"kind"?: string;

"name"?: string;

"retryAfterSeconds"?: number;

"uid"?: string;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1StatusDetails, "io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1StatusDetails as IStatusDetails,
  IoK8sApimachineryPkgApisMetaV1StatusDetails as StatusDetails
};
