import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This is an AppBar
 *When the leftIcon is clicked a navigation bar appers
 */
class MainBar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  openNav = () => this.setState({open:true});
  closeNav = () => this.setState({open: false});

  render (){
  return (
  <div>
      <AppBar
        title={<span style={styles.title}>myStrath</span>}
        onLeftIconButtonTouchTap = {this.openNav}
         iconClassNameRight="muidocs-icon-navigation-expand-more" />

      <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
       >
        <MenuItem>Profile</MenuItem>
        <MenuItem>TimeTable</MenuItem>
      </Drawer>

    </div>
    );
  }
}



export default MainBar;
