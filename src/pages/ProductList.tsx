import React,{useState,useEffect} from 'react'
import name, {
    dataProductList,
    dataProperties
} from '../utils/data'
import CheckBox from '../component/atoms/CheckBox';
import UrunCard from '../component/molecules/UrunCard';
function ProductList() {
  const [kategoriler, setKategoriler] = useState(dataProperties);
  const [urunler, setUrunler] = useState(dataProductList);

  const kategoriList = ()=>{
    return kategoriler.map((data,index)=>{
                    return ( <div className='col'>
                                <CheckBox name={data} key={index}/>
                            </div>                    
                    )
                })
  }
 const urunList = ()=>{
    return urunler.map((urun,index)=>{
        return   <div className="col-4">
                        <UrunCard key={index} urun={urun}/>
                    </div>
    })
 }
  return (
    <div className="container">
        <div className="row mt-5 shadow p-2 justify-content-center">
            <div className='col-8'>
                <div className="row">
                    {
                        kategoriList()
                    }
                </div>
            </div>           
        </div>
        <div className="row mt-3 shadow p-2 justify-content-center">
                  {
                    urunList()
                  }
        </div>
    </div>
  )
}

export default ProductList