
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerImage.ts";

/**
 * Describe a container image
 */
export interface IIoK8sApiCoreV1ContainerImage {
/**
 * Names by which this image is known. e.g. ["k8s.gcr.io/hyperkube:v1.0.7", "dockerhub.io/google_containers/hyperkube:v1.0.7"]
 */
"names": Array<string>;
/**
 * The size of the image in bytes.
 */
"sizeBytes"?: number;
}

/**
 * Describe a container image
 */
export class IoK8sApiCoreV1ContainerImage extends Model<IIoK8sApiCoreV1ContainerImage> implements IIoK8sApiCoreV1ContainerImage {

"names": Array<string>;

"sizeBytes"?: number;
}

Model.setSchema(IoK8sApiCoreV1ContainerImage, "io.k8s.api.core.v1.ContainerImage", addSchema);

export {
  IIoK8sApiCoreV1ContainerImage as IContainerImage,
  IoK8sApiCoreV1ContainerImage as ContainerImage
};
