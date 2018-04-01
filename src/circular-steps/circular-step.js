import React from 'react';
import { data } from './data'
import Text from './text';

class CircleStep extends React.Component {

    /**
     * @type {SvgCardSchema}
     */

    render() {
        const data = this.props.data || this.state.data || {};
    
        return (
           <g>
               <defs>
                    <linearGradient id="linear-gradient" x1={-0.08} y1={300.25} x2={300.08} y2={0.08} gradientUnits="userSpaceOnUse" >
                        <stop offset={0} stopColor="#929ca3" />
                        <stop offset={0.18} stopColor="#acb6bc" />
                        <stop offset={0.48} stopColor="#c5ccd1" />
                        <stop offset={0.87} stopColor="#f1f2f3" />
                        <stop offset={1} stopColor="#fff" />
                    </linearGradient>
                    <filter id="AI_GaussianBlur_4">
                        <feGaussianBlur stdDeviation={4} />
                    </filter>
                    <filter id="AI_GaussianBlur_7">
                        <feGaussianBlur stdDeviation={7} />
                    </filter>
                    <linearGradient id="linear-gradient-2" x1={84.74} y1={97.95} x2={67.26} y2={197.05} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#1c2225" />
                        <stop offset={0.12} stopColor="#606467" />
                        <stop offset={0.24} stopColor="#999b9d" />
                        <stop offset={0.33} stopColor="#bebebf" />
                        <stop offset={0.38} stopColor="#cacbcc" />
                        <stop offset={0.54} stopColor="#d0d1cf" />
                        <stop offset={1} stopColor="#d2d3d0" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1={82.47} y1={86.97} x2={176.58} y2={95.21} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#acb6bc" />
                        <stop offset={0.03} stopColor="#a7b1b7" />
                        <stop offset={0.07} stopColor="#9aa3a9" />
                        <stop offset={0.11} stopColor="#838c91" />
                        <stop offset={0.15} stopColor="#636b70" />
                        <stop offset={0.17} stopColor="#52595e" />
                        <stop offset={0.26} stopColor="#484f54" />
                        <stop offset={0.36} stopColor="#434b4f" />
                        <stop offset={0.74} stopColor="#8e9093" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-4" x1={149.45} y1={38.3} x2={149.45} y2={259.7}gradientUnits="userSpaceOnUse" >
                        <stop offset={0} stopColor="#602b00" />
                        <stop offset={0} stopColor="#672f02" />
                        <stop offset={0.03} stopColor="#95490e" />
                        <stop offset={0.05} stopColor="#b95d18" />
                        <stop offset={0.07} stopColor="#d36b1f" />
                        <stop offset={0.09} stopColor="#e37424" />
                        <stop offset={0.1} stopColor="#e87725" />
                        <stop offset={0.39} stopColor="#ffc713" />
                        <stop offset={0.43} stopColor="#f9c219" />
                        <stop offset={0.46} stopColor="#ebb71f" />
                        <stop offset={0.48} stopColor="#daaa2c" />
                        <stop offset={0.49} stopColor="#c19538" />
                        <stop offset={0.51} stopColor="#a68044" />
                        <stop offset={0.52} stopColor="#87694a" />
                        <stop offset={0.53} stopColor="#67514b" />
                        <stop offset={0.55} stopColor="#463847" />
                        <stop offset={0.56} stopColor="#231c40" />
                        <stop offset={0.56} stopColor="#15113e" />
                        <stop offset={0.65} stopColor="#16143a" />
                        <stop offset={0.86} stopColor="#1b1a36" />
                        <stop offset={0.89} stopColor="#191832" />
                        <stop offset={0.93} stopColor="#131226" />
                        <stop offset={0.97} stopColor="#090912" />
                        <stop offset={1} />
                    </linearGradient>
                    <linearGradient id="linear-gradient-5" x1={149.55} y1={147.4} x2={149.55} y2={273.5} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#000013" />
                        <stop offset={0.37} stopColor="#1b193e" />
                        <stop offset={0.7} stopColor="#252340" />
                        <stop offset={1} stopColor="#282740" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-6" x1={197.94} y1={191.08} x2={248.26} y2={103.92} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#1c2225" />
                        <stop offset={0.01} stopColor="#242a2c" />
                        <stop offset={0.03} stopColor="#303639" />
                        <stop offset={0.06} stopColor="#373c3f" />
                        <stop offset={0.12} stopColor="#393e41" />
                        <stop offset={0.17} stopColor="#75787b" />
                        <stop offset={0.31} stopColor="#cacbcc" />
                        <stop offset={0.36} stopColor="#dadadb" />
                        <stop offset={0.43} stopColor="#ebebeb" />
                        <stop offset={0.52} stopColor="#f6f6f7" />
                        <stop offset={0.65} stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-7" x1={96.33} y1={65.97} x2={209.89} y2={131.53} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#e87725" />
                        <stop offset={0.15} stopColor="#eb8923" />
                        <stop offset={0.4} stopColor="#f2a121" />
                        <stop offset={0.63} stopColor="#f8b518" />
                        <stop offset={0.84} stopColor="#fdc116" />
                        <stop offset={1} stopColor="#ffc713" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-8" x1={28} y1={122.36} x2={98.86} y2={122.36} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#bdbec0" />
                        <stop offset={0.25} stopColor="#c0c2c4" />
                        <stop offset={0.56} stopColor="#cdcfd0" />
                        <stop offset={0.89} stopColor="#e1e2e3" />
                        <stop offset={1} stopColor="#e9e9e9" />
                    </linearGradient>
                </defs>


                <g className="circular-steps">
                        <g className="shades">
                            <g className="left-circle-shadow">
                                 <g opacity={0.91} filter="url(#AI_GaussianBlur_7)">
                                     <path className="cls-5" d="M74.91 173.2a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.09-73.1a50.3 50.3 0 1 0 50.3 50.3A50.27 50.27 0 0 0 75 100.1z" />
                                     <path d="M64 190.48a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-73.1a50.27 50.27 0 0 0-50.3 50.3c0 27.8 23.25 56 51.05 56s49.55-28.22 49.55-56a50.27 50.27 0 0 0-50.29-50.3z" fill="#7e8385" />
                                     <path d="M53.1 207.75a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-73.1A50.27 50.27 0 0 0 2.9 185c0 27.8 24 61.75 51.8 61.75s48.8-33.95 48.8-61.75a50.27 50.27 0 0 0-50.3-50.35z" fill="#888e91" opacity={0.9} />
                                 </g>
                                 <path d="M79 102.2c-27.8 0-54.3 22.5-54.3 50.3s25.8 56.25 60.3 53.08c27.68-2.55 44.3-25.28 44.3-53.08A50.27 50.27 0 0 0 79 102.2zm-.1 73.1a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23z" fill="#5c5f61" opacity={0.56} filter="url(#AI_GaussianBlur_4)"/>
                            </g>
                            <g className="right-circle-shadow">
                                    <g opacity={0.85} filter="url(#AI_GaussianBlur_7)">
                                        <path className="cls-5" d="M222.91 174.2a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-68.1c-27.8 0-50.3 17.5-50.3 45.3A50.27 50.27 0 0 0 223 201.7c27.8 0 40.3-22.5 40.3-50.3s-12.49-45.3-40.3-45.3z" />
                                        <path d="M222.07 175.53a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-68.29c-27.8 0-50.3 17.69-50.3 45.49a50.27 50.27 0 0 0 50.3 50.3c27.8 0 40.68-22.5 40.68-50.3s-12.85-45.49-40.68-45.49z" fill="#75797b" />
                                        <path d="M221.23 176.86a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-68.48c-27.8 0-50.3 17.88-50.3 45.68a50.27 50.27 0 0 0 50.3 50.3c27.8 0 41.07-22.5 41.07-50.3s-13.27-45.69-41.07-45.69z" fill="#767a7c" />
                                        <path d="M220.4 178.19a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-68.68c-27.8 0-50.3 18.08-50.3 45.88a50.27 50.27 0 0 0 50.3 50.3c27.8 0 41.45-22.5 41.45-50.3s-13.65-45.88-41.45-45.88z"  fill="#777b7d"  />
                                        <path d="M219.56 179.52a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-68.87c-27.8 0-50.3 18.27-50.3 46.07a50.27 50.27 0 0 0 50.3 50.3c27.8 0 41.84-22.5 41.84-50.3s-14.04-46.07-41.84-46.07z" fill="#787c7f" />
                                        <path d="M218.72 180.85a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-69.06c-27.8 0-50.3 18.46-50.3 46.26a50.27 50.27 0 0 0 50.3 50.3c27.8 0 42.22-22.5 42.22-50.3s-14.42-46.27-42.22-46.27z" fill="#797d80" />
                                        <path d="M217.88 182.17a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-69.25c-27.8 0-50.3 18.65-50.3 46.45a50.27 50.27 0 0 0 50.3 50.3c27.8 0 42.61-22.5 42.61-50.3s-14.81-46.45-42.59-46.45z" fill="#797e81" />
                                        <path d="M217 183.5a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-69.45c-27.8 0-50.3 18.85-50.3 46.65a50.27 50.27 0 0 0 50.3 50.3c27.8 0 43-22.5 43-50.3s-15.16-46.64-42.96-46.64z" fill="#7a7f82" />
                                        <path d="M216.2 184.83a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-69.64c-27.8 0-50.3 19-50.3 46.84a50.27 50.27 0 0 0 50.3 50.3c27.8 0 43.38-22.5 43.38-50.3s-15.58-46.84-43.38-46.84z" fill="#7b8083" />
                                        <path d="M215.36 186.16a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-69.83c-27.8 0-50.3 19.23-50.3 47a50.27 50.27 0 0 0 50.3 50.3c27.8 0 43.76-22.5 43.76-50.3s-15.96-47-43.76-47z" fill="#7c8184" />
                                        <path d="M214.52 187.49a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-70c-27.8 0-50.3 19.42-50.3 47.22a50.27 50.27 0 0 0 50.3 50.3c27.8 0 44.15-22.5 44.15-50.3s-16.35-47.24-44.15-47.24z" fill="#7d8285" />
                                        <path d="M213.68 188.82a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-70.22c-27.8 0-50.3 19.62-50.3 47.42a50.27 50.27 0 0 0 50.3 50.3c27.8 0 44.53-22.5 44.53-50.3s-16.73-47.42-44.53-47.42z" fill="#7e8386" />
                                        <path d="M212.85 190.15a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-70.41c-27.8 0-50.3 19.81-50.3 47.61a50.27 50.27 0 0 0 50.3 50.3c27.8 0 44.92-22.5 44.92-50.3s-17.12-47.61-44.92-47.61z" fill="#7e8487" />
                                        <path className="cls-6" d="M212 191.48a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-70.6c-27.8 0-50.3 20-50.3 47.8a50.27 50.27 0 0 0 50.3 50.3c27.8 0 45.3-22.5 45.3-50.3s-17.49-47.8-45.29-47.8z" />
                                        <path d="M211.17 192.81a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-70.79c-27.8 0-50.3 20.19-50.3 48a50.27 50.27 0 0 0 50.3 50.3c27.8 0 45.68-22.5 45.68-50.3S239.07 122 211.27 122z" fill="#808689" />
                                        <path d="M210.33 194.14a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71c-27.8 0-50.3 20.38-50.3 48.18a50.27 50.27 0 0 0 50.3 50.3c27.8 0 46.07-22.5 46.07-50.3s-18.27-48.17-46.07-48.17z" fill="#81878a" />
                                        <path d="M209.49 195.46a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71.18c-27.8 0-50.3 20.58-50.3 48.38a50.27 50.27 0 0 0 50.3 50.3c27.8 0 46.45-22.5 46.45-50.3s-18.65-48.37-46.45-48.37z" fill="#82878b" />
                                        <path d="M208.65 196.79a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71.37c-27.8 0-50.3 20.77-50.3 48.57a50.27 50.27 0 0 0 50.3 50.3c27.8 0 46.84-22.5 46.84-50.3s-19.04-48.57-46.84-48.57z" fill="#83888c" />
                                        <path d="M207.81 198.12a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71.56c-27.8 0-50.3 21-50.3 48.76a50.27 50.27 0 0 0 50.3 50.3c27.8 0 47.22-22.5 47.22-50.3s-19.42-48.76-47.22-48.76z" fill="#84898d" />
                                        <path d="M207 199.45a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71.75c-27.8 0-50.3 21.15-50.3 49a50.27 50.27 0 0 0 50.3 50.3c27.8 0 47.61-22.5 47.61-50.3s-19.84-49-47.64-49z" fill="#848a8f" />
                                        <path d="M206.13 200.78a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-71.95c-27.8 0-50.3 21.35-50.3 49.15a50.27 50.27 0 0 0 50.3 50.3c27.8 0 48-22.5 48-50.3s-20.23-49.15-48-49.15z" fill="#858b90" />
                                        <path d="M205.29 202.11a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-72.14c-27.8 0-50.3 21.54-50.3 49.34a50.27 50.27 0 0 0 50.3 50.3c27.8 0 48.38-22.5 48.38-50.3S233.19 130 205.39 130z" fill="#868d91" />
                                        <path d="M204.46 203.44a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-72.33c-27.8 0-50.3 21.73-50.3 49.53a50.27 50.27 0 0 0 50.3 50.3c27.8 0 48.76-22.5 48.76-50.3s-20.96-49.53-48.76-49.53z" fill="#878e92" />
                                        <path d="M203.62 204.77a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-72.52c-27.8 0-50.3 21.92-50.3 49.72a50.27 50.27 0 0 0 50.3 50.3c27.8 0 49.15-22.5 49.15-50.3s-21.35-49.73-49.15-49.73z" fill="#888f93" />
                                        <path d="M202.78 206.1a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-72.72a50.11 50.11 0 1 0 0 100.22c27.8 0 49.53-22.5 49.53-50.3s-21.73-49.92-49.53-49.92z" fill="#899094" />
                                        <path d="M201.94 207.43a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-72.91A50.2 50.2 0 1 0 252 184.63a50.11 50.11 0 0 0-50-50.11z" fill="#8a9196" />
                                        <path className="cls-8" d="M201.1 208.75a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-73.1A50.3 50.3 0 1 0 251.5 186a50.27 50.27 0 0 0-50.3-50.35z" />
                                    </g>
                                    <path d="M218 104.2c-27.8 0-54.3 22.5-54.3 50.3s26.5 56.3 54.3 56.3 50.3-28.5 50.3-56.3a50.27 50.27 0 0 0-50.3-50.3zm-.1 73.1a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23z" fill="#4e5051" filter="url(#AI_GaussianBlur_4)" />
                            </g>
                            <path d="M170.51 35.8C133.4 29.5 95.76 47.57 86 68.9c-1.73 3.77-5.09 14.43-1.32 21.7l14.43 57 14.5.1V74.4c0-19.5 47.54-17 64.8 0" fill="url(#linear-gradient-3)" opacity={0.63} filter="url(#AI_GaussianBlur_4)" />
                            <g className="bottom-circle-shadow" filter="url(#AI_GaussianBlur_7)">
                                 <path className="cls-5" d="M147.81 195.85a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23zm.1-73.1a50.3 50.3 0 1 0 50.3 50.3 50.27 50.27 0 0 0-50.3-50.3z" />
                                 <path className="cls-6" d="M137.91 230.19a23.57 23.57 0 1 1 23.26-23.57 23.38 23.38 0 0 1-23.26 23.57zm.1-77.42c-28.49 0-66.34 17.68-65.55 54.05.62 28.48 16 54.86 65.72 54.85 32.3 0 57.38-26.36 57.38-54.85S166.5 152.77 138 152.77z" />
                                 <path className="cls-8" d="M128 264.53a24.15 24.15 0 1 1 23.83-24.14A23.95 23.95 0 0 1 128 264.53zm.1-81.74c-29.18 0-82.53 12.87-80.8 57.8 1.12 29.16 9.44 59.41 81.14 59.4 36.81 0 64.47-30.22 64.47-59.4s-35.61-57.79-64.8-57.79z" opacity={0.95} />
                            </g>
                        </g>
                        <g className="left-circle">
                            <path d="M76 97.2a50.3 50.3 0 1 0 50.3 50.3A50.27 50.27 0 0 0 76 97.2zm-.1 73.1a23 23 0 1 1 22.7-23 22.81 22.81 0 0 1-22.7 23z" fill="url(#linear-gradient-2)" />
                            <text className="cls-41" transform="translate(55.7 158.33)">
                                {data.stepFour}
                            </text>
                            <path className="cls-46" d="M99.1 147.4l27.8-5.1c-2.2-25.9-23.9-45.2-50.3-45.2-23.1 0-42.6 14.5-48.6 35.7 6.7-13.9 19.9-23.4 35.1-23.4 18.4 0 36.1 16.1 36 38z" />
                            <path d="M99.1 147.4l27.8-5.1c-3.4-26.17-24-45-50.37-45A50.07 50.07 0 0 0 28 132.8c6.7-13.9 19.9-23.4 35.1-23.4 18.4 0 36.1 16.1 36 38z" fill="url(#linear-gradient-8)" />
                        </g>
                        <g>
                            <path d="M223.1 197.8a50.3 50.3 0 1 0-50.3-50.3 50.27 50.27 0 0 0 50.3 50.3zm1.5-73.1a23 23 0 1 1-22.7 23 22.81 22.81 0 0 1 22.7-23z" fill="url(#linear-gradient-6)" />
                            <path className="cls-46" d="M272.3 136.6c.1 1.4.2 2.8.2 4.2 0 24.4-17.2 43.5-38.1 43.5-18.8 0-31.2-15.7-34.3-36.6l-27.1.6a50.3 50.3 0 1 0 99.3-11.7z" />
                            <text className="cls-41" transform="translate(206.41 158.33)">
                            {data.stepTwo}
                            </text>
                        </g>
                        <g className="top-semi-circle">
                            <path d="M149.7 38.3h-.5a35.68 35.68 0 0 0-35.6 35.6v150.2a35.68 35.68 0 0 0 35.6 35.6h.5a35.68 35.68 0 0 0 35.6-35.6V73.9a35.61 35.61 0 0 0-35.6-35.6zm22.6 185.9c0 13.9-8.6 22.5-22.5 22.5h-.5c-13.9 0-22.5-8.6-22.5-22.5V73.8c0-13.9 8.6-22.5 22.5-22.5h.5c13.9 0 22.5 8.6 22.5 22.5v150.4z" fill="url(#linear-gradient-4)" />
                            <path d="M113.6 147.7V74.4a35.64 35.64 0 0 1 35.5-35.5h.7a35.64 35.64 0 0 1 35.5 35.5V149h14.5V74.5a50.15 50.15 0 0 0-50-50h-.7a50.15 50.15 0 0 0-50 50v73.1l14.5.1z" fill="url(#linear-gradient-7)" />
                            <text className="cls-41" transform="translate(133.4 86.77)">
                            {data.stepOne}
                            </text>
                        </g>
                        <g className="bottom-semi-circle">
                            <path d="M185.4 149v74.6a35.64 35.64 0 0 1-35.5 35.5h-.7a35.64 35.64 0 0 1-35.5-35.5v-76.2H99.2v76.1a50.15 50.15 0 0 0 50 50h.7a50.15 50.15 0 0 0 50-50V149h-14.5z" fill="url(#linear-gradient-5)" />
                            <text className="cls-41" transform="translate(131.56 233.43)">
                            {data.stepThree}
                            </text>
                        </g>
                        <g>
                            <path d="M150.12 102.15c28.13 0 51.92 19.8 51.92 47.92S178.25 210 150.12 210 98.2 178.2 98.2 150.08s23.8-47.93 51.92-47.93z" opacity={0.4} filter="url(#AI_GaussianBlur_4)" />
                            <path d="M150.12 104.15c28.13 0 44.92 17.8 44.92 45.92S178.25 202 150.12 202s-44.92-23.8-44.92-51.92 16.8-45.93 44.92-45.93z" opacity={0.65} filter="url(#AI_GaussianBlur_4)" />
                            <circle cx={149.55} cy={147.3} r={50.92} fill="#f5f7f5" />
                                <Text className="cls-53" transform="translate(117.7 144.28)" x={0} y={0} width={66} style={{ fontSize: '9.48' }}>
                                {data.infographicTitle}
                                </Text>
                                <text transform="matrix(.93 0 0 1 132.06 128.4)" style={{ isolation: "isolate" }} fontSize={4.86} fontFamily="Arial" fill="#010101" >
                                {data.bar}
                                </text>
                        </g>
                        <g className="content">
                            <g id="_1" data-name={1}>
                                 <path  d="M51.2 32.2a7 7 0 0 0-7 7c0 4.8 6.3 11.8 6.5 12.1a.56.56 0 0 0 .9 0c.3-.3 6.5-7.3 6.5-12.1a6.94 6.94 0 0 0-6.9-7zm0 10.6a3.5 3.5 0 1 1 3.5-3.5 3.54 3.54 0 0 1-3.5 3.5z"  fill="#020202" />
                                 <text className="cls-56" transform="translate(35.39 62.14)">
                                     YOUR TEXT
                                 </text>
                                 <path className="cls-57" d="M24.7 66.9h.8v14.9h-.8z" />
                                 <text className="cls-58" transform="translate(32.17 70.67)">
                                     Sample your text here  Text here your sample text  here place for your text
                                 </text>
                            </g>
                            <g>
                            <path className="cls-59" d="M238 33.6v17.6h21.7V33.6H238zm20.3 16.3h-19V35h19v14.9zm-5.4-11.5a2 2 0 1 0 2-2 1.89 1.89 0 0 0-2 2zm4.1 10.1h-16.3l4.1-10.9 5.4 6.8 2.7-2z" />
                            <text className="cls-56" transform="translate(232.62 62.14)">
                                YOUR TEXT
                            </text>
                            <path className="cls-57" d="M221.9 66.9h.8v14.9h-.8z" />
                            <text className="cls-58" transform="translate(229.4 70.67)">
                                Sample your text here  Text here your sample text  here place for your text
                            </text>
                            </g>
                            <g>
                                  <path className="cls-59" d="M257.4 236.8l-6.1-6.1a7.56 7.56 0 0 0-11.9-9.1 7.57 7.57 0 0 0 0 10.7 7.45 7.45 0 0 0 9.1 1.2l6.1 6.1a2 2 0 0 0 2.8-2.8zm-8.8-6a5.44 5.44 0 1 1 0-7.7 5.49 5.49 0 0 1 0 7.7z" />
                                  <text className="cls-56" transform="translate(232.62 251.09)">
                                      YOUR
                                      <tspan x={17.24} y={0}>
                                      TEX
                                      </tspan>
                                      <tspan x={27.88} y={0}>
                                      T
                                      </tspan>
                                  </text>
                                  <path className="cls-57" d="M221.9 255.9h.8v14.9h-.8z" />
                                  <text className="cls-58" transform="translate(229.4 259.62)">
                                      Sample your text here
                                  </text>
                                  <text className="cls-58" transform="translate(224.9 264.82)">
                                      T
                                      <tspan x={2.16} y={0}>
                                      ext here your sample text
                                      </tspan>
                                  </text>
                                  <text className="cls-58" transform="translate(228.4 270.02)">
                                      here place for your text
                                  </text>
                                  </g>
                            <g id="_4" data-name={4}>
                                 <path className="cls-59" d="M56.5 231.5h-.2a3.6 3.6 0 0 0-1.1.2l-6.8-6.8a4.25 4.25 0 0 0 .2-1.1v-.2a3.29 3.29 0 0 0-3.3-3.1 3.19 3.19 0 0 0-1.4.3l2.2 2.2a.76.76 0 0 1 .2.4 1.28 1.28 0 0 1-.2 1.2 1.14 1.14 0 0 1-.8.3.6.6 0 0 1-.4-.1c-.1-.1-.3-.1-.4-.2l-2.2-2.2a3.19 3.19 0 0 0-.3 1.4 3.29 3.29 0 0 0 3.1 3.3h.2a3.6 3.6 0 0 0 1.1-.2l6.8 6.8a4.25 4.25 0 0 0-.2 1.1v.2a3.29 3.29 0 0 0 3.3 3.1 3.19 3.19 0 0 0 1.4-.3l-2.2-2.2c-.1-.1-.2-.3-.3-.4a1.1 1.1 0 0 1 .3-1.2 1.14 1.14 0 0 1 .8-.3.6.6 0 0 1 .4.1c.1.1.3.1.4.2l2.2 2.2a3.33 3.33 0 0 0-2.8-4.7z" />
                                 <text className="cls-56" transform="translate(36.77 251.09)">
                                     YOUR
                                     <tspan x={17.24} y={0}>
                                     TEX
                                     </tspan>
                                     <tspan x={27.88} y={0}>
                                     T
                                     </tspan>
                                 </text>
                                 <path className="cls-57" d="M26.1 255.9h.8v14.9h-.8z" />
                                 <text className="cls-58" transform="translate(33.55 259.62)">
                                     Sample your text here
                                 </text>
                                 <text className="cls-58" transform="translate(29.15 264.82)">
                                     T
                                     <tspan x={2.16} y={0}>
                                     ext here your sample text
                                     </tspan>
                                 </text>
                                 <text className="cls-58" transform="translate(32.55 270.02)">
                                     here place for your text
                                 </text>
                            </g>
                        </g>
                        </g>
                        
           </g>
        );
    }
}

export default CircleStep;