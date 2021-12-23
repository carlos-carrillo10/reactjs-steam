import React from 'react';

export class ContentCard extends React.Component   {

    goToUrl = (url) =>
    {
       window.location.href = url; 
    }

    render() {

    return (
        <React.Fragment>      
            <div className='rounded overflow-hidden border w-full lg:w-3/12 md:w-3/12 bg-white mx-3 md:mx-0 lg:mx-0'>
                <div className='w-full flex justify-between p-3'>
                    <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'><i className='fas fa-ellipsis-h pt-2 text-lg'></i></span>
                </div>
                <img className='w-full bg-cover' src={this.props.image} alt={this.props.title} />
                <div className='flex flex-col gap-2 px-3 pb-2'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>{this.props.title}</h2>
                        {this.props.released !== '' ? <small>Published: {this.props.released}</small> : <small>Published: {this.props.released}</small> }
                        <h1 className='italic' dangerouslySetInnerHTML={{__html: this.props.review}}></h1>
                    </div>

                    <h1 className='text-sm mb-2 text-gray-800 cursor-pointer font-medium underline' onClick={() => this.goToUrl(this.props.url)}>
                        Learn more
                        </h1>
                </div>
            </div>

        </React.Fragment>
    );
}
}