import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "clientCIDR": {
      "type": "string"
    },
    "serverAddress": {
      "type": "string"
    }
  },
  "required": [
    "clientCIDR",
    "serverAddress"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR", schema);
}

