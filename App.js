import React, {Component} from 'react';
import StackNavigator from './src/components/navigator/stackNavigator';
import Info from './src/components/Info/Info';

export default class App extends Component {
  render() {
    if (this.state.splashSceen === true) {
      return <StackNavigator />;
    } else {
      return <Info navigation={this.props.navigation} />;
    }
  }

  /***
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      splashSceen: true,
    };
  }
}
