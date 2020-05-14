
import { IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.ts";

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
/**
 * Current service state of apiService.
 */
"conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {

"conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus as IAPIServiceStatus,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus as APIServiceStatus
};
