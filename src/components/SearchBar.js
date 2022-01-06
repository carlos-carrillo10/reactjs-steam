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

  handleSubmit = async(e)=> 
  {
      e.preventDefault()

      console.log("value "+this.state.value)

      if(this.state.value !== '' && this.state.value !== undefined)
      {
        this.setState({ validationVisible: false }); 

      //here return valu we typed
      this.props.searchValue(this.state.value)
      }
      else
      {
        this.setState({ validationVisible: true }); 
      }   
  }

  handleChange(e) {
    this.setState({value: e.target.value, validationVisible: false});     
  }

    render()
    {
        return <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <div className='flex flex-col gap-3 items-center'>
            <div className='flex flex-row gap-3 justify-center items-center'>
                <label className='font-bold'>Search:</label>
                <input className='form-input' placeholder={this.props.placeholder} 
                       value={this.state.value}
                       onChange={this.handleChange}></input>
                <RoundedButtom text='Go' color='bg-green-500'/>
              </div>    
            { this.state.validationVisible ? <small className='text-red-400'>search input is empty.</small> : '' }
            </div>
           
              </form>
        </React.Fragment>
    };
}