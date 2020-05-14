
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.ts";

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export interface IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery {
/**
 * groupVersion specifies the API group and version in the form "group/version"
 */
"groupVersion": string;
/**
 * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
 */
"version": string;
}

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export class IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery extends Model<IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery> implements IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery {

"groupVersion": string;

"version": string;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery, "io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery as IGroupVersionForDiscovery,
  IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery as GroupVersionForDiscovery
};
