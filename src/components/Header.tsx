import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const RequestBtn = styled.div`
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: pink;
  font-weight: 600;
`;

const Header = () => {
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  });
  return (
    <Container initial={{ backgroundColor: "transparent" }}>
      <div>Logo</div>
      <RequestBtn>Request VPN</RequestBtn>
    </Container>
  );
};

export default Header;
