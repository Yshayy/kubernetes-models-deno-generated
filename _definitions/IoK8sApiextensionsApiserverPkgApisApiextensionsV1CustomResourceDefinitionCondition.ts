
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition.ts";

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition {
/**
 * lastTransitionTime last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is a human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * reason is a unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * status is the status of the condition. Can be True, False, Unknown.
 */
"status": string;
/**
 * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
 */
"type": string;
}

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition as ICustomResourceDefinitionCondition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition as CustomResourceDefinitionCondition
};
