import React from 'react';
import data from '../../data.json';
import FeedList from '../components/FeedList.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: data.photos
    }
  }

  render() {
    return (
      <div className="HomePage">
        <FeedList
          imgArray={this.state.photos}
        />
      </div>
    );
  }
}

export default HomePage;
