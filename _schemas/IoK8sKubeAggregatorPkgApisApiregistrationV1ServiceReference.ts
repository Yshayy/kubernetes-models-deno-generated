import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "port": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.ServiceReference", schema);
}

