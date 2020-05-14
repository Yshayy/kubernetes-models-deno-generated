
import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EventSeries.ts";

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface IIoK8sApiCoreV1EventSeries {
/**
 * Number of occurrences in this series up to the last heartbeat time
 */
"count"?: number;
/**
 * Time of the last occurrence observed
 */
"lastObservedTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * State of this Series: Ongoing or Finished Deprecated. Planned removal for 1.18
 */
"state"?: string;
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class IoK8sApiCoreV1EventSeries extends Model<IIoK8sApiCoreV1EventSeries> implements IIoK8sApiCoreV1EventSeries {

"count"?: number;

"lastObservedTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;

"state"?: string;
}

Model.setSchema(IoK8sApiCoreV1EventSeries, "io.k8s.api.core.v1.EventSeries", addSchema);

export {
  IIoK8sApiCoreV1EventSeries as IEventSeries,
  IoK8sApiCoreV1EventSeries as EventSeries
};
