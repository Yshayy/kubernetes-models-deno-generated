
import { IIoK8sApiAuthorizationV1NonResourceAttributes } from "./IoK8sApiAuthorizationV1NonResourceAttributes.ts";

import { IIoK8sApiAuthorizationV1ResourceAttributes } from "./IoK8sApiAuthorizationV1ResourceAttributes.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1SubjectAccessReviewSpec.ts";

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface IIoK8sApiAuthorizationV1SubjectAccessReviewSpec {
/**
 * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
 */
"extra"?: {
[key: string]: Array<string>;
};
/**
 * Groups is the groups you're testing for.
 */
"groups"?: Array<string>;
/**
 * NonResourceAttributes describes information for a non-resource access request
 */
"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;
/**
 * ResourceAuthorizationAttributes describes information for a resource access request
 */
"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;
/**
 * UID information about the requesting user.
 */
"uid"?: string;
/**
 * User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
 */
"user"?: string;
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export class IoK8sApiAuthorizationV1SubjectAccessReviewSpec extends Model<IIoK8sApiAuthorizationV1SubjectAccessReviewSpec> implements IIoK8sApiAuthorizationV1SubjectAccessReviewSpec {

"extra"?: {
[key: string]: Array<string>;
};

"groups"?: Array<string>;

"nonResourceAttributes"?: IIoK8sApiAuthorizationV1NonResourceAttributes;

"resourceAttributes"?: IIoK8sApiAuthorizationV1ResourceAttributes;

"uid"?: string;

"user"?: string;
}

Model.setSchema(IoK8sApiAuthorizationV1SubjectAccessReviewSpec, "io.k8s.api.authorization.v1.SubjectAccessReviewSpec", addSchema);

export {
  IIoK8sApiAuthorizationV1SubjectAccessReviewSpec as ISubjectAccessReviewSpec,
  IoK8sApiAuthorizationV1SubjectAccessReviewSpec as SubjectAccessReviewSpec
};
