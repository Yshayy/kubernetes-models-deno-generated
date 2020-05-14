
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1NonResourceAttributes.ts";

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface IIoK8sApiAuthorizationV1beta1NonResourceAttributes {
/**
 * Path is the URL path of the request
 */
"path"?: string;
/**
 * Verb is the standard HTTP verb
 */
"verb"?: string;
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export class IoK8sApiAuthorizationV1beta1NonResourceAttributes extends Model<IIoK8sApiAuthorizationV1beta1NonResourceAttributes> implements IIoK8sApiAuthorizationV1beta1NonResourceAttributes {

"path"?: string;

"verb"?: string;
}

Model.setSchema(IoK8sApiAuthorizationV1beta1NonResourceAttributes, "io.k8s.api.authorization.v1beta1.NonResourceAttributes", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1NonResourceAttributes as INonResourceAttributes,
  IoK8sApiAuthorizationV1beta1NonResourceAttributes as NonResourceAttributes
};
