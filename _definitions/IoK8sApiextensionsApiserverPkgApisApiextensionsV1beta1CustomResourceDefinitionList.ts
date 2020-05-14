
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList.ts";

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apiextensions.k8s.io/v1beta1";
/**
 * items list individual CustomResourceDefinition objects
 */
"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CustomResourceDefinitionList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList {

apiVersion: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["apiVersion"] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["apiVersion"];

"items": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition>;

kind: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["kind"] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["apiVersion"] = "apiextensions.k8s.io/v1beta1";
static kind: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList["kind"] = "CustomResourceDefinitionList";
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList as ICustomResourceDefinitionList,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionList as CustomResourceDefinitionList
};
