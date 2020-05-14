
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.ts";

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation {
/**
 * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
 */
"openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation {

"openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation as ICustomResourceValidation,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation as CustomResourceValidation
};
