import React from 'react'
import './loader.css'
import img from '../../assets/1.jpg'
const Loader = ({data, setLoading}) => {
  return (
    <div className='loader'>
        <span className='close' onClick={()=>setLoading(false)}>close</span>
        {data === 'loading' ?
        <p>loading</p>
        : data === 'success'?
        <>
        <h3>Thank You for subscribing us</h3>
        <img src={img} alt="" />
        <button className='pri-btn'>Download</button>
        </>:
        <>
        <h3>Thank You... You have already subscribed us</h3>
        <img src={img} alt="" />
      <a  className='pri-btn'  href="https://drive.google.com/uc?export=download&id=1a5y5aJ56eRKT2VdOhthfoWwse0yLWWMC">Download</a> 
        </>


        }
        
        {/* <hr /> */}
              {/* <table>
                <tr>
                  <td>custom keto</td>
                  <td className='btn'>click here</td>
                </tr>
                <tr>
                  <td>custom keto</td>
                  <td className='btn'>click here</td>
                </tr>               
                <tr>
                  <td>custom keto</td>
                  <td className='btn'>click here</td>
                </tr>
                <tr>
                  <td>custom keto</td>
                  <td className='btn'>click here</td>
                </tr>
              </table> */}
    </div>
  )
}

export default Loader