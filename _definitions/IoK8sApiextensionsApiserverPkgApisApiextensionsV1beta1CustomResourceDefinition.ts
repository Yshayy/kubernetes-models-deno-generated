
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition.ts";

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.19. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apiextensions.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CustomResourceDefinition";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec describes how the user wants the resources to appear
 */
"spec": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec;
/**
 * status indicates the actual state of the CustomResourceDefinition
 */
"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus;
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.19. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition {

apiVersion: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["apiVersion"] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["apiVersion"];

kind: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["kind"] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec;

"status"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus;

static apiVersion: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["apiVersion"] = "apiextensions.k8s.io/v1beta1";
static kind: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition["kind"] = "CustomResourceDefinition";
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition as ICustomResourceDefinition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition as CustomResourceDefinition
};
