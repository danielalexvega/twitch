import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'226922837419-2h1r34iau457fa9b66hcqa6sjqhibbj1.apps.googleusercontent.com',
        scope:'email'
      })
    });
  }

  render() {
    return (
      <div>GoogleAuth</div>
    );
  };
}

export default GoogleAuth;