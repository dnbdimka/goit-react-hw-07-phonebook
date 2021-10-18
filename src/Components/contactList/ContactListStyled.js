import styled from "styled-components";

export const ContactsListStyle = styled.div`
  h2 {
    margin: 10px 0 20px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    color: #c9c9c9;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
  }
  button {
    height: 25px;
    background: transparent;
    position: relative;
    display: inline-block;
    /* padding: 5px 10px; */
    color: rgba(244, 3, 3, 0.7);
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    /* margin-top: 40px; */
    letter-spacing: 4px;
    border-radius: 5px;
    border-color: rgba(244, 3, 3, 0.5);
  }

  button:hover {
    background: rgba(244, 3, 3, 0.5);
    color: #fff;
    border-radius: 5px solid rgba(244, 3, 3, 0.5);
    box-shadow: 0 0 5px rgba(244, 3, 3, 0.5), 0 0 20px rgba(244, 3, 3, 0.5);
  }
`;
