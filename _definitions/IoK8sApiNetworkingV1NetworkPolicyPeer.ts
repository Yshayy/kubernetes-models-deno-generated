
import { IIoK8sApiNetworkingV1IPBlock } from "./IoK8sApiNetworkingV1IPBlock.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1NetworkPolicyPeer.ts";

/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export interface IIoK8sApiNetworkingV1NetworkPolicyPeer {
/**
 * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
 */
"ipBlock"?: IIoK8sApiNetworkingV1IPBlock;
/**
 * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
 * 
 * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
 */
"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
 * 
 * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
 */
"podSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export class IoK8sApiNetworkingV1NetworkPolicyPeer extends Model<IIoK8sApiNetworkingV1NetworkPolicyPeer> implements IIoK8sApiNetworkingV1NetworkPolicyPeer {

"ipBlock"?: IIoK8sApiNetworkingV1IPBlock;

"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"podSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

Model.setSchema(IoK8sApiNetworkingV1NetworkPolicyPeer, "io.k8s.api.networking.v1.NetworkPolicyPeer", addSchema);

export {
  IIoK8sApiNetworkingV1NetworkPolicyPeer as INetworkPolicyPeer,
  IoK8sApiNetworkingV1NetworkPolicyPeer as NetworkPolicyPeer
};
