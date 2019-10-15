import {pageContents, listData, settings} from '../../data/dataStore';
import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description,
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div className={styles.component}>
          {this.state.lists.map(({key, ...listsProps}) => (
            <List key={key} {...listsProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
        <List {...listData} />
      </main>
    )
  }
}

export default App;
