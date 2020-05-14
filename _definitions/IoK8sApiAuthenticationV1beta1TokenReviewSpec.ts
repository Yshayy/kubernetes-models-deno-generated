
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1beta1TokenReviewSpec.ts";

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface IIoK8sApiAuthenticationV1beta1TokenReviewSpec {
/**
 * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
 */
"audiences"?: Array<string>;
/**
 * Token is the opaque bearer token.
 */
"token"?: string;
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export class IoK8sApiAuthenticationV1beta1TokenReviewSpec extends Model<IIoK8sApiAuthenticationV1beta1TokenReviewSpec> implements IIoK8sApiAuthenticationV1beta1TokenReviewSpec {

"audiences"?: Array<string>;

"token"?: string;
}

Model.setSchema(IoK8sApiAuthenticationV1beta1TokenReviewSpec, "io.k8s.api.authentication.v1beta1.TokenReviewSpec", addSchema);

export {
  IIoK8sApiAuthenticationV1beta1TokenReviewSpec as ITokenReviewSpec,
  IoK8sApiAuthenticationV1beta1TokenReviewSpec as TokenReviewSpec
};
