import React from 'react';
import { WeatherContainer } from '../../style/styled';
import { Card } from '../../style/styled';
export default function WeatherCard() {
  return (
    <WeatherContainer className="container">
      <Card className="card">
        <div className="city">
          <h1>São Paulo</h1>
        </div>
        <div className="date">
          {/* <h3>{dateBuilder(new Date())}</h3> */}
          <h3>Quarta feira, 14 de Setembro</h3>
        </div>
        <div className="temperature">
          <h1>25 °C</h1>
        </div>
        <div className="weather">
          <h3>Ensolarado</h3>
        </div>
      </Card>
    </WeatherContainer>
  );
}
