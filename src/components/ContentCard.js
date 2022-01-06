import React from 'react';
import goToUrl from '../components/functions/goToUrl'

export const ContentCard = props => {
    return (
        <React.Fragment>      
            <div className='rounded overflow-hidden border w-full'>
                <img className='w-full bg-cover' src={props.image} alt={props.title} />
                <div className='flex flex-col gap-2 px-3 pb-2'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>{props.title}</h2>
                        {props.released !== '' ? <small>Published: {props.released}</small> : <small>Published: {props.released}</small> }
                        <h1 className='italic' dangerouslySetInnerHTML={{__html: props.review}}></h1>
                    </div>
                    <div className='flex flex-row gap-3'>
                    <h1 className='text-sm mb-2 text-gray-800 cursor-pointer font-medium underline' onClick={() => goToUrl("details/"+props.id)}>
                        Learn more
                        </h1>
                    <h1 className='text-sm mb-2 text-gray-800 cursor-pointer font-medium underline' onClick={() => goToUrl(props.url)}>
                        Go to steam
                        </h1>
                    </div>
                    
                </div>
            </div>

        </React.Fragment>
    );
}