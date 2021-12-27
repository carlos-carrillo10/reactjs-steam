import React from 'react';

export const ContentCard = props => {

    function goToUrl (url)
    {
       window.location.href = url; 
    }

    return (
        <React.Fragment>      
            <div className='rounded overflow-hidden border w-full lg:w-3/12 md:w-3/12 bg-white mx-3 md:mx-0 lg:mx-0'>
                <div className='w-full flex justify-between p-3'>
                    <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'><i className='fas fa-ellipsis-h pt-2 text-lg'></i></span>
                </div>
                <img className='w-full bg-cover' src={props.image} alt={props.title} />
                <div className='flex flex-col gap-2 px-3 pb-2'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>{props.title}</h2>
                        {props.released !== '' ? <small>Published: {props.released}</small> : <small>Published: {props.released}</small> }
                        <h1 className='italic' dangerouslySetInnerHTML={{__html: props.review}}></h1>
                    </div>

                    <h1 className='text-sm mb-2 text-gray-800 cursor-pointer font-medium underline' onClick={() => goToUrl(props.url)}>
                        Learn more
                        </h1>
                </div>
            </div>

        </React.Fragment>
    );
}