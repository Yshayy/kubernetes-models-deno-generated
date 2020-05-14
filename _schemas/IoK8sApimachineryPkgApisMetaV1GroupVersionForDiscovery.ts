import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "groupVersion": {
      "type": "string"
    },
    "version": {
      "type": "string"
    }
  },
  "required": [
    "groupVersion",
    "version"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery", schema);
}

