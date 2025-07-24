import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const LeaderBoard = () => {
  const leaderboardData = [
    { position: 1, name: "Srinidhi K", points: "18 points" },
    { position: 2, name: "SHEELENDRA", points: "15 points" },
    { position: 3, name: "Aryan Nanda", points: "13 points" },
    { position: 4, name: "Anmol Kapil", points: "12 points" },
    { position: 5, name: "Akanksha Yadav", points: "11 points"  },
    { position: 6, name: "Simon Anand", points: "11 points" },
    { position: 7, name: "Aarush Sharma", points: "11 points" },
    { position: 8, name: "LATIKA S", points: "10 points" },
    { position: 9, name: "Kumaresh Basu", points: "10 points" },
    { position: 10, name: "Kamal Aggarwal", points: "10 points" },
  ];

  return (
    <main className="bg-black flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full h-full max-w-[1920px] max-h-[1080px]">
        <img
          className="absolute w-full h-full top-0 left-0 blur-[3.5px] object-cover"
          alt="Background"
          src="https://c.animaapp.com/macop9gcz0nwau/img/5a177b84-e98e-4e98-998d-59980388ca23.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000073] backdrop-blur-[2.25px]" />

        <div className="relative w-full h-full flex flex-col items-center">
          <h1 className="mt-8 mb-6 text-[#9e0505] text-[28px] sm:text-[36px] md:text-[48px] text-center tracking-[2px] leading-tight px-2 font-normal">
            LEADERBOARD
          </h1>

          {/* Top 3 Cards: Mobile View */}
          <div className="flex flex-col sm:hidden gap-3 mt-4 w-full items-center px-2">
            {leaderboardData.slice(0, 3).map((entry, idx) => (
              <Card
                key={entry.position}
                className="w-full max-w-[220px] h-[100px] border-0 bg-transparent cursor-pointer transition-transform hover:scale-105 hover:bg-[#ffffff33] hover:shadow-lg"
              >
                <CardContent className="relative p-0 h-full">
                  <div className={`absolute w-full h-[80%] bottom-0 left-0 rounded-2xl ${
                    idx === 0
                      ? "bg-[#41363680] border-2 border-dashed border-[#c0551b]"
                      : "bg-gradient-to-tr from-white/30 to-white/10"
                  }`} />
                  <div className="relative flex flex-col items-center justify-end h-full pb-2">
                    <div className="text-white text-lg font-normal">{entry.name}</div>
                    <div className="text-white text-[16px] font-normal">{entry.points}</div>
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-10">
                      <div
                        className="bg-cover bg-center w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md"
                        style={{
                          backgroundImage: `url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1${idx === 0 ? "-1" : idx === 1 ? "-2" : ""}.svg)`,
                        }}
                      >
                        <span className="text-black text-[18px]">{entry.position}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top 3 Cards: Desktop View */}
          <div className="hidden sm:flex flex-row justify-center gap-4 mt-8 w-full items-center px-2">
            {[1, 0, 2].map((i) => {
              const entry = leaderboardData[i];
              return (
                <Card
                  key={entry.position}
                  className="w-full max-w-[220px] sm:w-[240px] sm:h-[120px] border-0 bg-transparent cursor-pointer transition-transform hover:scale-105 hover:bg-[#ffffff33] hover:shadow-lg"
                >
                  <CardContent className="relative p-0 h-full">
                    <div
                      className={`absolute w-full bottom-0 left-0 rounded-2xl ${
                        i === 0
                          ? "h-[110px] bg-[#41363680] border-[5px] border-dashed border-[#c0551b]"
                          : "h-[80%] bg-gradient-to-tr from-white/30 to-white/10"
                      }`}
                    />
                    <div className="relative flex flex-col items-center justify-end h-full pb-4">
                      <div className="text-white text-xl sm:text-2xl font-normal">{entry.name}</div>
                      <div className="text-white text-[16px] sm:text-[20px] font-normal">{entry.points}</div>
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                        <div
                          className="bg-cover bg-center w-[56px] h-[56px] rounded-full flex items-center justify-center"
                          style={{
                            backgroundImage: `url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1${i === 0 ? "-1" : i === 1 ? "-2" : ""}.svg)`,
                          }}
                        >
                          <span className="text-black text-[28px] sm:text-[36px]">{entry.position}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Ranks 4 to 10 */}
          <div className="w-[98vw] max-w-2xl sm:w-[900px] mt-6 px-2">
            {leaderboardData.slice(3).map((entry) => (
              <Card
                key={entry.position}
                className="w-full h-[44px] sm:h-[56px] mb-2 sm:mb-3 rounded-xl sm:rounded-2xl border-0 bg-[#ffffff1a] cursor-pointer transition-transform hover:scale-105 hover:bg-[#ffffff66] hover:shadow-lg"
              >
                <CardContent className="relative w-full h-full flex items-center justify-between px-4">
                  <Badge className="bg-transparent p-0">
                    <div className="bg-[#d9d9d9] rounded-xl w-7 sm:w-9 h-7 sm:h-9 flex items-center justify-center">
                      <div className="text-black text-[15px] sm:text-[22px]">{entry.position}</div>
                    </div>
                  </Badge>
                  <div className="text-white text-[18px] sm:text-[24px]">{entry.name}</div>
                  <div className="text-white text-[15px] sm:text-[20px]">{entry.points}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorations */}
        <img
          className="hidden sm:block absolute left-0 bottom-0 h-full max-h-[110vh] w-auto object-contain"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-35-47-789.png"
          alt="Decorative left"
        />
        <img
          className="hidden sm:block absolute right-0 bottom-0 h-full max-h-[110vh] w-auto object-contain"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-36-27-564-1.png"
          alt="Decorative right"
        />
      </div>
    </main>
  );
};

export default LeaderBoard;
