import React from 'react';



export default function PageHeader({ title }) {
  return (
    <div 
      className="position-relative d-flex justify-content-center align-items-center text-center py-7 fade-in"
      style={{
        backgroundImage: 'url("https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        overflow: 'hidden',

      }}
    >
 


      <div className="position-relative z-3">
        <h1 className="  mb-4" style={{ color: '#1A2D62 ' ,fontSize:'50px', fontWeight:'600' }}>
          {title}
        </h1>
        <div 
          className="d-inline-block text-secondary   py-2 px-4"
          
        >
          <span style={{ color: '#2ECA80' }}>Home</span> / <span style={{ color: '#1A2D62' }}>{title}</span>
        </div>
      </div>
    </div>
  );
}
