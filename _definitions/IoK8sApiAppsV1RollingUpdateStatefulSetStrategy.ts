
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.ts";

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
/**
 * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
 */
"partition"?: number;
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export class IoK8sApiAppsV1RollingUpdateStatefulSetStrategy extends Model<IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy> implements IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy {

"partition"?: number;
}

Model.setSchema(IoK8sApiAppsV1RollingUpdateStatefulSetStrategy, "io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy", addSchema);

export {
  IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy as IRollingUpdateStatefulSetStrategy,
  IoK8sApiAppsV1RollingUpdateStatefulSetStrategy as RollingUpdateStatefulSetStrategy
};
