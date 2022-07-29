import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  justify-content: center;
`;

export const Td = styled.td`
  border: 2px solid #fff;
  width: 100px;
  height: 100px;
`;

export const BgPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  width: 100vw;
  height: 100vh;
`;

export const Text = styled.div`
  font-size: 40px;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export const Player = styled.h1`
  font-size: 30px;
  color: #fff;
`;

export const RestartButton = styled.button`
  background-color: #a62626;
  color: #fff;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

export const Alert = styled.div`
  background-color: #8d5185;
  background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%);
  width: auto;
  min-width: 300px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 100;
`;

export const CoverBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  display: block;
`;

export const Signature = styled.div`
  color: #fff;
  position: absolute;
  bottom: 10%;
  font-size: 20px;
`;
