import React from 'react';

function Landing(props) {
    return (
        <div className=''>
            <h1 className='leading-10 text-white text-4xl font-bold'>David van Munster,<br></br>a software development student based in the Netherlands.</h1>
            <p className={'leading-7 text-' + props.shade + '-400 text-base pt-3'}>I am currently a software development student at the Hogeschool Arnhem Nijmegen. I am passionate about obtaining new skills, especially skills surrounding technologies like programming languages, frameworks, tools & more.</p>
        </div>
    )
}

export default Landing;