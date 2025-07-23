import React, { useEffect, useState } from "react";
import axios from "axios";

import DefaultlayoutHoc from "../layout/Default.layout";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      const { data } = await axios.get("/movie/top_rated");
      setRecommendedMovies(data.results);
    };
    fetchTopRated();
  }, []);

  useEffect(() => {
    const fetchPopular = async () => {
      const { data } = await axios.get("/movie/popular");
      setPremierMovies(data.results);
    };
    fetchPopular();
  }, []);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data } = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(data.results);
    };
    fetchUpcoming();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen text-gray-900 font-sans">
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-center">🎬 The Best of Entertainment</h2>
          <p className="text-center text-lg text-gray-600 mb-8">Curated cards that keep you entertained and inspired</p>
          <EntertainmentCardSlider />
        </section>

        <section className="mb-16">
          <PosterSlider
            title="🔥 Recommended Movies"
            subtitle="Top-rated movies you shouldn't miss"
            posters={recommendedMovies}
            isDark={false}
          />
        </section>

        <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 rounded-3xl shadow-lg py-12 px-6 md:px-12 mb-16 text-white">
          <div className="mb-8">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay Premier"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          <PosterSlider
            title="🎉 Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </section>

        <section className="mb-16">
          <PosterSlider
            title="💻 Online Streaming Events"
            subtitle="Catch the latest online entertainment"
            posters={onlineStreamEvents}
            isDark={false}
          />
        </section>
      </div>
    </div>
  );
};

export default DefaultlayoutHoc(HomePage);
