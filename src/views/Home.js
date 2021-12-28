import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import setTitle from '../components/functions/setTitle';
import { SearchBar } from '../components/SearchBar';
import { Get } from '../components/functions/APIService'

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = { usedSearch: false, results: [], loading:false }
  }

    componentDidMount() {
  
      //this helps us to add custom title to website tab
      setTitle('Home');
    }

    _handleSearchValue = async (value) => {

      this.setState({ loading : true, usedSearch: true }) //'usedSearch' helps us to show/hide first message on view

      if(value !== '')
     {
        this.setState({ validationVisible: false });

        let header = { 'x-rapidapi-host': 'steam2.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_STEAM_API_KEY  }

        let request = await Get(process.env.REACT_APP_STEAM_API_URL+'search/'+value+'/page/1', null, header)

        this.setState({ loading :false })

        if(request.success)
        {
          console.log('results', request.data);

          //here we verify if we get an array or a object (could be error message)
          if(request.data.length > 0)
          {
            this.setState({ results: request.data })
          }
          else
          {
            console.error(document.title +' - request: ', request.data);
          }
         
        }
        else
        {
          console.error(document.title +' - request: ', request.error);
        }
     }
     else
     {
        this.setState({ validationVisible: true }); 
     }     
     
     this.setState({ loading :false })
    }
  
    render() {
    return <div className='flex flex-col gap-5 h-auto pt-5'>
      <div className='flex flex-col items-center gap-5'>

        <SearchBar className='content-center' placeholder='search any game...'
                  searchValue={this._handleSearchValue}/>

        {this.state.loading ?  <svg className="animate-spin bg-red-500 h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> : "" }     
       
        {/* here we verify if result has data or not */}
        {this.state.usedSearch ? this.state.results === null || this.state.results.length === 0 ? <p>sorry, results not found</p> : 
        <CardList data={this.state.results} />: <small>Use the form to search a videogame</small>}
      </div>
    </div>
    }
}