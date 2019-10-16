import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import Creator from '../Creator/Creator.js';

class App extends React.Component {
  static propTypes = {
    lists: Array,
    title: Node,
    subtitle: Node,
  }
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
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}    
      </main>
    );
  }
}

export default App;
