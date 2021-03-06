
import { IIoK8sApiAppsV1ControllerRevision } from "./IoK8sApiAppsV1ControllerRevision.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ControllerRevisionList.ts";

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface IIoK8sApiAppsV1ControllerRevisionList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Items is the list of ControllerRevisions
 */
"items": Array<IIoK8sApiAppsV1ControllerRevision>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ControllerRevisionList";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export class IoK8sApiAppsV1ControllerRevisionList extends Model<IIoK8sApiAppsV1ControllerRevisionList> implements IIoK8sApiAppsV1ControllerRevisionList {

apiVersion: IIoK8sApiAppsV1ControllerRevisionList["apiVersion"] = IoK8sApiAppsV1ControllerRevisionList["apiVersion"];

"items": Array<IIoK8sApiAppsV1ControllerRevision>;

kind: IIoK8sApiAppsV1ControllerRevisionList["kind"] = IoK8sApiAppsV1ControllerRevisionList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAppsV1ControllerRevisionList["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1ControllerRevisionList["kind"] = "ControllerRevisionList";
}

Model.setSchema(IoK8sApiAppsV1ControllerRevisionList, "io.k8s.api.apps.v1.ControllerRevisionList", addSchema);

export {
  IIoK8sApiAppsV1ControllerRevisionList as IControllerRevisionList,
  IoK8sApiAppsV1ControllerRevisionList as ControllerRevisionList
};
