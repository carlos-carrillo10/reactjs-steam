import React from 'react';
import { RoundedButtom } from '../components/RoundedButtom';

export class SearchBar extends React.Component 
{
  constructor(props) {
    super(props);
    
    this.state = {searchValue: '', validationVisible: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit =(e)=> 
  {
      e.preventDefault()
      
     console.log('data', this.state.searchValue);

     if(this.state.searchValue !== '')
     {
      this.setState({ validationVisible: false });

      const headers = { 'x-rapidapi-host': 'steam2.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_STEAM_API_KEY 
          }
       fetch(process.env.REACT_APP_STEAM_API_URL+'search/'+this.state.searchValue+'/page/1', { headers })
       .then(response => response.json())
       .then(data => 
         {
           this.props.onResults(data)
         }).catch((error) => {
           console.log(error)
         });
     }
     else
     {
        this.setState({ validationVisible: true }); 
     }     
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value, validationVisible: false});     
  }

    render()
    {
        return <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <div className='flex flex-col gap-3 items-center'>
            <div className='flex flex-row gap-3 justify-center items-center'>
                <label className='font-bold'>Search:</label>
                <input className='form-input' placeholder={this.props.placeholder} 
                       value={this.state.searchValue}
                       onChange={this.handleChange}></input>
                <RoundedButtom text='Go' color='bg-green-500'/>
              </div>    
            { this.state.validationVisible ? <small className='text-red-400'>search input is empty.</small> : '' }
            </div>
           
              </form>
        </React.Fragment>
    };
}