import * as THREE from "three";
window.addEventListener('load', function() {
    //http://www.jihetuba.com/WebGl/threejs/three.js-dev/examples/index.html?q=dashe#webgl_lines_dashed
    //https://r105.threejsfundamentals.org/threejs/lessons/threejs-primitives.html


    //creating a scene
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x191B1E);


    // Objects
    //To create a cube, we need a BoxGeometry. 
    //This is an object that contains all the points (vertices) and fill (faces) of the cube.
    let geometry = new THREE.BoxGeometry(10, 10, 10);

    geometry = new THREE.WireframeGeometry(geometry);

    // Material
    //In addition to the geometry, we need a material to color it
    const material = new THREE.LineDashedMaterial({
        color: 0xF76236,
        linewidth: 1,
        scale: 2,
        dashSize: 2,
        gapSize: 1
    });

    // Mesh 
    //A mesh is an object that takes a geometry, and applies a material to it, 
    //which we then can insert to our scene, and move freely around
    const cube = new THREE.LineSegments(geometry, material);
    cube.computeLineDistances();
    scene.add(cube);


    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth / 2,
        height: window.innerHeight / 2
    }

    //For camera

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        if (sizes.width < 500) {
            camera.fov = 100;
        } else {
            camera.fov = 75;
        }
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width / 2, sizes.height / 2)

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    /**
     * Camera
     */
    // Base camera
    //75  -  field of view, which is the extent of the scene that is seen on the display at any given moment
    //window.innerWidth / window.innerHeight  -  aspect ratio. You almost always want to use the width of the element divided by the height
    //0.1  -  near
    //1000  -  far
    //objects further away from the camera than the value of far or closer than near won't be rendered
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 15
    scene.add(camera)


    //creating a WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true, //smoother lines
        canvas: canvas
    })


    //setting the size at which we want it to render our app. 
    //It's a good idea to use the width and height of the area we want to fill with our app - 
    //in this case, the width and height of the browser window.
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    /**
     * Animate
     */
    const clock = new THREE.Clock()
    const tick = () => {

        const elapsedTime = clock.getElapsedTime()

        // Update objects
        cube.rotation.y = .5 * elapsedTime

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
})