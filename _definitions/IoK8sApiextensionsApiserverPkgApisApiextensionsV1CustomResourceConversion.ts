
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.ts";

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion {
/**
 * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
 *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
 */
"strategy": string;
/**
 * webhook describes how to call the conversion webhook. Required when `strategy` is set to `Webhook`.
 */
"webhook"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;
}

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion {

"strategy": string;

"webhook"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion as ICustomResourceConversion,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion as CustomResourceConversion
};
