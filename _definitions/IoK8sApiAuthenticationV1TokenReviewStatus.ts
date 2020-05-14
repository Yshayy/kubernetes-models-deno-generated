
import { IIoK8sApiAuthenticationV1UserInfo } from "./IoK8sApiAuthenticationV1UserInfo.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1TokenReviewStatus.ts";

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export interface IIoK8sApiAuthenticationV1TokenReviewStatus {
/**
 * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
 */
"audiences"?: Array<string>;
/**
 * Authenticated indicates that the token was associated with a known user.
 */
"authenticated"?: boolean;
/**
 * Error indicates that the token couldn't be checked
 */
"error"?: string;
/**
 * User is the UserInfo associated with the provided token.
 */
"user"?: IIoK8sApiAuthenticationV1UserInfo;
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export class IoK8sApiAuthenticationV1TokenReviewStatus extends Model<IIoK8sApiAuthenticationV1TokenReviewStatus> implements IIoK8sApiAuthenticationV1TokenReviewStatus {

"audiences"?: Array<string>;

"authenticated"?: boolean;

"error"?: string;

"user"?: IIoK8sApiAuthenticationV1UserInfo;
}

Model.setSchema(IoK8sApiAuthenticationV1TokenReviewStatus, "io.k8s.api.authentication.v1.TokenReviewStatus", addSchema);

export {
  IIoK8sApiAuthenticationV1TokenReviewStatus as ITokenReviewStatus,
  IoK8sApiAuthenticationV1TokenReviewStatus as TokenReviewStatus
};
