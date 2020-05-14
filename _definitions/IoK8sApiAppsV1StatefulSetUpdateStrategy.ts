
import { IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from "./IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSetUpdateStrategy.ts";

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface IIoK8sApiAppsV1StatefulSetUpdateStrategy {
/**
 * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
 */
"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
/**
 * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export class IoK8sApiAppsV1StatefulSetUpdateStrategy extends Model<IIoK8sApiAppsV1StatefulSetUpdateStrategy> implements IIoK8sApiAppsV1StatefulSetUpdateStrategy {

"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateStatefulSetStrategy;

"type"?: string;
}

Model.setSchema(IoK8sApiAppsV1StatefulSetUpdateStrategy, "io.k8s.api.apps.v1.StatefulSetUpdateStrategy", addSchema);

export {
  IIoK8sApiAppsV1StatefulSetUpdateStrategy as IStatefulSetUpdateStrategy,
  IoK8sApiAppsV1StatefulSetUpdateStrategy as StatefulSetUpdateStrategy
};
