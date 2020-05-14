
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthenticationV1TokenReviewSpec } from "./IoK8sApiAuthenticationV1TokenReviewSpec.ts";

import { IIoK8sApiAuthenticationV1TokenReviewStatus } from "./IoK8sApiAuthenticationV1TokenReviewStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1TokenReview.ts";

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface IIoK8sApiAuthenticationV1TokenReview {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authentication.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "TokenReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated
 */
"spec": IIoK8sApiAuthenticationV1TokenReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request can be authenticated.
 */
"status"?: IIoK8sApiAuthenticationV1TokenReviewStatus;
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export class IoK8sApiAuthenticationV1TokenReview extends Model<IIoK8sApiAuthenticationV1TokenReview> implements IIoK8sApiAuthenticationV1TokenReview {

apiVersion: IIoK8sApiAuthenticationV1TokenReview["apiVersion"] = IoK8sApiAuthenticationV1TokenReview["apiVersion"];

kind: IIoK8sApiAuthenticationV1TokenReview["kind"] = IoK8sApiAuthenticationV1TokenReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiAuthenticationV1TokenReviewSpec;

"status"?: IIoK8sApiAuthenticationV1TokenReviewStatus;

static apiVersion: IIoK8sApiAuthenticationV1TokenReview["apiVersion"] = "authentication.k8s.io/v1";
static kind: IIoK8sApiAuthenticationV1TokenReview["kind"] = "TokenReview";
}

Model.setSchema(IoK8sApiAuthenticationV1TokenReview, "io.k8s.api.authentication.v1.TokenReview", addSchema);

export {
  IIoK8sApiAuthenticationV1TokenReview as ITokenReview,
  IoK8sApiAuthenticationV1TokenReview as TokenReview
};
