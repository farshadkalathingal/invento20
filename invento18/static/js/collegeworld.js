window.addEventListener('load', function () {
    var removex = document.getElementsByClassName("bg");
    removex[0].parentNode.removeChild(removex[0]);


    re();
});
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.setAttribute('id', 'canvas');

function re() {
    var data = [
                [0, 'night'],
                [1, 'night'],
                [2, 'night'],
                [3, 'night'],
                [4, 'night'],
                [5, 'night'],
                [6, 'morning'],
                [7, 'morning'],
                [8, 'morning'],
                [9, 'morning'],
                [10, 'morning'],
                [11, 'morning'],
                [12, 'morning'],
                [13, 'morning'],
                [14, 'morning'],
                [15, 'morning'],
                [16, 'morning'],
                [17, 'morning'],
                [18, 'night'],
                [19, 'night'],
                [20, 'night'],
                [21, 'night'],
                [22, 'night'],
                [23, 'night'],
                [24, 'night'],
            ],
        hr = new Date().getHours();
    for (let i = 0; i < data.length; i++) {
        if (hr == data[i][0]) {
            if (data[i][1] == 'morning') {
                //                   night();
                morning();
            } else if (data[i][1] == 'night') {
                night();
                //                   morning();
            }
        }
    }
}
if (!Detector.webgl) Detector.addGetWebGLMessage();
var renderer, scene, camera;
var hr = new Date().getHours();
renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.shadowMap.enabled = true;
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene = new THREE.Scene();
scene.background = new THREE.Color(0xcce0ff);
camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.set(0, 850, 2000);
addEventListener('resize', function () {
    changecanvaswidth();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

});
var loader1 = new THREE.TextureLoader();
var groundTexture = loader1.load('https://images.inventogec.org/images/grasslight.jpg');
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(500, 500);
groundTexture.anisotropy = 16;
var material = new THREE.MeshPhongMaterial({
    color: 0x008000,
    specular: 0x050505,
    map: groundTexture,
    side: THREE.DoubleSide,
    side: THREE.DoubleSide

});
var mesh1 = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000, 10000), material);
//   mesh1.receiveShadow = true;
//   mesh1.castShadow = true;
scene.add(mesh1);
mesh1.rotation.x = Math.PI * .5;


function changecanvaswidth() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//
var orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.maxPolarAngle = Math.PI * 0.4;
orbit.minDistance = 500;
orbit.maxDistance = 2000;
let count = 0;
var times = 0.01;
var stimes = 0.001;
var scount = 0.0001
var timecount = 0;
var fps = 60;

function render() {
    renderer.render(scene, camera);
} //
var loader = new THREE.JSONLoader(true);
loader.load('https://images.inventogec.org/nograss.json', handle_load);
var mesh;

function handle_load(geometry, materials) {
    cmesh = new THREE.Mesh(geometry, materials);
    //       cmesh.castShadow = true;
    //       cmesh.receiveShadow = true;
    cmesh.scale.set(8, 8, 8);
    //       cmesh.reciveShadow = true;
    cmesh.position.y = 5;
    scene.add(cmesh);

}
var igeometry;
var imat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    reflectivity: 10
});
//
var fontloader = new THREE.FontLoader();
fontloader.load("https://images.inventogec.org/helvetiker_regular.typeface.json", function (font) {
    igeometry = new THREE.TextGeometry("INVENTO'18", {
        font: font,
        size: 3,
        height: 5,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 4,
        bevelSize: 8,
        bevelSegments: 5
    });
    var imesh = new THREE.Mesh(igeometry, imat);
    imesh.position.set(-10, 66, 225);
    scene.add(imesh);

});
fontloader.load("https://images.inventogec.org/helvetiker_regular.typeface.json", function (font) {
    igeometry = new THREE.TextGeometry("GOVERNMENT ENGINEERING COLLEGE ", {
        font: font,
        size: 3,
        height: 5,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 4,
        bevelSize: 8,
        bevelSegments: 5
    });
    var smesh = new THREE.Mesh(igeometry, imat);
    smesh.position.set(-37, 105, 170);
    scene.add(smesh);

});
fontloader.load("https://images.inventogec.org/helvetiker_regular.typeface.json", function (font) {
    igeometry = new THREE.TextGeometry("SREEKRISHNAPURAM PALAKKAD ", {
        font: font,
        size: 3,
        height: 5,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 4,
        bevelSize: 8,
        bevelSegments: 5
    });
    var pmesh = new THREE.Mesh(igeometry, imat);
    pmesh.position.set(-32, 100, 170);
    scene.add(pmesh);

});
//

function morning() {
    var alight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(alight);
    alight.position.set(0, 0, 100);
    var dilight = new THREE.DirectionalLight(0xffffff, 1);
    var geometry = new THREE.SphereBufferGeometry(10, 10, 10);
    var material = new THREE.MeshLambertMaterial({
        color: 0xFFA500
    });
    var smesh = new THREE.Mesh(geometry, material);
    dilight.add(smesh);
    scene.add(dilight);
    dilight.position.set(0, 500, 200);
    dilight.castShadow = true;
    dilight.position.multiplyScalar(1.3);
    var d = 600;
    dilight.shadow.camera.left = -d;
    dilight.shadow.camera.right = d;
    dilight.shadow.camera.top = d;
    dilight.shadow.camera.bottom = -d;
    //       dilight.shadow.camera.near = 2300;
    //       dilight.shadow.camera.far = 2500;

    function animate() {
        setTimeout(function () {

            requestAnimationFrame(animate);
            scount += stimes;
            //               dilight.position.y = Math.cos(scount) * 2000;
            //               dilight.position.z = Math.sin(scount) * 2000;
            rotation();

            render();

        }, 1000 / fps);


    }
    animate();


}

function rotation() {
    count = count + times;
    if (camera.position.y > 100 && timecount < 1) {

        camera.position.y -= 1;
        camera.position.x = 1000 * Math.cos(count);
        camera.position.z = 1000 * Math.sin(count);
        camera.lookAt(scene.position);
    }
    if (camera.position.y <= 100) {
        timecount++;
    }

}

function night() {
    scene.background = new THREE.Color(0x000000);
    var ambientlight = new THREE.AmbientLight(0x0055a5, 1);
    var pointlight = new THREE.PointLight(0xffffff, 2);
    var spotLight = new THREE.SpotLight(0xdb7b2b, 2);
    spotLight.position.set(0, 400, 600);
    //spotLight.castShadow = true;
    //       spotLight.shadow.mapSize.width = 1024;
    //       spotLight.shadow.mapSize.height = 1024;
    //
    //       spotLight.shadow.camera.near = 100;
    //       spotLight.shadow.camera.far = 100;
    //       spotLight.shadow.camera.fov = 20;
    scene.add(ambientlight);
    scene.add(pointlight);
    scene.add(spotLight);
    pointlight.position.set(0, 0, -50);
    //sp2

    //


    function randomize(min, max) {
        return Math.random() * (max - min + 1) + min;

    }

    var stars = new THREE.SphereGeometry(3, 10, 10);
    var d = 2000;

    function star() {
        var starmaterial = new THREE.MeshPhongMaterial({
            color: 0xFFF5F2
        });

        for (let i = 0; i < 800; i++) {
            var starmesh = new THREE.Mesh(stars, starmaterial);
            starmesh.position.x = Math.sin(randomize(0, 360)) * d;
            starmesh.position.y = Math.sin(randomize(0, 360)) * d;
            starmesh.position.z = Math.sin(randomize(0, 360)) * d;
            scene.add(starmesh);
        }
    }
    star();
    var sphere1 = new THREE.SphereGeometry(2, 10, 10);
    var material1 = new THREE.MeshPhongMaterial({
        color: 0xff0000
    });

    function fire() {

        var mesh = new THREE.Mesh(sphere1, material1);
        scene.add(mesh);
        this.velocity = randomize(.03, .05);
        this.gravity = 0.4;
        mesh.position.x = randomize(-300, 300);
        mesh.position.z = randomize(-200, 100);
        mesh.position.y = 150;

        this.update = () => {
            mesh.position.y += this.velocity;
            this.velocity -= (this.gravity * 0.01);

            if (this.velocity <= 0.1) {
                mesh.geometry.dispose();
                mesh.material.dispose();

                scene.remove(mesh);

                for (let j = 0; j < 100; j++) {
                    f.push(new fires(mesh.position, this.gravity));
                }



            }
        }

    }
    let f = [];
    var sphere = new THREE.SphereGeometry(.5, 10, 10);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    function fires(position, gravity) {
        var material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(getRandomColor())
        });
        this.mesh = new THREE.Mesh(sphere, material);
        scene.add(this.mesh);
        this.gravity = .2;
        this.mesh.position.x = position.x;
        this.mesh.position.y = position.y;
        this.mesh.position.z = position.z;
        this.randomx = Math.cos(randomize(0, 360)) * randomize(0.01, 1);
        this.randomy = Math.sin(randomize(0, 360)) * randomize(0.01, 1);
        this.randomz = Math.sin(randomize(0, 360)) * randomize(0.01, 1);
        this.update = () => {
            this.mesh.position.x -= this.randomx;
            this.mesh.position.y -= this.randomy;
            this.mesh.position.z -= this.randomz;
            this.randomx -= (this.gravity * 0.24);
            this.randomy -= (this.gravity * 0.24);
            this.randomz -= (this.gravity * 0.24);
            if (this.randomx <= 0 && this.randomy <= 0 && this.randomz <= 0) {
                scene.remove(this.mesh);
                //                   this.mesh.geometry.dispose();
                //                   this.mesh.material.dispose();
                //                   this.mesh = undefined;


            }

        }


    }


    let particles = [];
    init();

    function init() {

        for (let i = 0; i < 10; i++) {
            if (Math.random() * 1 < 0.005) {
                particles.push(new fire());
            }
        }
    }

    function render() {
        renderer.render(scene, camera);
    }

    //

    function animate() {
        setTimeout(function () {
            requestAnimationFrame(animate);
            // orbit.update();
            init();
            particles.forEach(particles => {
                particles.update();
            })
            if (f.length > 0) {
                f.forEach(f => {
                    f.update();
                });
            }
            for (let i = 0; i < particles.length; i++) {
                if (particles[i].velocity < 0.1) {
                    particles.splice(i, 1);
                }
            }
            for (let j = 0; j < f.length; j++) {
                if (f[j].randomx < 0 && f[j].randomy < 0 && f[j].randomz < 0) {
                    f.splice(j, 1);

                }
            }
            rotation();
            render();
        }, 1000 / 60);
    }
    animate();



}
