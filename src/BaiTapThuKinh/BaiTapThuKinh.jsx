import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import './BaiTapThuKinh.css'

export default class BaiTapThuKinh extends Component {

    
    state = {
        glassRhymesWithAss: {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    //ngoi sao lap lanh 


    renderGlassesList = () => {


        return dataGlasses.map((glass, index) => {
            return <img onClick={() => {
                this.changeGlass(glass)
            }} className='ml-2 p-2 border border-width-1' style={{ width: '130px', cursor: 'pointer' }} key={index} src={glass.url} />
        })
    }

    changeGlass = (newGlass) => {
        this.setState({
            glassRhymesWithAss: newGlass
        })
    }
    render() {
        
        

        const animationKeyFrames = `@keyframes glassAni${Date.now()}{
            from {
             width: 0;
             transform : rotate(45deg);
             opacity :0 ;
            }
            to {
                width: 230px;
                transform : rotate(0deg);
                opacity : 0.7;
            }
        
        }`;




        const styleGlass = {
            width: '230px',
            top: '168px',
            transform: 'rotate(0deg)',
            left: '342px',
            opacity: '0.7',
            animation: `glassAni${Date.now()} 2s`
        }

        const styleInfoGlass = {
            backgroundColor: 'rgba(101, 77, 126, 0.8)',
            height : '120px',
            width: '250px',
            top: '305px',
            left: '318px',
            textAlign: 'left'
        }
        return (

            <div style={{ backgroundImage: 'url(./glassesImage/bg2.png)', backgroundSize: '1500px', minHeight: '2000px' }}>
                <style>
                    {animationKeyFrames}
                </style>



                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
                    <h3 className='text-center text-light'>TRY GLASSESE ONLINE</h3>
                    <div className='container content'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative '>
                                    <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model2.jpeg" alt="..." />
                                    <div id="main">
                                    <img style={styleGlass} className='position-absolute glassStyle' src={this.state.glassRhymesWithAss.url} alt="..." />
                                    </div>
                                    
                                    <div style={styleInfoGlass} className='position-absolute'>
                                        <p className='text-light'>{this.state.glassRhymesWithAss.name}</p>
                                        <p className='text-warning' >{this.state.glassRhymesWithAss.desc}</p>
                                    </div>
                                </div>


                            </div>
                            <div className='col-6'>
                                <img style={{ width: '250px' }} src="./glassesImage/model2.jpeg" alt="..." />
                            </div>

                        </div>
                    </div>
                    {/* list glasses */}
                    <div className='bg-dark container  text-center mt-5 d-flex justify-content-center p-5'>
                        {this.renderGlassesList()};
                    </div>
                </div>
            </div>
        )
    }
}



