
import { IIoK8sApimachineryPkgApisMetaV1APIGroup } from "./IoK8sApimachineryPkgApisMetaV1APIGroup.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1APIGroupList.ts";

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export interface IIoK8sApimachineryPkgApisMetaV1APIGroupList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * groups is a list of APIGroup.
 */
"groups": Array<IIoK8sApimachineryPkgApisMetaV1APIGroup>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "APIGroupList";
}

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export class IoK8sApimachineryPkgApisMetaV1APIGroupList extends Model<IIoK8sApimachineryPkgApisMetaV1APIGroupList> implements IIoK8sApimachineryPkgApisMetaV1APIGroupList {

apiVersion: IIoK8sApimachineryPkgApisMetaV1APIGroupList["apiVersion"] = IoK8sApimachineryPkgApisMetaV1APIGroupList["apiVersion"];

"groups": Array<IIoK8sApimachineryPkgApisMetaV1APIGroup>;

kind: IIoK8sApimachineryPkgApisMetaV1APIGroupList["kind"] = IoK8sApimachineryPkgApisMetaV1APIGroupList["kind"];

static apiVersion: IIoK8sApimachineryPkgApisMetaV1APIGroupList["apiVersion"] = "v1";
static kind: IIoK8sApimachineryPkgApisMetaV1APIGroupList["kind"] = "APIGroupList";
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1APIGroupList, "io.k8s.apimachinery.pkg.apis.meta.v1.APIGroupList", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1APIGroupList as IAPIGroupList,
  IoK8sApimachineryPkgApisMetaV1APIGroupList as APIGroupList
};
