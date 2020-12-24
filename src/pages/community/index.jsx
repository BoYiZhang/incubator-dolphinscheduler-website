import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Sidemenu from '../../components/sidemenu';
import Slider from '../../components/slider';
import EventCard from './eventCard';
import ContactItem from './contactItem';
import ContributorItem from './contributorItem';
import Footer from '../../components/footer';
import communityConfig from '../../../site_config/community.jsx';
import communityConfigs from '../../../site_config/community';

import './index.scss';

class Community extends Language {

  render() {
    const language = this.getLanguage();
    let dataSource = communityConfig[language];
    if (window.location.pathname.indexOf('/docs/community/') >= 0) {
      dataSource = communityConfigs[language];
    }
    return (
      <div className="community-page">
        <Header
          currentKey="community"
          type="normal"
          logo="/img/hlogo_colorful.svg"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="/img/system/community.png" text={dataSource.barText} />
        <section className="events-section">
          <h3>{dataSource.events.title}</h3>
          <Slider>
            {dataSource.events.list.map((event, i) => (
              <EventCard event={event} key={i} />
            ))}
          </Slider>
        </section>
        <section className="contact-section">
          <h3>{dataSource.contacts.title}</h3>
          <p>{dataSource.contacts.desc}</p>
          <div className="contact-list">
          {
            dataSource.contacts.list.map((contact, i) => (
              <ContactItem contact={contact} key={i} />
            ))
          }
          </div>
        </section>
        <section className="contributor-section">
              <h3>{dataSource.contributorGuide.title}</h3>
              <p>{dataSource.contributorGuide.desc}</p>
              <div className="contributor-list">
              {
                dataSource.contributorGuide.list.map((contributor, i) => (
                  <ContributorItem contributor={contributor} key={i} />
                ))
              }
              </div>
            </section>
        <Footer logo="/img/ds_gray.svg" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Community />, document.getElementById('root'));

export default Community;
