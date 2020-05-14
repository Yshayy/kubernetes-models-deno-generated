
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1WindowsSecurityContextOptions.ts";

/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 */
export interface IIoK8sApiCoreV1WindowsSecurityContextOptions {
/**
 * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
 */
"gmsaCredentialSpec"?: string;
/**
 * GMSACredentialSpecName is the name of the GMSA credential spec to use.
 */
"gmsaCredentialSpecName"?: string;
/**
 * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"runAsUserName"?: string;
}

/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 */
export class IoK8sApiCoreV1WindowsSecurityContextOptions extends Model<IIoK8sApiCoreV1WindowsSecurityContextOptions> implements IIoK8sApiCoreV1WindowsSecurityContextOptions {

"gmsaCredentialSpec"?: string;

"gmsaCredentialSpecName"?: string;

"runAsUserName"?: string;
}

Model.setSchema(IoK8sApiCoreV1WindowsSecurityContextOptions, "io.k8s.api.core.v1.WindowsSecurityContextOptions", addSchema);

export {
  IIoK8sApiCoreV1WindowsSecurityContextOptions as IWindowsSecurityContextOptions,
  IoK8sApiCoreV1WindowsSecurityContextOptions as WindowsSecurityContextOptions
};
