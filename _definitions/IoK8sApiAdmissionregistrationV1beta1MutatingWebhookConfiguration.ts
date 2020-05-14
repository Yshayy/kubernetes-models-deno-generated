
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook } from "./IoK8sApiAdmissionregistrationV1beta1MutatingWebhook.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration.ts";

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead.
 */
export interface IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "MutatingWebhookConfiguration";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Webhooks is a list of webhooks and the affected resources and operations.
 */
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead.
 */
export class IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration extends Model<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration> implements IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration {

apiVersion: IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["apiVersion"] = IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["apiVersion"];

kind: IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["kind"] = IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1MutatingWebhook>;

static apiVersion: IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration["kind"] = "MutatingWebhookConfiguration";
}

Model.setSchema(IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration, "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration as IMutatingWebhookConfiguration,
  IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration as MutatingWebhookConfiguration
};
