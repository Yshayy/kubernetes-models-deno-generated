
import { IIoK8sApimachineryPkgRuntimeRawExtension } from "./IoK8sApimachineryPkgRuntimeRawExtension.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1WatchEvent.ts";

/**
 * Event represents a single event to a watched resource.
 */
export interface IIoK8sApimachineryPkgApisMetaV1WatchEvent {
/**
 * Object is:
 *  \* If Type is Added or Modified: the new state of the object.
 *  \* If Type is Deleted: the state of the object immediately before deletion.
 *  \* If Type is Error: \*Status is recommended; other types may make sense
 *    depending on context.
 */
"object": IIoK8sApimachineryPkgRuntimeRawExtension;
"type": string;
"apiVersion": "v1";
"kind": "WatchEvent";
}

/**
 * Event represents a single event to a watched resource.
 */
export class IoK8sApimachineryPkgApisMetaV1WatchEvent extends Model<IIoK8sApimachineryPkgApisMetaV1WatchEvent> implements IIoK8sApimachineryPkgApisMetaV1WatchEvent {

"object": IIoK8sApimachineryPkgRuntimeRawExtension;
"type": string;
apiVersion: IIoK8sApimachineryPkgApisMetaV1WatchEvent["apiVersion"] = IoK8sApimachineryPkgApisMetaV1WatchEvent["apiVersion"];
kind: IIoK8sApimachineryPkgApisMetaV1WatchEvent["kind"] = IoK8sApimachineryPkgApisMetaV1WatchEvent["kind"];

static apiVersion: IIoK8sApimachineryPkgApisMetaV1WatchEvent["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1WatchEvent["kind"] = "WatchEvent";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1WatchEvent, "io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1WatchEvent as IWatchEvent,
  IoK8sApimachineryPkgApisMetaV1WatchEvent as WatchEvent
};
