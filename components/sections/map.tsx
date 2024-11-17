import React from 'react';

const map = () => {
    return (
        <div className="w-full mb-10">
           <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46914.3247807921!2d77.64225677468298!3d12.884846966835523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b5408fcd721%3A0x1d72a2846ebeb8fd!2sMANAGO%20KITCHEN%20EQUIPMENT!5e1!3m2!1sen!2sin!4v1731834997778!5m2!1sen!2sin" 
               width="100%" 
               height="450" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
    );
};

export default map;