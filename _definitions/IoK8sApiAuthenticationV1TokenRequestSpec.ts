
import { IIoK8sApiAuthenticationV1BoundObjectReference } from "./IoK8sApiAuthenticationV1BoundObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1TokenRequestSpec.ts";

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export interface IIoK8sApiAuthenticationV1TokenRequestSpec {
/**
 * Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
 */
"audiences": Array<string>;
/**
 * BoundObjectRef is a reference to an object that the token will be bound to. The token will only be valid for as long as the bound object exists. NOTE: The API server's TokenReview endpoint will validate the BoundObjectRef, but other audiences may not. Keep ExpirationSeconds small if you want prompt revocation.
 */
"boundObjectRef"?: IIoK8sApiAuthenticationV1BoundObjectReference;
/**
 * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
 */
"expirationSeconds"?: number;
}

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export class IoK8sApiAuthenticationV1TokenRequestSpec extends Model<IIoK8sApiAuthenticationV1TokenRequestSpec> implements IIoK8sApiAuthenticationV1TokenRequestSpec {

"audiences": Array<string>;

"boundObjectRef"?: IIoK8sApiAuthenticationV1BoundObjectReference;

"expirationSeconds"?: number;
}

Model.setSchema(IoK8sApiAuthenticationV1TokenRequestSpec, "io.k8s.api.authentication.v1.TokenRequestSpec", addSchema);

export {
  IIoK8sApiAuthenticationV1TokenRequestSpec as ITokenRequestSpec,
  IoK8sApiAuthenticationV1TokenRequestSpec as TokenRequestSpec
};
