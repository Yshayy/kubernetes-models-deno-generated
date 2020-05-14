
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON.ts";

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON {
}

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON {
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON as IJSON,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON as JSON
};
