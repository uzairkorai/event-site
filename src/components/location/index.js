import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.050045400169!2d67.06543581486845!3d24.86214028405325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e98d1327083%3A0xf7a5ceb25b7b2d61!2sThe%20Palace!5e0!3m2!1sen!2s!4v1568110404639!5m2!1sen!2s" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen=""
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location;
