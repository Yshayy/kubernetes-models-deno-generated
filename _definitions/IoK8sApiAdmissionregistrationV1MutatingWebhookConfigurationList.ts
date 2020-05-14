
import { IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration } from "./IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList.ts";

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export interface IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "admissionregistration.k8s.io/v1";
/**
 * List of MutatingWebhookConfiguration.
 */
"items": Array<IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "MutatingWebhookConfigurationList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export class IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList extends Model<IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList> implements IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {

apiVersion: IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["apiVersion"] = IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["apiVersion"];

"items": Array<IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>;

kind: IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["kind"] = IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList["kind"] = "MutatingWebhookConfigurationList";
}

Model.setSchema(IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList, "io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList as IMutatingWebhookConfigurationList,
  IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList as MutatingWebhookConfigurationList
};
