import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function RoomModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/portfolio-room.glb");
//   const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Drawer_Handle" position={[-16.53, 20.87, -22.07]} />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Monitor Stand"]}
          position={[-22.1, 34.71, -10.78]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Monitor Stand"]}
          position={[-23.5, 27.52, 1.08]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Monitor Stand"]}
          position={[-23.52, 32.57, -1.76]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Monitor Stand"]}
          position={[-23.53, 33.12, -4.76]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Monitor Screen"]}
          position={[-21.5, 35.09, -10.78]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="Monitor_Button"
          castShadow
          receiveShadow
          geometry={nodes.Monitor_Button.geometry}
          material={materials["Monitor Button color"]}
          position={[-21.54, 28.74, -19.18]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Keyboard Color"]}
          position={[-20.27, 23.13, -11.85]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Keyboard keys color"]}
          position={[-19.39, 23.39, -9.44]}
          rotation={[0, 0, -0.19]}
        />
        <mesh
          name="Table_Top"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top.geometry}
          material={materials["Table Cover"]}
          position={[-20.27, 22.24, -11.85]}
        />
        <mesh
          name="Table_Stand"
          castShadow
          receiveShadow
          geometry={nodes.Table_Stand.geometry}
          material={materials["Table Cover"]}
          position={[-20.05, 16.02, -24.45]}
          rotation={[-1.57, 0, 0]}
        />
        <mesh
          name="Table_Leg"
          castShadow
          receiveShadow
          geometry={nodes.Table_Leg.geometry}
          material={materials["Table Cover"]}
          position={[-20.27, 9.73, -24.77]}
        />
        <mesh
          name="Table_Drawer"
          castShadow
          receiveShadow
          geometry={nodes.Table_Drawer.geometry}
          material={materials["Table Cover"]}
          position={[-19.96, 20.67, -22.04]}
        />
        <mesh
          name="Table_Bottom_Support"
          castShadow
          receiveShadow
          geometry={nodes.Table_Bottom_Support.geometry}
          material={materials["Table Cover"]}
          position={[-17.36, 9.14, -11.81]}
          rotation={[Math.PI, -0.01, Math.PI]}
        />
        <mesh
          name="Table_Bottom_Rest"
          castShadow
          receiveShadow
          geometry={nodes.Table_Bottom_Rest.geometry}
          material={materials["Table Cover"]}
          position={[-19.02, 10.66, -11.85]}
          rotation={[Math.PI, -0.01, Math.PI / 2]}
        />
        <mesh
          name="Table_Cover"
          castShadow
          receiveShadow
          geometry={nodes.Table_Cover.geometry}
          material={materials["Table Cover Material"]}
          position={[-20.27, 22.37, -11.85]}
        />
        <mesh
          name="Table_Top_Text"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top_Text.geometry}
          material={materials.Material}
          position={[-16.68, 22.79, -20.64]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          position={[-3.22, 33.03, -2.87]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio-room.glb");