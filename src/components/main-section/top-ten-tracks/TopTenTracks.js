import React from "react";
import styles from './TopTenTracks.module.css';

class TopTenTracks extends React.PureComponent {
  render() {
    return (
      <div className={styles.topten}>
        <div className={styles.topten_heading}>
          <div className={styles.topten_heading_buttons}>
            <button className={styles.topten_heading_play}><i className={`material-icons`}>play_arrow</i></button>
            <button className={styles.topten_heading_queue}><i className={`material-icons`}>queue_music</i></button>
          </div>
          <img src={require("../../../img/" + this.props.tracks.information.mainTitle)} alt="Beatport top10" className={styles.topten_heading_logo}></img>
        </div>
        <ol>
          {this.props.tracks.tracklist.map((track) => <Track key={this.props.tracks.information.mainTitle + track.title}>{track}</Track>)}
        </ol>
        <a href className={styles.topten_viewmore}>
          <span>{this.props.tracks.information.viewMore}</span>
          <span className={`material-icons`}>arrow_right</span>
        </a>
      </div>
    )
  }
}

class Track extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMobileActionsShow: false
    }
    this.showMobileActions = this.showMobileActions.bind(this);
  }
  showMobileActions(isMobileActionsShow) {
    this.setState({ isMobileActionsShow });
  }
  render() {
    return (
      <li className={styles.topten_item}>
        <div className={styles.topten_place}>{this.props.children.place}</div>
        <div className={styles.topten_info}>
          <a href="/track/move-your-body-extended-mix/12635556" className={styles.topten_title}>
            <span className={styles.topten_primary_title}>{this.props.children.title}</span>
            <span className={styles.topten_mixed}>{this.props.children.mixed}</span>
          </a>
          <span className={styles.topten_authors}>
            {this.props.children.authors.map(author => <Author key={this.props.children.place + author}>{author}</Author>)}
          </span>
          <span className={styles.topten_label}>
            <a href>{this.props.children.label}</a>
          </span>
        </div>
        <div className={((!this.state.isMobileActionsShow) ? styles.topten_item_actions : styles.mobile_actions_show)}>
          <div className={styles.mobile_actions_shadow}></div>
          <div className={styles.topten_actions_play_queue}>
            <button className={styles.item_actions_play}>
              <i className={`material-icons`}>play_arrow</i>
            </button>
            <button className={styles.item_actions_queue}>
              <i className={`material-icons`}>queue_music</i>
            </button>
          </div>
          <div className={styles.topten_actions_buy}>
            <button className={styles.item_buy_default}>
              {this.props.children.price}
            </button>
            <button className={styles.item_buy_menu}>
              <i className="material-icons">expand_more</i>
            </button>
          </div>
        </div>
        <div className={styles.mobile_actions_button} onClick={() => this.showMobileActions(!this.state.isMobileActionsShow)}>
          <i className="material-icons">more_horiz</i>
        </div>
      </li>
    )
  }
}

class Author extends React.PureComponent {
  render() {
    return (
      <a href>{this.props.children}</a>
    )
  }
}
export default TopTenTracks