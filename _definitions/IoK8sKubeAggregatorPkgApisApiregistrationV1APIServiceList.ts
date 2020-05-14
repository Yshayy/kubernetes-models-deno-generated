
import { IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIService.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList.ts";

/**
 * APIServiceList is a list of APIService objects.
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apiregistration.k8s.io/v1";
"items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIServiceList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * APIServiceList is a list of APIService objects.
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {

apiVersion: IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["apiVersion"] = IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["apiVersion"];
"items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;

kind: IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["kind"] = IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["apiVersion"] = "apiregistration.k8s.io/v1";
static kind: IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList["kind"] = "APIServiceList";
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList as IAPIServiceList,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList as APIServiceList
};
