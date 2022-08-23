/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
  margin: auto;
  padding-top: 70px;
  padding-bottom: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px;
  }

  & > .app-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      width: 150px;
      margin: 20px;
      cursor: pointer;
    }

    & > img:last-child {
      height: 100px;
      width: 70px;
    }
  }

  & > div > h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  & > div > p {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cont = styled.div`
  background-color: #f5f5f5;
`;

const Footer = () => {
  return (
    <Cont>
      <Grid>
        <div>
          <h3>Top Online Courses</h3>
          
          <p>I.T Fundamentals</p>
          <p>Agile Methodologies</p>
          <p>.Net Framework</p>
          <p>Asp.Net Core Framework (MVC)</p>
          <p>Node.js (MEAN Stack)</p>
          <p>Database Development (MSSQL)</p>
          <p>Azure Fundamentals</p>
          <p>Developing Solutions with Azure</p>
          <p>Azure DevOps</p>
          <p>Developing Artificial Intelligence Solutions with Azure</p>
          <p>Developing IoT Solutions with Azure</p>
        </div>
        
        
        <div>
          <h3>Project Team</h3>
          <p>Happy Felix Chukwuma</p>
          <p>Boluwatife Badru</p>
          <p>Joyful-Victory Chidinma</p>
          <p>Aliyu Lukman</p>
          <p>Eloka Chiejina</p>
          
        </div>

        
        
      </Grid>
    </Cont>
  );
};

export default Footer;
