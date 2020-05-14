
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.ts";

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
/**
 * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
 */
"additionalPrinterColumns"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>;
/**
 * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
 */
"name": string;
/**
 * schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.
 */
"schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;
/**
 * served is a flag enabling/disabling this version from being served via REST APIs
 */
"served": boolean;
/**
 * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
 */
"storage": boolean;
/**
 * subresources specify what subresources this version of the defined custom resource have.
 */
"subresources"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;
}

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {

"additionalPrinterColumns"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>;

"name": string;

"schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;

"served": boolean;

"storage": boolean;

"subresources"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion as ICustomResourceDefinitionVersion,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion as CustomResourceDefinitionVersion
};
