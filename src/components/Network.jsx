import React from 'react'
import { useGLTF  } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/network.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh  geometry={nodes.Default.geometry} material={materials['Scene_-_Root']} position={[1979.77, -1375.57, -1809.22]} rotation={[-Math.PI / 2, 0, 0]} scale={2.3} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/network.glb')
