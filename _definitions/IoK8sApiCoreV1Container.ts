
import { IIoK8sApiCoreV1EnvVar } from "./IoK8sApiCoreV1EnvVar.ts";

import { IIoK8sApiCoreV1EnvFromSource } from "./IoK8sApiCoreV1EnvFromSource.ts";

import { IIoK8sApiCoreV1Lifecycle } from "./IoK8sApiCoreV1Lifecycle.ts";

import { IIoK8sApiCoreV1Probe } from "./IoK8sApiCoreV1Probe.ts";

import { IIoK8sApiCoreV1ContainerPort } from "./IoK8sApiCoreV1ContainerPort.ts";

import { IIoK8sApiCoreV1ResourceRequirements } from "./IoK8sApiCoreV1ResourceRequirements.ts";

import { IIoK8sApiCoreV1SecurityContext } from "./IoK8sApiCoreV1SecurityContext.ts";

import { IIoK8sApiCoreV1VolumeDevice } from "./IoK8sApiCoreV1VolumeDevice.ts";

import { IIoK8sApiCoreV1VolumeMount } from "./IoK8sApiCoreV1VolumeMount.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Container.ts";

/**
 * A single application container that you want to run within a pod.
 */
export interface IIoK8sApiCoreV1Container {
/**
 * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
 */
"args"?: Array<string>;
/**
 * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
 */
"command"?: Array<string>;
/**
 * List of environment variables to set in the container. Cannot be updated.
 */
"env"?: Array<IIoK8sApiCoreV1EnvVar>;
/**
 * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
 */
"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;
/**
 * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
 */
"image"?: string;
/**
 * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
 */
"imagePullPolicy"?: string;
/**
 * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
 */
"lifecycle"?: IIoK8sApiCoreV1Lifecycle;
/**
 * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 */
"livenessProbe"?: IIoK8sApiCoreV1Probe;
/**
 * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
 */
"name": string;
/**
 * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
 */
"ports"?: Array<IIoK8sApiCoreV1ContainerPort>;
/**
 * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 */
"readinessProbe"?: IIoK8sApiCoreV1Probe;
/**
 * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
 */
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
/**
 * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
 */
"securityContext"?: IIoK8sApiCoreV1SecurityContext;
/**
 * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 */
"startupProbe"?: IIoK8sApiCoreV1Probe;
/**
 * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
 */
"stdin"?: boolean;
/**
 * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
 */
"stdinOnce"?: boolean;
/**
 * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
 */
"terminationMessagePath"?: string;
/**
 * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
 */
"terminationMessagePolicy"?: string;
/**
 * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
 */
"tty"?: boolean;
/**
 * volumeDevices is the list of block devices to be used by the container.
 */
"volumeDevices"?: Array<IIoK8sApiCoreV1VolumeDevice>;
/**
 * Pod volumes to mount into the container's filesystem. Cannot be updated.
 */
"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;
/**
 * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
 */
"workingDir"?: string;
}

/**
 * A single application container that you want to run within a pod.
 */
export class IoK8sApiCoreV1Container extends Model<IIoK8sApiCoreV1Container> implements IIoK8sApiCoreV1Container {

"args"?: Array<string>;

"command"?: Array<string>;

"env"?: Array<IIoK8sApiCoreV1EnvVar>;

"envFrom"?: Array<IIoK8sApiCoreV1EnvFromSource>;

"image"?: string;

"imagePullPolicy"?: string;

"lifecycle"?: IIoK8sApiCoreV1Lifecycle;

"livenessProbe"?: IIoK8sApiCoreV1Probe;

"name": string;

"ports"?: Array<IIoK8sApiCoreV1ContainerPort>;

"readinessProbe"?: IIoK8sApiCoreV1Probe;

"resources"?: IIoK8sApiCoreV1ResourceRequirements;

"securityContext"?: IIoK8sApiCoreV1SecurityContext;

"startupProbe"?: IIoK8sApiCoreV1Probe;

"stdin"?: boolean;

"stdinOnce"?: boolean;

"terminationMessagePath"?: string;

"terminationMessagePolicy"?: string;

"tty"?: boolean;

"volumeDevices"?: Array<IIoK8sApiCoreV1VolumeDevice>;

"volumeMounts"?: Array<IIoK8sApiCoreV1VolumeMount>;

"workingDir"?: string;
}

Model.setSchema(IoK8sApiCoreV1Container, "io.k8s.api.core.v1.Container", addSchema);

export {
  IIoK8sApiCoreV1Container as IContainer,
  IoK8sApiCoreV1Container as Container
};
