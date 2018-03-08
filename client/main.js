//Import the React library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list'

//Create a functional component
// const App = () => {
//   return (
//     <div>
//         <ImageList />
//     </div>
//   );
// }

//Create a class based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    //will be called just before rendering the component
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
         .then(response => {
            this.setState({images: response.data.data});
         });

         //Never do this-
         //this.state.images = [{}];
  }
  render() {
    console.log(this.state.images);
    return (
      <div>
        <ImageList />>
      </div>
    )
  }
}

//Render this component to the screen
//<App /> this syntax creates an instance of the component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
