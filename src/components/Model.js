import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
      <group ref={group} {...props} dispose={null} >
        <group rotation={[Math.PI / 1, 13, 1]}>
          <group rotation={[Math.PI / 4, 6, -4]}>
        {/* <group rotation={[-Math.PI / 3, 1, 2]}>
          <group rotation={[Math.PI / 3.5, 2.5, 0.5]}> */}
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe}  material-color={props.color}/>
          </group>
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/scene.gltf')