"use client";
import React from "react";
import PostComponent from "./_components/post_component";
import postData from "./post_data.json";
import RightSidebar from "./_components/sidebar";
import { useAccount } from "wagmi";

const LaunchPage: React.FC = () => {
  const {address} = useAccount();
  return (
    <main className="twitter">
      <div className="twitter__left">
        <aside className="twitter-aside" data-aos="fade-right">
          <nav className="twitter-nav">
            <ul className="twitter-nav__list  mt-4">
              <li className="twitter-nav__item">
                <span className="uppercase">Buzzify</span>
              </li>

              <li className="twitter-nav__item">
                <svg
                  viewBox="0 0 24 24"
                  className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                >
                  <g>
                    <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                  </g>
                </svg>
                <span>Explore</span>
              </li>
              <li className="twitter-nav__item">
                <svg
                  viewBox="0 0 24 24"
                  className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                >
                  <g>
                    <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
                  </g>
                </svg>
                <span>Dashboard</span>
              </li>
            </ul>
          </nav>
          <div className="twitter-logged">
            <div className="twitter-logged-info">
              {address?.slice(0,15)+ "..." + address?.slice(-5)}
            </div>
          </div>
        </aside>
      </div>

      <div className="twitter__middle mt-2">
        <div className="flex gap-x-4">
          <div className="flex flex-wrap gap-4 p-4 w-[80%]">
            {[
              { id: "all", label: "All" },
              { id: "finance", label: "Finance" },
              { id: "crypto", label: "Crypto" },
              { id: "stocks", label: "Stocks" },
              { id: "forex", label: "Forex" },
              { id: "commodities", label: "Commodities" },
            ].map((category) => (
              <div
                key={category.id}
                className="relative flex w-[10rem] items-center justify-center rounded-xl bg-transparent px-4 py-3 font-medium text-white"
              >
                <input
                  className="peer hidden"
                  type="radio"
                  name="category"
                  id={category.id}
                />
                <label
                  className="peer-checked:border-blue-400 peer-checked:bg-[#e0245e] absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                  htmlFor={category.id}
                ></label>
                <div className="peer-checked:border-transparent peer-checked:bg-[#e0245e] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#e0245e] ring-offset-2"></div>
                <span className="pointer-events-none z-10 text-xs">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
          <div className="w-[20%] mt-8">
            <button
              className="twitter-nav__item active"
              onClick={() => alert("Hello World !!!")}
            >
              <svg
                viewBox="0 0 24 24"
                className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                </g>
              </svg>
              <span>Create New</span>
            </button>
          </div>
        </div>

        <div
          className="twitter-feed grid grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {postData.map((item, i) => {
            return (
              <>
                <PostComponent item={item} key={i} />{" "}
              </>
            );
          })}
        </div>
      </div>

      {/* <div className="twitter__right">
                    <div className="twitter-trendings" data-aos="fade-left">
                        <ul className="twitter-trendings__list">
                            <span className="twitter-trendings__list-title"
                            >Make your Prediction</span>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Assunto do Momento no Brasil</span
                                    >
                                    <span className="twitter-trendings-item__title">ROXA</span>
                                    <span className="twitter-trendings-item__subtitle"
                                    >12.2 mil tweets</span
                                    >
                                </div>
                            </li>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Futebol · Assunto do Momento</span
                                    >
                                    <span className="twitter-trendings-item__title">Eduardo Sasha</span>
                                </div>
                            </li>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Covid-19 - AO VIVO</span
                                    >
                                    <span className="twitter-trendings-item__title"
                                    >Governo faz apelo à China para ter 30 milhões de doses e cita
                                        risco de parar vacinação</span
                                    >
                                </div>
                                <span
                                    style={{
                                        backgroundImage: `url(https://pbs.twimg.com/semantic_core_img/1369458980817281024/wSIJlqDR?format=jpg&name=240x240)`
                                    }}
                                    className="twitter-trendings-item__img"
                                ></span>
                            </li>
                            <li className="twitter-trendings-item twitter-trendings-item--showmore">
                                <span>Mostrar mais</span>
                            </li>
                        </ul>

                    </div>
                    <div className="twitter-trendings" data-aos="fade-left">
                        <ul className="twitter-trendings__list">
                            <span className="twitter-trendings__list-title"
                            >Make your Prediction</span>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Assunto do Momento no Brasil</span
                                    >
                                    <span className="twitter-trendings-item__title">ROXA</span>
                                    <span className="twitter-trendings-item__subtitle"
                                    >12.2 mil tweets</span
                                    >
                                </div>
                            </li>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Futebol · Assunto do Momento</span
                                    >
                                    <span className="twitter-trendings-item__title">Eduardo Sasha</span>
                                </div>
                            </li>
                            <li className="twitter-trendings-item">
                                <div className="left">
                                    <span className="twitter-trendings-item__subtitle"
                                    >Covid-19 - AO VIVO</span
                                    >
                                    <span className="twitter-trendings-item__title"
                                    >Governo faz apelo à China para ter 30 milhões de doses e cita
                                        risco de parar vacinação</span
                                    >
                                </div>
                                <span
                                    style={{
                                        backgroundImage: `url(https://pbs.twimg.com/semantic_core_img/1369458980817281024/wSIJlqDR?format=jpg&name=240x240)`
                                    }}
                                    className="twitter-trendings-item__img"
                                ></span>
                            </li>
                            <li className="twitter-trendings-item twitter-trendings-item--showmore">
                                <span>Mostrar mais</span>
                            </li>
                        </ul>

                    </div>

                </div> */}

      <RightSidebar />
    </main>
  );
};

export default LaunchPage;
