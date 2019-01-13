import uuidv4 from "uuid/v4";
import { UPDATE } from "./types";

export const makeAVP = (key, value) => ({
  type: UPDATE,
  avp: {
    [key]: value
  }
});
