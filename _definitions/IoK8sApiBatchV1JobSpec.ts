
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiBatchV1JobSpec.ts";

/**
 * JobSpec describes how the job execution will look like.
 */
export interface IIoK8sApiBatchV1JobSpec {
/**
 * Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
 */
"activeDeadlineSeconds"?: number;
/**
 * Specifies the number of retries before marking this job failed. Defaults to 6
 */
"backoffLimit"?: number;
/**
 * Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
 */
"completions"?: number;
/**
 * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
 */
"manualSelector"?: boolean;
/**
 * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
 */
"parallelism"?: number;
/**
 * A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * Describes the pod that will be created when executing a job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
 */
"template": IIoK8sApiCoreV1PodTemplateSpec;
/**
 * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature.
 */
"ttlSecondsAfterFinished"?: number;
}

/**
 * JobSpec describes how the job execution will look like.
 */
export class IoK8sApiBatchV1JobSpec extends Model<IIoK8sApiBatchV1JobSpec> implements IIoK8sApiBatchV1JobSpec {

"activeDeadlineSeconds"?: number;

"backoffLimit"?: number;

"completions"?: number;

"manualSelector"?: boolean;

"parallelism"?: number;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"template": IIoK8sApiCoreV1PodTemplateSpec;

"ttlSecondsAfterFinished"?: number;
}

Model.setSchema(IoK8sApiBatchV1JobSpec, "io.k8s.api.batch.v1.JobSpec", addSchema);

export {
  IIoK8sApiBatchV1JobSpec as IJobSpec,
  IoK8sApiBatchV1JobSpec as JobSpec
};
