
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON.ts";

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON {
}

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON {
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON as IJSON,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON as JSON
};
