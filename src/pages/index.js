import React from 'react'

const IndexPage = () => (
  <main>
    <div className='main'>
      <h1 style={{ marginBottom: 12 }}>
        <a href='https://github.com/Jerolan/jerome'>Jerome Olvera</a>
      </h1>

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
          text-align: center;
          margin-right: 20px;
        }
      `}
    </style>
  </main>
)

export default IndexPage
