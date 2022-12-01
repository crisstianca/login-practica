import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks';

export const HomePage = () => {

  const { displayName, photoURL } =  useSelector( state => state.auth );
  const dispatch = useDispatch();

  const onSubmitLogout = () => {
    dispatch( startLogout());
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <h1 className='navbar-brand'> Hello { displayName } </h1>
                <button className='navbar-toggler' data-toggle='collapse' data-target='#miList'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='miList'>
                    <div className='navbar-nav'>
                        <a href="#" className='nav-link text-light'> Principal </a>
                        <a href="#" className='nav-link text-light'> Principal </a>
                        <a href="#" className='nav-link text-light'> Principal </a>
                        <a href="#" className='nav-link text-light'> Principal </a>
                        <a href="#" className='nav-link text-light'>  ---  </a>
                        <div>
                        <button onClick={ onSubmitLogout } className='btn btn-danger'> x </button>
                            <img  id='img-perfil' src={ photoURL} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main className='container'>
            <div className='row'>
                <div className='col-md-6 text-center my-auto'>
                    <img src="https://images.pexels.com/photos/209679/pexels-photo-209679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='col-md-6 text-center my-auto'>
                    <h1 className='font-weight-bold'> El mundo de Mario Bros </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facilis ipsa debitis corporis a</p>
                    <button className='btn btn-info'> Mas informacion </button>
                </div>
            </div>
            <div className='row flex-row-reverse'>
                <div className='col-md-6 text-center my-auto'>
                    <img src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='col-md-6 text-center my-auto'>
                    <h1 className='font-weight-bold'> El mundo de Mario Bros </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facilis ipsa debitis corporis a</p>
                    <button className='btn btn-info'> Mas informacion </button>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 text-center my-auto'>
                    <img src="https://images.pexels.com/photos/3162044/pexels-photo-3162044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='col-md-6 text-center my-auto'>
                    <h1 className='font-weight-bold'> El mundo de Mario Bros </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facilis ipsa debitis corporis a</p>
                    <button className='btn btn-info'> Mas informacion </button>
                </div>
            </div>
            <div className='row flex-row-reverse'>
                <div className='col-md-6 text-center my-auto'>
                    <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='col-md-6 text-center my-auto'>
                    <h1 className='font-weight-bold'> El mundo de Mario Bros </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facilis ipsa debitis corporis a</p>
                    <button className='btn btn-info'> Mas informacion </button>
                </div>
            </div>
        </main>

        <footer className='bg-dark mt-5'>
            <div className='container'>
                <div className='row text-center align-items-center'>
                    <div className='col-md-6 '>
                        <div className='text-light'> Contacto: ventura@madrigal.com </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='text-light'> Policy privacy </div>
                        <div className='text-light'> Contact us</div>
                        <div className='text-light'> @copy 2022 </div>
                    </div>
                </div>
            </div>
        </footer>
    </>

  )
}
