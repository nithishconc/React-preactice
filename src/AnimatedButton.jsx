import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedButton = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 0 },
  });

  return <animated.button style={props}>Click me!</animated.button>;
};

export default AnimatedButton;
