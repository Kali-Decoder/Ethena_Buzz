"use client";
import React from "react";

const ExplorePage: React.FC = () => {
    return (
        <section className="relative py-28 md:py-28 lg:py-30">
            <main className="twitter">
                <div className="twitter__left">
                    <aside className="twitter-aside" data-aos="fade-right">
                       
                        <nav className="twitter-nav">
                            <ul className="twitter-nav__list  mt-4">
                            <li className="twitter-nav__item">
                                   
                                    <span className="uppercase">Buzzify</span>
                                </li>
                                <li className="twitter-nav__item active">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Página inicial</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Explorar</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Notificações</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Mensagens</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"
                                            ></path>
                                            <path
                                                d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Listas</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M16.04 7.266c-.45 0-.815.297-.947.7l-.03.113s-1.064-1.397-3.277-1.397c-2.855 0-4.928 2.4-4.928 5.706 0 2.495 1.755 4.525 3.912 4.525 2.307 0 3.632-1.492 3.632-1.492s.597 1.75 3.503 1.75c.49 0 4.837-.297 4.837-5.172 0-5.923-4.82-10.743-10.744-10.743-5.922 0-10.74 4.82-10.74 10.743 0 5.924 4.818 10.743 10.742 10.743 2.244 0 4.04-.544 5.82-1.765.163-.112.273-.283.31-.48s-.005-.394-.118-.557c-.224-.327-.71-.418-1.037-.193-1.516 1.04-3.05 1.504-4.976 1.504-5.102 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12c0 2.916-1.822 3.9-3.234 3.9-.53 0-2.234-.213-1.906-2.103 0 0 .938-5.4.938-5.523-.002-.557-.452-1.008-1.01-1.008zm-2.235 6.55c-.58.83-1.378 1.305-2.247 1.335l-.105.003c-1.483 0-2.52-1.112-2.578-2.768-.075-2.12 1.366-3.964 3.146-4.027l.102-.002c1.423 0 2.417 1.07 2.474 2.66.035 1.024-.245 2.018-.79 2.8z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Conectar</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <path
                                                d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Perfil</span>
                                </li>
                                <li className="twitter-nav__item">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    >
                                        <g>
                                            <circle cx="17" cy="12" r="1.5"></circle>
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="7" cy="12" r="1.5"></circle>
                                            <path
                                                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span>Mais</span>
                                </li>
                            </ul>
                        </nav>
                     
                        <div className="twitter-logged">
                           
                            <div className="twitter-logged-info">
                                <span className="twitter-logged-info__name">Bircoin Archive</span>
                                <span className="twitter-logged-info__user">0xabcde....896</span>
                            </div>
                            
                        </div>
                    </aside>
                </div>

                <div className="twitter__middle">
                    
                    <div className="twitter-feed" data-aos="fade-up">
                        
                        <div className="twitter-post">
                            <div className="twitter-post__retweeted">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1yevf0r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-meisx5"
                                >
                                    <g>
                                        <path
                                            d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"
                                        ></path>
                                    </g>
                                </svg>
                                <span className="uppercase">Bitcoin cryptocurrency</span>
                            </div>
                            <div className="twitter-post__bottom mt-4">
                                
                                <div className="twitter-post__content">
                                    <div className="twitter-post__title mb-2">
                                        <span className="name">Bitcoin</span>
                                        <span className="user">@Bitcoin</span>
                                        <span className="separator">-</span>
                                        <span className="date">7h</span>
                                    </div>
                                    <p className="twitter-post__paragraph">
                                        Weather Bitcoin hits 100k or Not ?
                                    </p>
                                    <ul className="twitter-post__interactions">
                                        <li className="comments">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>38K</span>
                                        </li>
                                        <li className="retweets">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>87</span>
                                        </li>
                                        <li className="likes">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>421</span>
                                        </li>
                                        <li className="share">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                                                    ></path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                        <div className="twitter-post">
                            <div className="twitter-post__retweeted">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1yevf0r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-meisx5"
                                >
                                    <g>
                                        <path
                                            d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"
                                        ></path>
                                    </g>
                                </svg>
                                <span className="uppercase">Bitcoin cryptocurrency</span>
                            </div>
                            <div className="twitter-post__bottom mt-4">
                                
                                <div className="twitter-post__content">
                                    <div className="twitter-post__title mb-2">
                                        <span className="name">Bitcoin</span>
                                        <span className="user">@Bitcoin</span>
                                        <span className="separator">-</span>
                                        <span className="date">7h</span>
                                    </div>
                                    <p className="twitter-post__paragraph">
                                        Weather Bitcoin hits 100k or Not ?
                                    </p>
                                    <ul className="twitter-post__interactions">
                                        <li className="comments">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>38K</span>
                                        </li>
                                        <li className="retweets">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>87</span>
                                        </li>
                                        <li className="likes">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <span>421</span>
                                        </li>
                                        <li className="share">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                                            >
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                                                    ></path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>

                <div className="twitter__right">
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
                    
                </div>
            </main>
        </section>
    );
};

export default ExplorePage;
