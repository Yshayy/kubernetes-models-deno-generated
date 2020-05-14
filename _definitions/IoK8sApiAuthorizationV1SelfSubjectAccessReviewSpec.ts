
import { IIoK8sApiAuthorizationV1NonResourceAttributes } from "./IoK8sApiAuthorizationV1NonResourceAttributes.ts";

import { IIoK8sApiAuthorizationV1ResourceAttributes } from "./IoK8sApiAuthorizationV1ResourceAttributes.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec.ts";

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface IIoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec {
/**
 * NonResourceAttributes describes information for a non-resource access request
 */
"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
/**
 * ResourceAuthorizationAttributes describes information for a resource access request
 */
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export class IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec extends Model<IIoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec> implements IIoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec {

"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;

"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
}

Model.setSchema(IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec, "io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec", addSchema);

export {
  IIoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec as ISelfSubjectAccessReviewSpec,
  IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec as SelfSubjectAccessReviewSpec
};
