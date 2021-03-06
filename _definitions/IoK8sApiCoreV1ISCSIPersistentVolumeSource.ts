
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ISCSIPersistentVolumeSource.ts";

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1ISCSIPersistentVolumeSource {
/**
 * whether support iSCSI Discovery CHAP authentication
 */
"chapAuthDiscovery"?: boolean;
/**
 * whether support iSCSI Session CHAP authentication
 */
"chapAuthSession"?: boolean;
/**
 * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
 */
"fsType"?: string;
/**
 * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
 */
"initiatorName"?: string;
/**
 * Target iSCSI Qualified Name.
 */
"iqn": string;
/**
 * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
 */
"iscsiInterface"?: string;
/**
 * iSCSI Target Lun number.
 */
"lun": number;
/**
 * iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
 */
"portals"?: Array<string>;
/**
 * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
 */
"readOnly"?: boolean;
/**
 * CHAP Secret for iSCSI target and initiator authentication
 */
"secretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
 */
"targetPortal": string;
}

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1ISCSIPersistentVolumeSource extends Model<IIoK8sApiCoreV1ISCSIPersistentVolumeSource> implements IIoK8sApiCoreV1ISCSIPersistentVolumeSource {

"chapAuthDiscovery"?: boolean;

"chapAuthSession"?: boolean;

"fsType"?: string;

"initiatorName"?: string;

"iqn": string;

"iscsiInterface"?: string;

"lun": number;

"portals"?: Array<string>;

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1SecretReference;

"targetPortal": string;
}

Model.setSchema(IoK8sApiCoreV1ISCSIPersistentVolumeSource, "io.k8s.api.core.v1.ISCSIPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1ISCSIPersistentVolumeSource as IISCSIPersistentVolumeSource,
  IoK8sApiCoreV1ISCSIPersistentVolumeSource as ISCSIPersistentVolumeSource
};
