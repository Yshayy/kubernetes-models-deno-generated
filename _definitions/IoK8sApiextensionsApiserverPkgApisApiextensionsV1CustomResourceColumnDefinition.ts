
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.ts";

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {
/**
 * description is a human readable description of this column.
 */
"description"?: string;
/**
 * format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
 */
"format"?: string;
/**
 * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
 */
"jsonPath": string;
/**
 * name is a human readable name for the column.
 */
"name": string;
/**
 * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
 */
"priority"?: number;
/**
 * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
 */
"type": string;
}

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {

"description"?: string;

"format"?: string;

"jsonPath": string;

"name": string;

"priority"?: number;

"type": string;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition as ICustomResourceColumnDefinition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition as CustomResourceColumnDefinition
};
