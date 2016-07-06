import React from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

const CompetitionList = React.createClass({
  render () {
    let {competitions} = this.props;

    return (
      <div className='container'>
        {competitions.map((comp, index) => (
          <li className={classNames('competition', comp.listed ? 'listed' : 'unlisted')} key={index}>
            <a href={comp.wcaCompetitionId ? comp.wcaCompetitionId : comp._id}>{comp.competitionName}</a>
          </li>
        ))}
      </div>
    );
  }
});

export default createContainer((props) => {
  return {
    user: Meteor.user(),
    loading: !Meteor.subscribe('competitions').ready(),
    competitions: api.getCompetitions().fetch()
  };
}, CompetitionList);
