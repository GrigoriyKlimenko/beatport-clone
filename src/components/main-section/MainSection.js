import React from 'react';
import styles from './MainSection.module.css';
import TopTenTracks from './top-ten-tracks/TopTenTracks';
import NewReleases from './new-releases/NewReleases';
import NewOnBeatport from './new-on-beatport/NewOnBeatport';
import DjChart from './dj-chart/DjChart';
// import { Tracks as topTenTracksData } from './Data/TopTenTracks_Beatport/TopTenTracksData'
// import { Tracks as newReleasesData } from './Data/NewReleasesData/NewReleasesData';
// import { News as newOnBeatportData } from './Data/NewOnBeatportData/NewOnBeatportData';
// import { Djs as djChartData } from './Data/DjChartData/DjChartData';
import axios from 'axios-jsonp-pro';

class MainSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topTenTracksDataLoaded: false,
      topTenTracksData: {},
      newReleasesDataLoaded: false,
      newReleasesData: {},
      newOnBeatportDataLoaded: false,
      newOnBeatportData: {},
      djChartDataLoaded: false,
      djChartData: {}
    };
  }
  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/13roxg`)
      .then(res => {
        this.setState({ newOnBeatportData: res.data })
        this.setState({ newOnBeatportDataLoaded: true })
      })
      .catch(() => {
        console.log('Не удалось загрузить данные...')
      });
    axios.get(`https://api.myjson.com/bins/10eico`)
      .then(res => {
        this.setState({ djChartData: res.data })
        this.setState({ djChartDataLoaded: true })
      })
      .catch(() => {
        console.log('Не удалось загрузить данные...')
      });
    axios.get(`https://api.myjson.com/bins/il0ws`)
      .then(res => {
        this.setState({ topTenTracksData: res.data })
        this.setState({ topTenTracksDataLoaded: true })
      })
      .catch(() => {
        console.log('Не удалось загрузить данные...')
      });
    axios.get(`https://api.myjson.com/bins/otpn8`)
      .then(res => {
        this.setState({ newReleasesData: res.data })
        this.setState({ newReleasesDataLoaded: true })
      })
      .catch(() => {
        console.log('Не удалось загрузить данные...')
      });
  }
  render() {
    return (
      <section className={styles.main_section}>
        <div className={styles.left_col}>
          <div className={styles.new_on_beatport}>
            {this.state.newOnBeatportDataLoaded ? (
              <NewOnBeatport news={this.state.newOnBeatportData} />
            ) : (
                null
              )}
          </div>
          <div className={styles.dj_chart}>
            {this.state.djChartDataLoaded ? (
              <DjChart djs={this.state.djChartData} />
            ) : (
                null
              )}
          </div>
        </div>
        <div className={styles.right_col}>
          {this.state.topTenTracksDataLoaded ? (
            <TopTenTracks tracks={this.state.topTenTracksData} />
          ) : (
              null
            )}
        </div>
        <div className={styles.left_col}>
          {this.state.newReleasesDataLoaded ? (
            <NewReleases tracks={this.state.newReleasesData} />
          ) : (
              null
            )}
        </div>
      </section>
    )
  }
}

export default MainSection