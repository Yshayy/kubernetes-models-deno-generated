
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference.ts";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference {
/**
 * Name is the name of the service
 */
"name"?: string;
/**
 * Namespace is the namespace of the service
 */
"namespace"?: string;
/**
 * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
 */
"port"?: number;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference {

"name"?: string;

"namespace"?: string;

"port"?: number;
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.ServiceReference", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference as IServiceReference,
  IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference as ServiceReference
};
