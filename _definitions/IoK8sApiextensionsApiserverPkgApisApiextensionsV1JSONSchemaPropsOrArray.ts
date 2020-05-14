
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray.ts";

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray {
}

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray {
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray as IJSONSchemaPropsOrArray,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray as JSONSchemaPropsOrArray
};
