
import { IIoK8sApiCoreV1Namespace } from "./IoK8sApiCoreV1Namespace.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NamespaceList.ts";

/**
 * NamespaceList is a list of Namespaces.
 */
export interface IIoK8sApiCoreV1NamespaceList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
 */
"items": Array<IIoK8sApiCoreV1Namespace>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "NamespaceList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NamespaceList is a list of Namespaces.
 */
export class IoK8sApiCoreV1NamespaceList extends Model<IIoK8sApiCoreV1NamespaceList> implements IIoK8sApiCoreV1NamespaceList {

apiVersion: IIoK8sApiCoreV1NamespaceList["apiVersion"] = IoK8sApiCoreV1NamespaceList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Namespace>;

kind: IIoK8sApiCoreV1NamespaceList["kind"] = IoK8sApiCoreV1NamespaceList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1NamespaceList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1NamespaceList["kind"] = "NamespaceList";
}

Model.setSchema(IoK8sApiCoreV1NamespaceList, "io.k8s.api.core.v1.NamespaceList", addSchema);

export {
  IIoK8sApiCoreV1NamespaceList as INamespaceList,
  IoK8sApiCoreV1NamespaceList as NamespaceList
};
