
import { IIoK8sApimachineryPkgApisMetaV1APIResource } from "./IoK8sApimachineryPkgApisMetaV1APIResource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1APIResourceList.ts";

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export interface IIoK8sApimachineryPkgApisMetaV1APIResourceList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * groupVersion is the group and version this APIResourceList is for.
 */
"groupVersion": string;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIResourceList";
/**
 * resources contains the name of the resources and if they are namespaced.
 */
"resources": Array<IIoK8sApimachineryPkgApisMetaV1APIResource>;
}

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export class IoK8sApimachineryPkgApisMetaV1APIResourceList extends Model<IIoK8sApimachineryPkgApisMetaV1APIResourceList> implements IIoK8sApimachineryPkgApisMetaV1APIResourceList {

apiVersion: IIoK8sApimachineryPkgApisMetaV1APIResourceList["apiVersion"] = IoK8sApimachineryPkgApisMetaV1APIResourceList["apiVersion"];

"groupVersion": string;

kind: IIoK8sApimachineryPkgApisMetaV1APIResourceList["kind"] = IoK8sApimachineryPkgApisMetaV1APIResourceList["kind"];

"resources": Array<IIoK8sApimachineryPkgApisMetaV1APIResource>;

static apiVersion: IIoK8sApimachineryPkgApisMetaV1APIResourceList["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1APIResourceList["kind"] = "APIResourceList";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1APIResourceList, "io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1APIResourceList as IAPIResourceList,
  IoK8sApimachineryPkgApisMetaV1APIResourceList as APIResourceList
};
