
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool.ts";

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool {
}

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool {
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool as IJSONSchemaPropsOrBool,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool as JSONSchemaPropsOrBool
};
