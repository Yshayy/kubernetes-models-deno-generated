
import { IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration } from "./IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList.ts";

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export interface IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "admissionregistration.k8s.io/v1";
/**
 * List of ValidatingWebhookConfiguration.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ValidatingWebhookConfigurationList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export class IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList extends Model<IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList> implements IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {

apiVersion: IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["apiVersion"] = IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["apiVersion"];

"items": Array<IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration>;

kind: IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["kind"] = IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList["kind"] = "ValidatingWebhookConfigurationList";
}

Model.setSchema(IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList, "io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList as IValidatingWebhookConfigurationList,
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList as ValidatingWebhookConfigurationList
};
