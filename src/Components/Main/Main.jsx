import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";
import "./Main.css";

function Main() {
  const {
    Input,
    setInput,
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
  } = useContext(Context);

  useEffect(() => {
    const showResult = (event) => {
      if (event.keyCode === 13) {
        onSent();
      }
    };

    const input = document.querySelector("#input");
    input.addEventListener("keyup", showResult);
    return () => {
      input.removeEventListener("keyup", showResult);
    };
  }, [onSent]);

  return (
    <div className="main w-full h-screen overflow-hidden relative">
      <div className="nav flex justify-between p-[2vw] h-[20%]">
        <p className="text-[#585858] text-[3vw] sm:text-[2vw] md-text-[1vw] ">
          My Gemini
        </p>
        <img
          className="w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:w-[3vw] lg:h-[3vw]  rounded-full"
          src={assets.user_icon}
          alt="User icon"
        />
      </div>

      {!showResults ? (
        <>
          <div className="chota absolute h-[50%]">
            <div className="mid-container h-[60%] overflow-visible leading-[4.5vw] flex flex-col w-full ml-[17vw]">
              <p className="mid-container1 text-transparent font-semibold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text w-fit text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[9vw]">
                Hello, Dev.
              </p>
              <p className="mid-container2 opacity-[0.2] mt-[3vw] sm:mt-[0vw] md:mt-[-2vw]  font-semibold text-[6vw] sm:text-[4vw] md:text-[3vw]">
                How can I help you today?
              </p>
            </div>

            <div className="Cards flex flex-wrap gap-3 h-[60%] justify-start ml-[16.8vw]">
              {[
                {
                  text: "Suggest beautiful places to see on an upcoming road trip",
                  img: assets.compass_icon,
                },
                {
                  text: "Briefly summarize this concept: urban planning",
                  img: assets.bulb_icon,
                },
                {
                  text: "Brainstorm team bonding activities for our work retreat",
                  img: assets.message_icon,
                },
                {
                  text: "Tell me about React js and React native",
                  img: assets.code_icon,
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => onSent(item.text)}
                    className="card cursor-pointer hover:bg-[#DFE4EA] bg-[#F0F4F9] text-[#585858] w-[15vmax] h-[17vmax] sm:w-[18vw] sm:h-[22vw]  md:w-[13vmax] md:h-[15vmax] rounded-xl p-4"
                  >
                    <p className="h-1/2 text-[1.2vw]">{item.text}</p>
                    <div className="h-1/2 flex justify-end items-end">
                      <img
                        className="w-[1.5vw] h-[1.5vw]"
                        src={item.img}
                        alt={item.text}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="result max-h-[60vh] overflow-y-scroll px-[17vw] pr-[22vw]">
          <div className="result-title flex gap-[1.5vw] items-center">
            <img
              className="w-16 rounded-full"
              src={assets.user_icon}
              alt="User icon"
            />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data mt-10 flex items-start">
            <img src={assets.gemini_icon} alt="Gemini icon" />
            {loading ? (
              <div className="loader w-full flex flex-col gap-6">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: resultData }}
                className="text-[1vw] leading-9 font-[400]"
              ></p>
            )}
          </div>
        </div>
      )}

      <div className="absolute bottom-0 main-bottom h-[20%] flex flex-col ml-[17vw]">
        <div id="input" className="relative h-3/4 mt-12">
          <div
            id="img"
            className="absolute md:top-[1.5vw] md:right-[2vw] top-[5vw] right-[10vw] flex gap-3 w-fit"
          >
            <img
              className=" md:w-[1.5vw] md:h-[1.5vw]  sm:w-[1.7vw] sm:h-[1.7vw]    w-[2.5vw] h-[2.5vw] cursor-pointer"
              src={assets.gallery_icon}
              alt="Gallery icon"
            />
            <img
              className=" md:w-[1.5vw] md:h-[1.5vw] sm:w-[1.7vw] sm:h-[1.7vw]   w-[2.5vw] h-[2.5vw] cursor-pointer"
              src={assets.mic_icon}
              alt="Mic icon"
            />
            <img
              onClick={() => onSent()}
              className="  md:w-[1.5vw] md:h-[1.5vw] sm:w-[1.7vw] sm:h-[1.7vw]  w-[2.5vw] h-[2.5vw]  cursor-pointer"
              src={assets.send_icon}
              alt="Send icon"
            />
          </div>
          <input
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            className="z-10 p-3 bg-[#F0F4F9] placeholder-[#585858] ::placeholder md:mt-[0vw] mt-[3vw] text-[1.9vw]  md:w-[55vw]  md:h-[4vw] md:text-[1.3vw] sm:w-[70vw]  sm:h-[5vw] w-[70vw] h-[7vw] rounded-full outline-none"
            type="text"
            placeholder="Enter a Prompt here"
          />
        </div>

        <div className="bottom-info mb-[1vw] ml-[3vw] text-[#585858] h-1/4">
          <p className="text-[#585858] text-[1.5vw] md:text-[0.9vw]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
