
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.ts";

/**
 * WebhookConversion describes how to call a conversion webhook
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {
/**
 * clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.
 */
"clientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
/**
 * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
 */
"conversionReviewVersions": Array<string>;
}

/**
 * WebhookConversion describes how to call a conversion webhook
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {

"clientConfig"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;

"conversionReviewVersions": Array<string>;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion as IWebhookConversion,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion as WebhookConversion
};
