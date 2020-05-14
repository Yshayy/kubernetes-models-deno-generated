
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecretReference.ts";

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export interface IIoK8sApiCoreV1SecretReference {
/**
 * Name is unique within a namespace to reference a secret resource.
 */
"name"?: string;
/**
 * Namespace defines the space within which the secret name must be unique.
 */
"namespace"?: string;
}

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export class IoK8sApiCoreV1SecretReference extends Model<IIoK8sApiCoreV1SecretReference> implements IIoK8sApiCoreV1SecretReference {

"name"?: string;

"namespace"?: string;
}

Model.setSchema(IoK8sApiCoreV1SecretReference, "io.k8s.api.core.v1.SecretReference", addSchema);

export {
  IIoK8sApiCoreV1SecretReference as ISecretReference,
  IoK8sApiCoreV1SecretReference as SecretReference
};
