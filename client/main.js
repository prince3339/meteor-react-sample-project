//Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list'

//Create a component
const App = () => {
  return (
    <div>
        <ImageList />
    </div>
  );
}

//Render this component to the screen
//<App /> this syntax creates an instance of the component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
