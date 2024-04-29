import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const ParticleBackgroundCreate = () => {

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: "100%",
      height: "100%",
      useBouncyWalls: true
    },
    particle: {
      particleCount: 50,
      color: '#FFB8BF',
      minSize: 2,
      maxSize: 10
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 1,
      opacityTransitionTime: 3000
    }
  }

  return <ParticleBackground settings={settings} />

}

export default ParticleBackgroundCreate