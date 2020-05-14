
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus.ts";

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus {
/**
 * acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.
 */
"acceptedNames"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;
/**
 * conditions indicate state for particular aspects of a CustomResourceDefinition
 */
"conditions"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition>;
/**
 * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
 */
"storedVersions"?: Array<string>;
}

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus {

"acceptedNames"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;

"conditions"?: Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition>;

"storedVersions"?: Array<string>;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionStatus", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus as ICustomResourceDefinitionStatus,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus as CustomResourceDefinitionStatus
};
