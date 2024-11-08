import React from 'react';

function Login() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="mb-3">
                    <label className='form-label'>Kullanıcı adı</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şifre</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button className='btn btn-success'>Giriş</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login;