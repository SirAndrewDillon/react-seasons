import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
window.navigator.geolocation.getCurrentPosition(
    //Sucsess Callback
    (position) => console.log(position),
    //Failure Callback
    (err) => console.log(err)
);

    return <div>Latitude:</div>
}



ReactDOM.render(<App />, document.getElementById('root'));