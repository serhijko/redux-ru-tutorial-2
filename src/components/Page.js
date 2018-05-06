import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './components.css'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText)
  }
  render() {
    const { year, photos, fetching } = this.props
    return <div className="ib page">
      <p>
        <button className="btn" onClick={::this.onYearBtnClick}>2016</button>{' '}
        <button className="btn" onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className="btn" onClick={::this.onYearBtnClick}>2014</button>
      </p>
      <h3>{year} год</h3>
      {
        fetching ?
        <p>Загрузка...</p>
        :
        photos.map((entry, index) =>
          <div key={index} className="photo">
            <p><img src={entry.src} /></p>
            <p>{entry.likes.count} ❤</p>
          </div>
        )
      }
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}
