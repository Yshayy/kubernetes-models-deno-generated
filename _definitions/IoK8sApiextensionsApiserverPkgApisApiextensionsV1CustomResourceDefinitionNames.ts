
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.ts";

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
/**
 * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
 */
"categories"?: Array<string>;
/**
 * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
 */
"kind": string;
/**
 * listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
 */
"listKind"?: string;
/**
 * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
 */
"plural": string;
/**
 * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
 */
"shortNames"?: Array<string>;
/**
 * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
 */
"singular"?: string;
}

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {

"categories"?: Array<string>;

"kind": string;

"listKind"?: string;

"plural": string;

"shortNames"?: Array<string>;

"singular"?: string;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames as ICustomResourceDefinitionNames,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames as CustomResourceDefinitionNames
};
