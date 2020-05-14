import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "oneOf": [
    {
      "type": "string"
    },
    {
      "type": "integer",
      "format": "int32"
    }
  ]
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.util.intstr.IntOrString", schema);
}

