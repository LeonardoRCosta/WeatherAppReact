import React from 'react';
import { WeatherContainer, Card, CityDiv, CityName,TempertureDiv, TemperatureText, FeelsLikeDiv, FeelsLikeText, WeatherDiv, WeatherText, DateDiv, DateText } from '../../style/styled';
export default function WeatherCard() {
  return (
    <WeatherContainer className="container">
      <Card className="card">
        <CityDiv className="city">
          <i class="fa-solid fa-location-dot"></i>
          <CityName>São Paulo</CityName>
        </CityDiv>
        <TempertureDiv className="temperature">
          <p>Icone</p>
          <TemperatureText>25 °C</TemperatureText>
        </TempertureDiv>
        <FeelsLikeDiv className="feelsLike">
          <FeelsLikeText>Sensação 23 °C</FeelsLikeText>
        </FeelsLikeDiv>
        <WeatherDiv className="weather">
          <WeatherText>Ensolarado</WeatherText>
        </WeatherDiv>
        <DateDiv className="date">
          {/* <h3>{dateBuilder(new Date())}</h3> */}
          <DateText>Quarta feira, 14 de Setembro</DateText>
        </DateDiv>
      </Card>
    </WeatherContainer>
  );
}
