
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgVersionInfo.ts";

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export interface IIoK8sApimachineryPkgVersionInfo {
"buildDate": string;
"compiler": string;
"gitCommit": string;
"gitTreeState": string;
"gitVersion": string;
"goVersion": string;
"major": string;
"minor": string;
"platform": string;
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export class IoK8sApimachineryPkgVersionInfo extends Model<IIoK8sApimachineryPkgVersionInfo> implements IIoK8sApimachineryPkgVersionInfo {
"buildDate": string;
"compiler": string;
"gitCommit": string;
"gitTreeState": string;
"gitVersion": string;
"goVersion": string;
"major": string;
"minor": string;
"platform": string;
}

Model.setSchema(IoK8sApimachineryPkgVersionInfo, "io.k8s.apimachinery.pkg.version.Info", addSchema);

export {
  IIoK8sApimachineryPkgVersionInfo as IInfo,
  IoK8sApimachineryPkgVersionInfo as Info
};
