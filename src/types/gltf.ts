import { Material, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResult = GLTF & {
  nodes: { [name: string]: Object3D<Event> };
  materials: { [name: string]: Material };
};
