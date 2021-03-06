
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec.ts";

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec {
/**
 * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If present, this field configures columns for all versions. Top-level and per-version columns are mutually exclusive. If no top-level or per-version columns are specified, a single column displaying the age of the custom resource is used.
 */
"additionalPrinterColumns"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition>;
/**
 * conversion defines conversion settings for the CRD.
 */
"conversion"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion;
/**
 * group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
 */
"group": string;
/**
 * names specify the resource and kind names for the custom resource.
 */
"names": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;
/**
 * preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. If false, schemas must be defined for all versions. Defaults to true in v1beta for backwards compatibility. Deprecated: will be required to be false in v1. Preservation of unknown fields can be specified in the validation schema using the `x-kubernetes-preserve-unknown-fields: true` extension. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details.
 */
"preserveUnknownFields"?: boolean;
/**
 * scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`. Default is `Namespaced`.
 */
"scope": string;
/**
 * subresources specify what subresources the defined custom resource has. If present, this field configures subresources for all versions. Top-level and per-version subresources are mutually exclusive.
 */
"subresources"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources;
/**
 * validation describes the schema used for validation and pruning of the custom resource. If present, this validation schema is used to validate all versions. Top-level and per-version schemas are mutually exclusive.
 */
"validation"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation;
/**
 * version is the API version of the defined custom resource. The custom resources are served under `/apis/<group>/<version>/...`. Must match the name of the first item in the `versions` list if `version` and `versions` are both specified. Optional if `versions` is specified. Deprecated: use `versions` instead.
 */
"version"?: string;
/**
 * versions is the list of all API versions of the defined custom resource. Optional if `version` is specified. The name of the first item in the `versions` list must match the `version` field if `version` and `versions` are both specified. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
 */
"versions"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion>;
}

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec {

"additionalPrinterColumns"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition>;

"conversion"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion;

"group": string;

"names": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;

"preserveUnknownFields"?: boolean;

"scope": string;

"subresources"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources;

"validation"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation;

"version"?: string;

"versions"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion>;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec as ICustomResourceDefinitionSpec,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec as CustomResourceDefinitionSpec
};
