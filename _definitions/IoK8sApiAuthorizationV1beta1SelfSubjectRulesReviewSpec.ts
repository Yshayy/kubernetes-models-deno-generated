
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec.ts";

export interface IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec {
/**
 * Namespace to evaluate rules for. Required.
 */
"namespace"?: string;
}

export class IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec extends Model<IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec> implements IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec {

"namespace"?: string;
}

Model.setSchema(IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec, "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReviewSpec", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec as ISelfSubjectRulesReviewSpec,
  IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec as SelfSubjectRulesReviewSpec
};
