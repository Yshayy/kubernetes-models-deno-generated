
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1TokenRequestStatus.ts";

/**
 * TokenRequestStatus is the result of a token request.
 */
export interface IIoK8sApiAuthenticationV1TokenRequestStatus {
/**
 * ExpirationTimestamp is the time of expiration of the returned token.
 */
"expirationTimestamp": IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Token is the opaque bearer token.
 */
"token": string;
}

/**
 * TokenRequestStatus is the result of a token request.
 */
export class IoK8sApiAuthenticationV1TokenRequestStatus extends Model<IIoK8sApiAuthenticationV1TokenRequestStatus> implements IIoK8sApiAuthenticationV1TokenRequestStatus {

"expirationTimestamp": IIoK8sApimachineryPkgApisMetaV1Time;

"token": string;
}

Model.setSchema(IoK8sApiAuthenticationV1TokenRequestStatus, "io.k8s.api.authentication.v1.TokenRequestStatus", addSchema);

export {
  IIoK8sApiAuthenticationV1TokenRequestStatus as ITokenRequestStatus,
  IoK8sApiAuthenticationV1TokenRequestStatus as TokenRequestStatus
};
