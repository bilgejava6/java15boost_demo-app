import React,{useState} from 'react'

function OrnekPage() {

    const [yazilim, setyazilim] = useState(false);
    const [donanim, setdonanim] = useState(false)

  return (
    <div className='container'>
        <div className="row mt-4">
            <h1>Uzmanlık yaptığınız alanları seçiniz.</h1>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Yazılım</label>
            </div>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Donanım</label>
            </div>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Network</label>
            </div>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Architect</label>
            </div>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Müdür</label>
            </div>
            <div>
                <input className='form-check-input me-2' type="checkbox" />
                <label>Şef</label>
            </div>
            <div className="mb-2 mt-2">
                <button className='btn btn-danger'>Denetle</button>
            </div>
            <div className="mb-2 mt-2 row">
                {
                    yazilim ? <div className="col">
                    <i className="fa-brands fa-java fa-2xl"></i> 
                    </div> 
                    : null
                }
               
                <div className="col">
                     <i className="fa-solid fa-microchip fa-2xl"></i>
                </div>
                <div className="col">
                    <i className="fa-solid fa-network-wired fa-2xl"></i>
                </div>
                <div className="col">
                    <i className="fa-solid fa-pen-ruler fa-2xl"></i>
                </div>
                <div className="col">
                    <i className="fa-solid fa-clipboard-user fa-2xl"></i>
                </div>
                <div className="col">
                    <i className="fa-solid fa-user fa-2xl"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrnekPage