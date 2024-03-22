import styled from "styled-components";

export default function ServerError({ error }: { error: string }) {
  return <P>{error}</P>;
}

const P = styled.p`
  color: red;
`;
