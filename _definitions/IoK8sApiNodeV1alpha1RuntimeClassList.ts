
import { IIoK8sApiNodeV1alpha1RuntimeClass } from "./IoK8sApiNodeV1alpha1RuntimeClass.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1alpha1RuntimeClassList.ts";

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export interface IIoK8sApiNodeV1alpha1RuntimeClassList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "node.k8s.io/v1alpha1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiNodeV1alpha1RuntimeClass>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RuntimeClassList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export class IoK8sApiNodeV1alpha1RuntimeClassList extends Model<IIoK8sApiNodeV1alpha1RuntimeClassList> implements IIoK8sApiNodeV1alpha1RuntimeClassList {

apiVersion: IIoK8sApiNodeV1alpha1RuntimeClassList["apiVersion"] = IoK8sApiNodeV1alpha1RuntimeClassList["apiVersion"];

"items": Array<IIoK8sApiNodeV1alpha1RuntimeClass>;

kind: IIoK8sApiNodeV1alpha1RuntimeClassList["kind"] = IoK8sApiNodeV1alpha1RuntimeClassList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiNodeV1alpha1RuntimeClassList["apiVersion"] = "node.k8s.io/v1alpha1";
static kind: IIoK8sApiNodeV1alpha1RuntimeClassList["kind"] = "RuntimeClassList";
}

Model.setSchema(IoK8sApiNodeV1alpha1RuntimeClassList, "io.k8s.api.node.v1alpha1.RuntimeClassList", addSchema);

export {
  IIoK8sApiNodeV1alpha1RuntimeClassList as IRuntimeClassList,
  IoK8sApiNodeV1alpha1RuntimeClassList as RuntimeClassList
};
