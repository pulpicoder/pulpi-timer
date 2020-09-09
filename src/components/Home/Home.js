// Import React
import React from 'react';
import Login from '../Login/Login'

// Import style of component Home
import './style/Home.css';
import welcomeIlustrator from '../../assets/welcome.svg';
import handleTimeIlustration from '../../assets/handleTime.svg';
import problemTaskIlustration from '../../assets/problemTask.svg';
import organizeTasksIlustration from '../../assets/organizeTasks.svg';
import createTaskIlustration from '../../assets/createTask.svg';
import uploadFileIlustration from '../../assets/uploadFile.svg';
import installAppIlustration from '../../assets/installApp.svg';
import btnGithubWhite from '../../assets/btnGithubWhite.svg';
import btnBehance from '../../assets/btnBehance.svg';


const Home = ()=>{
    return(
        <div className='homeContainer'>
            <div className='welcome'>
                <div className='contentWelcome'>
                    <h2>Gestiona tú tiempo y manten un registro de tus actividades y tareas</h2>
                    <p>Pulpi Timer es una microapp que te permite crear y gestionar tareas, en cada tarea podras manejar un registro de tiempos, mejora tu score y sube a otro nivel</p>
                    <Login />
                </div>
                <div className='illustrationWelcome'>
                    <img src={welcomeIlustrator} alt="Ilustracion de bienvenida"/>
                </div>
            </div>

            <div className='installAppContainer'>
                <div className='installAppIlustration'>
                    <img src={installAppIlustration} alt="Ilustracion con varios dispositivos compatibles con la app"/>
                </div>
                <div className='installAppContent'>
                    <h2>Intala la app y crea un acceso directo en cualquier dispositivo</h2>
                    <button>Instalar App</button>
                    <p>Disponible para movil y Escritorio</p>
                </div>
            </div>

            <div className='HowDoesItWork'>

                <div className='explanations'>
                    <div className='contentExplanation'>
                        <h3>Muchas ideas pero nada de orden ;)</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mauris at tellus laoreet, ornare pretium nisl tempus. Praesent sit amet erat nec quam finibus varius at a sem. Donec rutrum, velit nec mattis feugiat, neque lorem finibus purus, in fringilla purus odio ut mauris.</p>
                    </div>
                    <div className='explanationIllustrator'>
                        <img src={problemTaskIlustration} alt='Ilustración que muestra el problema de tareas desaorganizadas'/>
                    </div>
                </div>

                <div className='explanations'>
                    <div className='contentExplanation'>
                        <h3>Organiza las tareas y agregales estados de realizacion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mauris at tellus laoreet, ornare pretium nisl tempus. Praesent sit amet erat nec quam finibus varius at a sem. Donec rutrum, velit nec mattis feugiat, neque lorem finibus purus, in fringilla purus odio ut mauris.</p>
                    </div>
                    <div className='explanationIllustrator'>
                        <img src={organizeTasksIlustration} alt='Ilustración que muestra el problema de tareas desaorganizadas'/>
                    </div>
                </div>

                <div className='explanations'>
                    <div className='contentExplanation'>
                        <h3>Crea nuevas tareas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mauris at tellus laoreet, ornare pretium nisl tempus. Praesent sit amet erat nec quam finibus varius at a sem. Donec rutrum, velit nec mattis feugiat, neque lorem finibus purus, in fringilla purus odio ut mauris.</p>
                    </div>
                    <div className='explanationIllustrator'>
                        <img src={createTaskIlustration} alt='Ilustración que muestra el problema de tareas desaorganizadas'/>
                    </div>
                </div>

                <div className='explanations'>
                    <div className='contentExplanation'>
                        <h3>Gestiona y lleva registro de tus tiempos :o</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mauris at tellus laoreet, ornare pretium nisl tempus. Praesent sit amet erat nec quam finibus varius at a sem. Donec rutrum, velit nec mattis feugiat, neque lorem finibus purus, in fringilla purus odio ut mauris.</p>
                    </div>
                    <div className='explanationIllustrator'>
                        <img src={handleTimeIlustration} alt='Ilustración que muestra el problema de tareas desaorganizadas'/>
                    </div>
                </div>

                <div className='explanations'>
                    <div className='contentExplanation'>
                        <h3>Sube archivos adjuntos que permitan complementar a tus tareas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mauris at tellus laoreet, ornare pretium nisl tempus. Praesent sit amet erat nec quam finibus varius at a sem. Donec rutrum, velit nec mattis feugiat, neque lorem finibus purus, in fringilla purus odio ut mauris.</p>
                    </div>
                    <div className='explanationIllustrator'>
                        <img src={uploadFileIlustration} alt='Ilustración que muestra el problema de tareas desaorganizadas'/>
                    </div>
                </div>

            </div>
            <div className='capture'>
                <div className='captureContent'>
                    <h2>¿Necesitas desarrollar algun proyecto digital?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis quam nec mollis congue. Sed massa orci, auctor at lorem eget, bibendum ullamcorper purus. Maecenas ut luctus leo, et sollicitudin nisi. Aenean vitae nulla elementum, sollicitudin ex ut, ullamcorper risus. Phasellus ut pretium est.</p>
                </div>
                <div className='captureBtns'>
                    <a href='#' target='_blank' className='btnBehaceCapture'>Nuestro Behance <img src={btnBehance} alt="Logo de Behance"/></a>
                    <a href='https://github.com/pulpicoder/' target='_blank' className='btnGithubCapture'>Nuestro Github <img src={btnGithubWhite} alt="Logo de Github en version positiva"/></a>
                    <a href='https://pulpi.co' target='_blank'>Nuestra Web</a>
                </div>
            </div>
        </div>
    );
}

export default Home; 