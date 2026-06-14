import React from 'react'

const Showsec = ({showData}) => {
  return (
    <div className='displaySec'>
            <h2>{showData?.name}<span></span></h2>
            <h2>{showData?.email}<span></span></h2>
            <h2>{showData?.password.split('').map(()=>"*")}<span></span></h2>
            <h2>{showData?.age}<span></span></h2>
            <h2>{showData?.date}<span></span></h2>
            <h2>{showData?.hobby}<span></span></h2>
            <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>{showData?.skills?.map((e,i)=><h2>{e.skill}</h2>)}</div>
            <h2>{showData?.gender}<span></span></h2>
            <h2>{showData.terms ? "Yes" : "No"}<span></span></h2>
            <h2>{showData?.desc}<span></span></h2>
          </div>
  )
}

export default Showsec
