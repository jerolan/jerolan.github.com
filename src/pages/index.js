import React from 'react'

const renderEmojiDay = currentDate =>
  currentDate.getHours() > 7 &&
  currentDate.getHours() < 14
    ? '🌝'
    : '🌚'

const IndexPage = ({ currentDate = new Date() }) => (
  <main>
    <div className='main'>
      <a className='title'
        href='https://github.com/Jerolan/jerome'>
        <h1>
          <span>{ renderEmojiDay(currentDate) }</span> Jerome Olvera
        </h1>
      </a>

      <div className='links'>
        <a href='https://www.instagram.com/sediceyerom/'>instagram</a>
        <a href='https://twitter.com/SeDiceYerom'>twitter</a>
        <a href='https://github.com/Jerolan'>github</a>
      </div>
    </div>

    <style>
      {`
        .main {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: black;
          color: white;
          font-family: 'Monaco', 'Consolas', 'Ubuntu Mono', monospace;
        }

        .links {
          display: flex;
        }

        .links > a {
          color: #fd5c63;
          text-align: center;
          margin-right: 20px;
        }

        .title {
          margin-bottom: 16px;
          color: white;
          text-decoration: initial;
        }

        .title:hover {
          background-color: #fd5c63;
          color: black;
        }
      `}
    </style>
  </main>
)

export default IndexPage
