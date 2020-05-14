
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation.ts";

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation {
"description"?: string;
"url"?: string;
}

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation {
"description"?: string;
"url"?: string;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation as IExternalDocumentation,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation as ExternalDocumentation
};
