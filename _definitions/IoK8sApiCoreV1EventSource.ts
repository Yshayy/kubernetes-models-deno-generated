
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EventSource.ts";

/**
 * EventSource contains information for an event.
 */
export interface IIoK8sApiCoreV1EventSource {
/**
 * Component from which the event is generated.
 */
"component"?: string;
/**
 * Node name on which the event is generated.
 */
"host"?: string;
}

/**
 * EventSource contains information for an event.
 */
export class IoK8sApiCoreV1EventSource extends Model<IIoK8sApiCoreV1EventSource> implements IIoK8sApiCoreV1EventSource {

"component"?: string;

"host"?: string;
}

Model.setSchema(IoK8sApiCoreV1EventSource, "io.k8s.api.core.v1.EventSource", addSchema);

export {
  IIoK8sApiCoreV1EventSource as IEventSource,
  IoK8sApiCoreV1EventSource as EventSource
};
