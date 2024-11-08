import React, { useState } from 'react';
import swal from 'sweetalert';
function Login() {
    let userName = '';
    let password = '';
    /**
     * java class değişkenleri korumak için encapsulation
     * private int userName;
     * public getUserName();
     * publis setUserName();
     * 
     */
    const [isEmpty,setIsEmpty] = useState(false);
    const doLogin = ()=>{
        if(userName === '' || password=== ''){
            setIsEmpty(true);            
            return
        }
        else
            setIsEmpty(false);
        
        // get işleminde sadece url yeterli iken, sunucuya veri iletilecek işlemlerde
        // put, delete, post işlemlerinde fetch için diğer parametreler eklenmelidir.
        fetch('http://localhost:9090/v1/dev/user/dologin',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userName': userName,
                'password': password
            })
        }).then(data=>data.json()).then(res=>{
            if(res.code === 200){
                swal('Giriş Başarılı');
            }else{
                swal(res.message);
            }
        })
        
    }
  console.log('render');  
  return (
    <div className='container'>
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
                {
                    isEmpty 
                    ? <div className='alert alert-warning' role='alert'>
                        <h4 className='alert-heading'>Uyarı</h4>
                        <hr />
                        <p >Kullanıcı adı ve şifre boş geçilemez.</p>
                     </div>
                    : null 
                }
                
                <div className="mb-3">
                    <label className='form-label'>Kullanıcı adı</label>
                    <input onChange={evt=>{userName=evt.target.value}} type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şifre</label>
                    <input onChange={evt=>{password=evt.target.value}} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button onClick={doLogin} className='btn btn-success'>Giriş</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login;