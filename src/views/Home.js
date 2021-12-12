import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import setTitle from '../components/functions/setTitle';
import { SearchBar } from '../components/SearchBar';

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = { usedSearch: false, results: [] }
  }

    componentDidMount() {
  
      //this helps us to add custom title to website tab
      setTitle('Home');
    }

    _handleResults = (results) => {
      console.log('results', results);
      this.setState({ results, usedSearch: true })
    }
  
    render() {
    return <div className='flex flex-col gap-5 h-auto pt-5'>
      <div className='flex flex-col items-center gap-5'>

        <SearchBar className='content-center' placeholder='search any game...'
                  onResults={this._handleResults}/>
                  
        {/* here we verify if result has data or not */}

        {this.state.usedSearch ? this.state.results.length === 0 ? <p>sorry, results not found</p> : 
        <CardList data={this.state.results} />: <small>Use the form to search a videogame</small>}
      </div>
    </div>
    }
}