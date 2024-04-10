import React, { useState,useRef } from 'react'
import './ketopro.css'
import axios from 'axios';
import Loader from '../loader/Loader';

const KetoPro = () => {
  // const [email,setEmail]=useState('')
  // const [name ,setName]=useState('')
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://script.google.com/macros/s/AKfycbwmLgu-1Kr068kR9rhxD2-mhdSAMVu3h7JcPEJ7p9akFEgSGCN1MzqJUQkVh3MHi6AXIQ/exec', {
  //       email: 'nn',
  //       name: 'nnn'
  //     },
  //      );
  //     console.log(response.data);
  //     // Optionally, you can show a success message or clear the input fields here
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error here
  //   }
  // };

  // const formRef = useRef(null)
  // const scriptUrl = "https://script.google.com/macros/s/AKfycbxC-p53TGK7Y-rizxOxVUc01W1Sk6leZy7KXfszMiBfe8ckGZmkNLB93x0WUqn5P0srkw/exec"
  // const [loading, setLoading] = useState(false)
  // const[loadingData,setLoadingData]=useState("loading")

  // const handleSubmit = async (e) =>{
  //     e.preventDefault()
  //     setLoading(true)
  //     console.log(formRef.current.Email.value);
  //     const users = await axios.get( 
  //       "https://script.google.com/macros/s/AKfycbxC-p53TGK7Y-rizxOxVUc01W1Sk6leZy7KXfszMiBfe8ckGZmkNLB93x0WUqn5P0srkw/exec?action=getData"
  //      ); 
  //      console.log(users);
  //     const formEmail=formRef.current.Email.value;
  //     const email= users.data.find(user=>user.Email===formEmail)

  //     if (!email){
  //       fetch(scriptUrl, {
  //         method: 'POST', 
  //         body: new FormData(formRef.current),
    
  //     }).then(res => {
  //             console.log("SUCCESSFULLY SUBMITTED", res)
  //             setLoadingData('success')
  //         })
  //         .catch(err => console.log(err))
  //     }else{
  //       setLoadingData('suc')
  //     }
    
  // }

  return (
    <div className='keto'>
      {/* { loading&& 
      <Loader data={loadingData} setLoading={setLoading}/>
    } */}
      <div className="container">
            <div className="ketopro">
             <h2>Best Articles for You </h2>
              <table>
              <tr>
                  <td>WHAT MEN SECRETLY WANT </td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticlesforyou">click here</a></td>
                </tr>
                <tr>
                  <td>A PRESENTATION OF FREE ATTRACTION TIPS</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticlesforyou">click here</a></td>
                </tr>
                <tr>
                  <td>PRIZING IMPERFECTIONS </td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticlesforyou">click here</a></td>
                </tr>
                <tr>
                  <td>BEAUTIFUL PEOPLE VS BEAUTIFUL RELATIONSHIP </td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticlesforyou">click here</a></td>
                </tr>
                <tr>
                  <td>STOP GETTING HURT BY UNTRUSTWORTHY MEN </td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticlesforyou">click here</a></td>
                </tr>
              <tr>
                  <td> HE DOESN'T REALLY WANT THE PERFECT WOMAN</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticle1">click here</a></td>
                </tr>
                <tr>
                  <td>THE STRANGEST THING MEN DESIRE</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles2">click here</a></td>
                </tr>
                <tr>
                  <td> THE 1 EASY IDEA YOU CAN USE TODAY</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles3">click here</a></td>
                </tr>               
                <tr>
                  <td> WHY MEN PULL AWAY AND HOW YOU CAN TAP INTO HIS DEEP DESIRE</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles5">click here</a></td>
                </tr>
                <tr>
                  <td>MAKE HIM WANT YOU
</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles6">click here</a></td>
                </tr>
                <tr>
                  <td>THE ATTRACTION TRIP-WIRE THAT AWAKENS A MAN'S DEEPEST DESIRE</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles4">click here</a></td>
                </tr>
                <tr>
                  <td>WHY MEN PULL AWAY AND HOW YOU CAN TAP INTO HIS DEEP DESIRE</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles5">click here</a></td>
                </tr>
  
                <tr>
                  <td>HOW TO GET YOUR EX BACK</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles7">click here</a></td>
                </tr>
                <tr>
                  <td>HOW TO GET OVER A BREAKUP</td>
                  <td className='btn'> <a target='_blank' href="https://tinyurl.com/bestarticles8">click here</a></td>
                </tr>
              </table>
             {/* <h2>Get Free Ebook</h2> */}

              {/* <div className="box">
                <form className='form' ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <label for="fname">First Name</label>
                <input type="text" id='name' name="Name" required placeholder="Your name.."/>
                <label for="fname">Email</label>
                <input type="email"  name="Email" required placeholder="Your email.."/>

                <input type="submit" name='submit' value="Get Free Ebook"/>

                </form>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default KetoPro