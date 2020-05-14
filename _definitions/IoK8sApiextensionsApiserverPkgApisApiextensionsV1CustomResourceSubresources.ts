
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.ts";

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources {
/**
 * scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
 */
"scale"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;
/**
 * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
 */
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus;
}

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources {

"scale"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;

"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources as ICustomResourceSubresources,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources as CustomResourceSubresources
};
