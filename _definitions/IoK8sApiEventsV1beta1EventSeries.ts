
import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiEventsV1beta1EventSeries.ts";

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface IIoK8sApiEventsV1beta1EventSeries {
/**
 * Number of occurrences in this series up to the last heartbeat time
 */
"count": number;
/**
 * Time when last Event from the series was seen before last heartbeat.
 */
"lastObservedTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18
 */
"state": string;
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class IoK8sApiEventsV1beta1EventSeries extends Model<IIoK8sApiEventsV1beta1EventSeries> implements IIoK8sApiEventsV1beta1EventSeries {

"count": number;

"lastObservedTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;

"state": string;
}

Model.setSchema(IoK8sApiEventsV1beta1EventSeries, "io.k8s.api.events.v1beta1.EventSeries", addSchema);

export {
  IIoK8sApiEventsV1beta1EventSeries as IEventSeries,
  IoK8sApiEventsV1beta1EventSeries as EventSeries
};
