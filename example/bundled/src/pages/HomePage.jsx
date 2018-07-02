import React from 'react';
import data from '../../data.json';
import FeedList from '../components/FeedList.jsx';
import BadButton from '../components/BadButton.jsx';

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
				<BadButton />
        <FeedList
          imgArray={this.state.photos}
          addPhoto={this.handleAddPhoto}
        />
      </div>
    );
  }
}

export default HomePage;
