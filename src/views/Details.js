import React from 'react'
import { Get } from '../components/functions/APIService'
import setTitle from '../components/functions/setTitle';
import { Loader } from '../components/Loader'
import goToUrl from '../components/functions/goToUrl'


export class Details extends React.Component
{
    constructor(props) {
        super(props);

        setTitle('- Detail');
    
       this.state = {detail:{}, showEmptyMsg: false, loading: true}
      }

      async componentDidMount() {
        const { id } = this.props.match.params

        let header = { 'x-rapidapi-host': 'steam2.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_STEAM_API_KEY  }

        let request = await Get(process.env.REACT_APP_STEAM_API_URL+'appDetail/'+id, null, header)

        if(request.success)
        {
          console.log('results', request.data);

          //here we verify if response object has data or not
          if(request.data.title !== '')
          {
            this.setState({ detail: request.data })
          }
          else
          {
            this.setState({ showEmptyMsg: true })
          }
         
        }
        else
        {
          console.error(document.title +' - request: ', request.error);
        }

        this.setState({ loading: false })
    }
    

    render()
    {
        return <React.Fragment>
            {
                this.state.loading ?  
                  <Loader/>
                  :
                    this.state.showEmptyMsg 
                    ?
                      <div>No data </div>
                    :
                    <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <div className='flex  flex-col lg:flex-row gap-3'>
                            <div className='flex flex-col gap-1'>
                                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{this.state.detail.title}</h1>
                                <h3>{this.state.detail.description}</h3>
                                <h3><b>Price: </b> {this.state.detail.price}</h3>


                                
                                
                                <div className='mt-4 flex flex-row gap-5'>
                                    <h3><b>Publisher: </b> {this.state.detail.publisher.name}</h3>
                                    <h3><b>Developer: </b>{this.state.detail.developer.name}</h3>
                                    <h3><b>Released: </b>{this.state.detail.released}</h3>
                               </div>
                            </div>

                            <div className='w-full h-full flex items-center justify-center'>
                              <img className='bg-cover' src={this.state.detail.imgUrl} alt={this.state.detail.title} />
                            </div>
                        </div>
                      
                       
                        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">  
                            <div class='my-3 flex flex-wrap -m-1'>
                              {
                                  this.state.detail.tags.map((tag, index) => {
                                        return <div key={index}>
                                          <span onClick={() =>goToUrl(tag.url)}
                                                className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >
                                                {tag.name}
                                            </span>
                                         </div>

                                            })
                                        }
                            </div>
                        </p>
                        
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        {
                                  this.state.detail.DLCs.map(item => {
                                        return <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" key={item.appId}>
                                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{item.name}</h1>
                                    
                                                    <p className="text-gray-500 dark:text-gray-300">
                                                    {item.price} 
                                                    </p>
                                    
                                                    <a href={item.url} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            })
                         }
                        </div>
                    </div>
                </section>
            }
           
             </React.Fragment>
    }
}