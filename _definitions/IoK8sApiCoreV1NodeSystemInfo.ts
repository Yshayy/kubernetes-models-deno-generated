
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeSystemInfo.ts";

/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export interface IIoK8sApiCoreV1NodeSystemInfo {
/**
 * The Architecture reported by the node
 */
"architecture": string;
/**
 * Boot ID reported by the node.
 */
"bootID": string;
/**
 * ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0).
 */
"containerRuntimeVersion": string;
/**
 * Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
 */
"kernelVersion": string;
/**
 * KubeProxy Version reported by the node.
 */
"kubeProxyVersion": string;
/**
 * Kubelet Version reported by the node.
 */
"kubeletVersion": string;
/**
 * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
 */
"machineID": string;
/**
 * The Operating System reported by the node
 */
"operatingSystem": string;
/**
 * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
 */
"osImage": string;
/**
 * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-US/Red_Hat_Subscription_Management/1/html/RHSM/getting-system-uuid.html
 */
"systemUUID": string;
}

/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export class IoK8sApiCoreV1NodeSystemInfo extends Model<IIoK8sApiCoreV1NodeSystemInfo> implements IIoK8sApiCoreV1NodeSystemInfo {

"architecture": string;

"bootID": string;

"containerRuntimeVersion": string;

"kernelVersion": string;

"kubeProxyVersion": string;

"kubeletVersion": string;

"machineID": string;

"operatingSystem": string;

"osImage": string;

"systemUUID": string;
}

Model.setSchema(IoK8sApiCoreV1NodeSystemInfo, "io.k8s.api.core.v1.NodeSystemInfo", addSchema);

export {
  IIoK8sApiCoreV1NodeSystemInfo as INodeSystemInfo,
  IoK8sApiCoreV1NodeSystemInfo as NodeSystemInfo
};
