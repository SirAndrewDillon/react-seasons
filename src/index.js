import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    //Must always call props with constructor
    constructor(props) {
        //super always follows constructor and must have props!
        //super is a reference to the parent constructor function
        super(props);
        //initilizes the STATE object 
        // THIS IS THE ONLY TIME you do direct assignment to this.state!
        this.state = { lat: null, errorMessage: '' };
    }

   componentDidMount() {
       window.navigator.geolocation.getCurrentPosition(
         position => this.setState ({lat: position.coords.latitude}),
         err => this.setState ({errorMessage: err.message})
      );
   }

   
        
        //Render must be used..React rule to define it!  
        //Conditional render  
        render() {
           if (this.state.errorMessage && !this.state.lat) {
               return <div>Error: {this.state.errorMessage}</div>;
           }
           if (!this.state.errorMessage && this.state.lat) {
               return <div>Latitude: {this.state.lat}</div>;
           }
           return <div>Loading...</div>
        }
    }
   
    



ReactDOM.render(<App />, document.getElementById('root'));