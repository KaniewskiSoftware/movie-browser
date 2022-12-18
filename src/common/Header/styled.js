import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.color.common.black};
  margin-bottom: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    height: 142px;
    align-items: center;
    justify-content: center;
  }
 `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
 `;

export const Logo = styled.img`
  margin: 23px;
  width: 220px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 180px;
    height: 40px;
    margin: auto 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 30px;
    margin: auto 10px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 432px;
  border: 1px solid #e4e6f0;
  border-radius: 33px;
  margin: 23px;
  background-color: ${({ theme }) => theme.color.common.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
   margin: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    height: 44px;
    margin: 10px;
  }
`;
export const Loupe = styled.img`
  height: 18px;
  width: 18px;
  margin: 15px 25px;
`;
export const Input = styled.input`
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.common.darkerGrey};
  }
`;
