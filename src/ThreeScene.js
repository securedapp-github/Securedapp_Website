import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const canvasRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Load the image texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('path/to/your/image.png');

    // Create a plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);

    // Add the plane to the scene
    scene.add(plane);

    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the plane (optional)
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ThreeScene;
