
import { IIoK8sApiPolicyV1beta1AllowedCSIDriver } from "./IoK8sApiPolicyV1beta1AllowedCSIDriver.ts";

import { IIoK8sApiPolicyV1beta1AllowedFlexVolume } from "./IoK8sApiPolicyV1beta1AllowedFlexVolume.ts";

import { IIoK8sApiPolicyV1beta1AllowedHostPath } from "./IoK8sApiPolicyV1beta1AllowedHostPath.ts";

import { IIoK8sApiPolicyV1beta1FSGroupStrategyOptions } from "./IoK8sApiPolicyV1beta1FSGroupStrategyOptions.ts";

import { IIoK8sApiPolicyV1beta1HostPortRange } from "./IoK8sApiPolicyV1beta1HostPortRange.ts";

import { IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions } from "./IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions.ts";

import { IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions } from "./IoK8sApiPolicyV1beta1RunAsUserStrategyOptions.ts";

import { IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions } from "./IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions.ts";

import { IIoK8sApiPolicyV1beta1SELinuxStrategyOptions } from "./IoK8sApiPolicyV1beta1SELinuxStrategyOptions.ts";

import { IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions } from "./IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodSecurityPolicySpec.ts";

/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export interface IIoK8sApiPolicyV1beta1PodSecurityPolicySpec {
/**
 * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
 */
"allowPrivilegeEscalation"?: boolean;
/**
 * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate.
 */
"allowedCSIDrivers"?: Array<IIoK8sApiPolicyV1beta1AllowedCSIDriver>;
/**
 * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
 */
"allowedCapabilities"?: Array<string>;
/**
 * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
 */
"allowedFlexVolumes"?: Array<IIoK8sApiPolicyV1beta1AllowedFlexVolume>;
/**
 * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
 */
"allowedHostPaths"?: Array<IIoK8sApiPolicyV1beta1AllowedHostPath>;
/**
 * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
 */
"allowedProcMountTypes"?: Array<string>;
/**
 * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "\*" in which case it is considered as a prefix of allowed sysctls. Single \* means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.
 * 
 * Examples: e.g. "foo/\*" allows "foo/bar", "foo/baz", etc. e.g. "foo.\*" allows "foo.bar", "foo.baz", etc.
 */
"allowedUnsafeSysctls"?: Array<string>;
/**
 * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
 */
"defaultAddCapabilities"?: Array<string>;
/**
 * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
 */
"defaultAllowPrivilegeEscalation"?: boolean;
/**
 * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "\*" in which case it is considered as a prefix of forbidden sysctls. Single \* means all sysctls are forbidden.
 * 
 * Examples: e.g. "foo/\*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.\*" forbids "foo.bar", "foo.baz", etc.
 */
"forbiddenSysctls"?: Array<string>;
/**
 * fsGroup is the strategy that will dictate what fs group is used by the SecurityContext.
 */
"fsGroup": IIoK8sApiPolicyV1beta1FSGroupStrategyOptions;
/**
 * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
 */
"hostIPC"?: boolean;
/**
 * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
 */
"hostNetwork"?: boolean;
/**
 * hostPID determines if the policy allows the use of HostPID in the pod spec.
 */
"hostPID"?: boolean;
/**
 * hostPorts determines which host port ranges are allowed to be exposed.
 */
"hostPorts"?: Array<IIoK8sApiPolicyV1beta1HostPortRange>;
/**
 * privileged determines if a pod can request to be run as privileged.
 */
"privileged"?: boolean;
/**
 * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
 */
"readOnlyRootFilesystem"?: boolean;
/**
 * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
 */
"requiredDropCapabilities"?: Array<string>;
/**
 * RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled.
 */
"runAsGroup"?: IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions;
/**
 * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
 */
"runAsUser": IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions;
/**
 * runtimeClass is the strategy that will dictate the allowable RuntimeClasses for a pod. If this field is omitted, the pod's runtimeClassName field is unrestricted. Enforcement of this field depends on the RuntimeClass feature gate being enabled.
 */
"runtimeClass"?: IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions;
/**
 * seLinux is the strategy that will dictate the allowable labels that may be set.
 */
"seLinux": IIoK8sApiPolicyV1beta1SELinuxStrategyOptions;
/**
 * supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
 */
"supplementalGroups": IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions;
/**
 * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '\*'.
 */
"volumes"?: Array<string>;
}

/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export class IoK8sApiPolicyV1beta1PodSecurityPolicySpec extends Model<IIoK8sApiPolicyV1beta1PodSecurityPolicySpec> implements IIoK8sApiPolicyV1beta1PodSecurityPolicySpec {

"allowPrivilegeEscalation"?: boolean;

"allowedCSIDrivers"?: Array<IIoK8sApiPolicyV1beta1AllowedCSIDriver>;

"allowedCapabilities"?: Array<string>;

"allowedFlexVolumes"?: Array<IIoK8sApiPolicyV1beta1AllowedFlexVolume>;

"allowedHostPaths"?: Array<IIoK8sApiPolicyV1beta1AllowedHostPath>;

"allowedProcMountTypes"?: Array<string>;

"allowedUnsafeSysctls"?: Array<string>;

"defaultAddCapabilities"?: Array<string>;

"defaultAllowPrivilegeEscalation"?: boolean;

"forbiddenSysctls"?: Array<string>;

"fsGroup": IIoK8sApiPolicyV1beta1FSGroupStrategyOptions;

"hostIPC"?: boolean;

"hostNetwork"?: boolean;

"hostPID"?: boolean;

"hostPorts"?: Array<IIoK8sApiPolicyV1beta1HostPortRange>;

"privileged"?: boolean;

"readOnlyRootFilesystem"?: boolean;

"requiredDropCapabilities"?: Array<string>;

"runAsGroup"?: IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions;

"runAsUser": IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions;

"runtimeClass"?: IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions;

"seLinux": IIoK8sApiPolicyV1beta1SELinuxStrategyOptions;

"supplementalGroups": IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions;

"volumes"?: Array<string>;
}

Model.setSchema(IoK8sApiPolicyV1beta1PodSecurityPolicySpec, "io.k8s.api.policy.v1beta1.PodSecurityPolicySpec", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodSecurityPolicySpec as IPodSecurityPolicySpec,
  IoK8sApiPolicyV1beta1PodSecurityPolicySpec as PodSecurityPolicySpec
};
