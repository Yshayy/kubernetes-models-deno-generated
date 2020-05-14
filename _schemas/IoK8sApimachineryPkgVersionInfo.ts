import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "buildDate": {
      "type": "string"
    },
    "compiler": {
      "type": "string"
    },
    "gitCommit": {
      "type": "string"
    },
    "gitTreeState": {
      "type": "string"
    },
    "gitVersion": {
      "type": "string"
    },
    "goVersion": {
      "type": "string"
    },
    "major": {
      "type": "string"
    },
    "minor": {
      "type": "string"
    },
    "platform": {
      "type": "string"
    }
  },
  "required": [
    "major",
    "minor",
    "gitVersion",
    "gitCommit",
    "gitTreeState",
    "buildDate",
    "goVersion",
    "compiler",
    "platform"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.version.Info", schema);
}

