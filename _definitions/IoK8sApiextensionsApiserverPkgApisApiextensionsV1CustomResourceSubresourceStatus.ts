
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus.ts";

/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, \* exposes a /status subresource for the custom resource \* PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza \* PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus {
}

/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, \* exposes a /status subresource for the custom resource \* PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza \* PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus {
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus as ICustomResourceSubresourceStatus,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus as CustomResourceSubresourceStatus
};
