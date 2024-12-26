import styled from "styled-components";

export const Container = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? "100px" : "200px")};
  height: 100%;
  min-height: 100vh;
  background: #222933;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    width: ${({ isCollapsed }) => (isCollapsed ? "80px" : "160px")};
  }

  @media (max-width: 480px) {
    width: ${({ isCollapsed }) => (isCollapsed ? "50px" : "80px")};
  }
`;

export const Heading = styled.div`
  font-size: ${({ isCollapsed }) => (isCollapsed ? "13px" : "18px")};
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  margin-bottom: 20px;
  transition: font-size 0.3s ease;

  display: flex;
  justify-content: center;
  text-align: center;

  .dash {
    color: #4b4bfb;
  }

  .stack {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Items = styled.div`
  width: 100%;
  font-family: "Rubik", sans-serif;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    padding: 15px 20px;
    font-size: 13px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    svg {
      font-size: ${({ isCollapsed }) => (isCollapsed ? "24px" : "18px")};
      margin-right: 8px;
      transition: font-size 0.5s ease-in;
      transition: opacity 0.5s ease;
      opacity: ${({ isCollapsed }) => (isCollapsed ? "1" : "1")};

      @media (max-width: 768px) {
        font-size: ${({ isCollapsed }) => (isCollapsed ? "20px" : "22px")};
        margin-right: ${({ isCollapsed }) => (isCollapsed ? "0" : "8px")};
      }

      @media (max-width: 480px) {
        font-size: ${({ isCollapsed }) => (isCollapsed ? "16px" : "16px")};
      }
    }

    .text {
      max-width: ${({ isCollapsed }) => (isCollapsed ? "0px" : "200px")};
      opacity: ${({ isCollapsed }) => (isCollapsed ? "0" : "1")};
      transition: opacity 0.5s ease, max-width 0.5s ease;
      white-space: nowrap;
      overflow: hidden;
      @media (max-width: 480px) {
        display: none;
      }
    }

    &:hover {
      background-color: #12b9f9;
      transform: scale(1.03);
      transition: scale 0.2s ease-in-out;
    }

    &.selected {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 768px) {
      font-size: 10px;
      padding: 12px 16px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
      padding: 10px 11px;
    }
  }
`;

export const Pages = styled.div`
  padding: 10px 0;
  border-top: 3px solid #334;
  border-bottom: 3px solid #334;
`;

export const Subheading = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 10px 0px;
  color: #ccc;

  h6 {
    margin: 0;
    font-size: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px 0px;
    h6 {
      font-size: 8px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 0px;
    h6 {
      font-size: 6px;
      font-weight: 300;
    }
  }
`;
