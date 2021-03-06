
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1GitRepoVolumeSource.ts";

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 * 
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export interface IIoK8sApiCoreV1GitRepoVolumeSource {
/**
 * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
 */
"directory"?: string;
/**
 * Repository URL
 */
"repository": string;
/**
 * Commit hash for the specified revision.
 */
"revision"?: string;
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 * 
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export class IoK8sApiCoreV1GitRepoVolumeSource extends Model<IIoK8sApiCoreV1GitRepoVolumeSource> implements IIoK8sApiCoreV1GitRepoVolumeSource {

"directory"?: string;

"repository": string;

"revision"?: string;
}

Model.setSchema(IoK8sApiCoreV1GitRepoVolumeSource, "io.k8s.api.core.v1.GitRepoVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1GitRepoVolumeSource as IGitRepoVolumeSource,
  IoK8sApiCoreV1GitRepoVolumeSource as GitRepoVolumeSource
};
