import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-width: 1000px;
`;

export const Header = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 99;
`;

export const Body = styled.div`
  padding-left: 180px;
  padding-top: 40px;
  position: relative;
  z-index: 1;
  height: 100vh;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 40px;
  left: 0px;
  float: left;
`;

export const SideContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: table;
`;

export const Breadcumb = styled.div`
  display: flex;
  line-height: 40px;
  font-size: 18px;
  padding-left: 25px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #D4D8DD;
`;

export const WrapContent = styled.div`
  background-color: #EFF1F4;
  height: 100%;
  display: table-row;
`;

export const TopMessage = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`;

export const Content = styled.div`
  padding-left: 16px;
  padding-top: 15px;
  width: 900px;
`;
