import * as React from 'react';
import './App.css';
import { Item, Dropdown } from 'semantic-ui-react'

interface AppState {
  data: object[];
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const self = this;

    const url = 'https://www.garysieling.com/blog/wp-json/wp/v2/media/';
    fetch(url)
      .then(function(response) {
        response.json().then(
          (value) => {
            self.setState({data: value});            
          }
        )
      });
    }

  render() {
    const stateOptions = [
      { key: 'AL', value: 'AL', text: 'Alabama' },
      { key: 'AM', value: 'AM', text: 'AM' },
      { key: 'AB', value: 'AB', text: 'AB' }
    ];

    const imageDivs = this.state.data.map(
      (img) => img['media_details'].sizes.medium.source_url
    ).map(
      (image) => (
        <Item>
          <Item.Image src={image} size='small' />

          <Item.Content>
            <Item.Header>test</Item.Header>
            <Item.Meta>
              <span className='price'>$1200</span>
              <span className='stay'>1 Month</span>
            </Item.Meta>
            <Item.Description>test</Item.Description>
            <Dropdown 
              placeholder='State' 
              fluid={true}
              multiple={true}
              search={true} 
              selection={true} 
              options={stateOptions} />
            <Dropdown 
              placeholder='State' 
              fluid={true}
              multiple={true}
              search={true} 
              selection={true} 
              options={stateOptions} />
          </Item.Content>
        </Item>
      )
    );

    return (
      <Item.Group>
        {imageDivs}
      </Item.Group>
    );
  }
}

export default App;
