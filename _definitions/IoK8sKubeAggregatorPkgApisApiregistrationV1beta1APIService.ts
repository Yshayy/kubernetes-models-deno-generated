
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec.ts";

import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService.ts";

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apiregistration.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIService";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec contains information for locating and communicating with a server
 */
"spec"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec;
/**
 * Status contains derived information about an API server
 */
"status"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus;
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService {

apiVersion: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["apiVersion"] = IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["apiVersion"];

kind: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["kind"] = IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec;

"status"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus;

static apiVersion: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["apiVersion"] = "apiregistration.k8s.io/v1beta1";
static kind: IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService["kind"] = "APIService";
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService as IAPIService,
  IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService as APIService
};
