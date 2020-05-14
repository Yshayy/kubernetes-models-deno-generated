
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1ServiceReference.ts";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IIoK8sApiAdmissionregistrationV1ServiceReference {
/**
 * `name` is the name of the service. Required
 */
"name": string;
/**
 * `namespace` is the namespace of the service. Required
 */
"namespace": string;
/**
 * `path` is an optional URL path which will be sent in any request to this service.
 */
"path"?: string;
/**
 * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
 */
"port"?: number;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class IoK8sApiAdmissionregistrationV1ServiceReference extends Model<IIoK8sApiAdmissionregistrationV1ServiceReference> implements IIoK8sApiAdmissionregistrationV1ServiceReference {

"name": string;

"namespace": string;

"path"?: string;

"port"?: number;
}

Model.setSchema(IoK8sApiAdmissionregistrationV1ServiceReference, "io.k8s.api.admissionregistration.v1.ServiceReference", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1ServiceReference as IServiceReference,
  IoK8sApiAdmissionregistrationV1ServiceReference as ServiceReference
};
