import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/lotties/celflutting.json";

// Definindo o componente LottieComponent
const LottieComponent = () => (
  <Lottie
    animationData={groovyWalkAnimation}
    loop={true}
    style={{ height: 400, 
            width: '50%', 
            backgroundColor: "#bd822b", 
            borderRadius: "20%",
            margin: "30px" }} // Aqui você pode ajustar a altura e largura conforme necessário
  />
);

export default LottieComponent;
