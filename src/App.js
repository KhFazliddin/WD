import './App.css';
import computer from './img/Computer.png'
import project from './img/Project.png'
import man from './img/Man.png'
import stick from './img/Stick.png'
import video from './img/video.png'
import wall1 from './img/Rectangle 1.png'
import wall2 from './img/Rectangle 2.png'
import wall3 from './img/Rectangle 3.png'
import wall4 from './img/Rectangle 4.png'
import wall5 from './img/Rectangle 5.png'
import wall6 from './img/Rectangle 6.png'
import wall7 from './img/Rectangle 7.png'
import wall8 from './img/Rectangle 8.png'
import microsoft from './img/Microsoft.png'
import wk from './img/WK.png'




function App() {
  return (
    <div className="App">
      <div className="Top">
        <div className='app_container'>
          <div className='Header'>
            <h1 className='WD'>WD</h1>
            <div className="Header-links">
              <a href='#ГЛАВНАЯ'>ГЛАВНАЯ</a>
              <a href='#ОБ АВТОРЕ'>ОБ АВТОРЕ</a>
              <a href='#РАБОТЫ'>РАБОТЫ</a>
              <a href='#ПРОЦЕСС'>ПРОЦЕСС</a>
              <a href='#КОНТАКТЫ'>КОНТАКТЫ</a>
            </div>
          </div>

          <div className='Maindesign'>
            <img className='computer' src={computer} />

            <div className='RightDesign'>
              <p className='Design'>
                Дизайн и верстка
              </p>
              <p className='Lorem'>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              <button className='Write'>НАПИСАТЬ МНЕ</button>
            </div>
          </div>
        </div>
      </div>
      <p className='About'>
        Обо мне
      </p>
      <div className='aboutme'>
        <p className='Lorem2'>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
          Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
      </div>

      <main>
        <div className='Plan'>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
          <div className='Planproject'>
            <img className='project' src={project}></img>
            <p className='img2text'>40+ проектов</p>
          </div>
        </div>
        <div className='Adobe'>
          <div className='Myself'>
            <h1>  Мои навыки </h1>
            <div className='Row'>
              <div className='Myself'>
                <p>Adobe Photoshop</p>
                <img className='Stick' src={stick}></img>
                <p>Adobe Photoshop</p>
                <img className='Stick' src={stick}></img>
                <p>Adobe Photoshop</p>
                <img className='Stick' src={stick}></img>
              </div>
            </div>
          </div>

          <img className='Man' src={man}></img>
        </div>
        <div className='container'>
          <div className='workcont'>
            <div className='work'>
              <h1>Как я работаю</h1>
              <p className='Lorem3'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                латинице с начала XVI века.</p>
            </div>
          </div>
          <div className='video'>
            <img src={video}></img>
          </div>
        </div>
        <div className='wall'>
          <div className='wallimg'>
            <img className='wallimage' src={wall1}></img>
            <img className='wallimage' src={wall2}></img>
            <img className='wallimage' src={wall3}></img>
            <img className='wallimage' src={wall4}></img>
            <img className='wallimage' src={wall5}></img>
            <img className='wallimage' src={wall6}></img>
            <img className='wallimage' src={wall7}></img>
            <img className='wallimage' src={wall8}></img>
          </div>
        </div>
        <div className='microsoftimg'>
          <img className='microsoft' src={microsoft}></img>
          <img className='microsoft' src={microsoft}></img>
          <img className='microsoft' src={microsoft}></img>
          <img className='microsoft' src={microsoft}></img>
        </div>
        <footer>
          <div className='conclusion'>
            <div className='personal'>
              <div className='Website'>
                <h1>Хотите веб-сайт?</h1>
                <p className='Lorem4'>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
                  на латинице с начала XVI века.
                </p>
              </div>
            </div>
            <div className='request'>
              <div className='type'>
                <input type='text' placeholder='Ваше имя'></input>
                <input type='text' placeholder='Ваш e-mail'></input>
              </div>
              <textarea className='sms' placeholder='Message'></textarea>
            </div>
            <button className='send'>ОТПРАВИТЬ</button>
          </div>

          <div className='contact'>
            <div className='last'>
              <div className='pername'>
                <p>Иванов Иван</p>
                <p>(с) 2018. Все права защищены.</p>
              </div>
              <div className='wkname'>
                <img className='wk' src={wk}></img>
                <img className='wk' src={wk}></img>
                <img className='wk' src={wk}></img>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div >


  );
}

export default App;
