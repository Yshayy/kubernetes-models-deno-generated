
import { IIoK8sApiCoreV1Node } from "./IoK8sApiCoreV1Node.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeList.ts";

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export interface IIoK8sApiCoreV1NodeList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of nodes
 */
"items": Array<IIoK8sApiCoreV1Node>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "NodeList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export class IoK8sApiCoreV1NodeList extends Model<IIoK8sApiCoreV1NodeList> implements IIoK8sApiCoreV1NodeList {

apiVersion: IIoK8sApiCoreV1NodeList["apiVersion"] = IoK8sApiCoreV1NodeList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Node>;

kind: IIoK8sApiCoreV1NodeList["kind"] = IoK8sApiCoreV1NodeList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1NodeList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1NodeList["kind"] = "NodeList";
}

Model.setSchema(IoK8sApiCoreV1NodeList, "io.k8s.api.core.v1.NodeList", addSchema);

export {
  IIoK8sApiCoreV1NodeList as INodeList,
  IoK8sApiCoreV1NodeList as NodeList
};
