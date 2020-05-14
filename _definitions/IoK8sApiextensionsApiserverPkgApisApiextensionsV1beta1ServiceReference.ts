
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference.ts";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference {
/**
 * name is the name of the service. Required
 */
"name": string;
/**
 * namespace is the namespace of the service. Required
 */
"namespace": string;
/**
 * path is an optional URL path at which the webhook will be contacted.
 */
"path"?: string;
/**
 * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
 */
"port"?: number;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference {

"name": string;

"namespace": string;

"path"?: string;

"port"?: number;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ServiceReference", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference as IServiceReference,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference as ServiceReference
};
