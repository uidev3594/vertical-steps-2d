import React from 'react';
import { data } from './data'
import Text from './text';

class Step extends React.Component {

    /**
     * @type {SvgCardSchema}
     */
    getDimentions(i) {
        let x1 = 0;
        let x2 = 0;
        return i % 2 !== 0 ? { x2: -59, x1: 90 } : { x1, x2 };
    }
    render() {
        const data = this.props.data || this.state.data || {};
        const index = this.props.index;
        const trf = this.getDimentions(index);
    
        return (
            <g className="vartical-steps">
                <defs>
                    <filter id="vertical-step-bg-shadow">
                        <feGaussianBlur stdDeviation={3} />
                    </filter>
                    <linearGradient id="shadow-bottom" x1={99.41} y1={71.8} x2={99.41} y2={58.86} gradientUnits="userSpaceOnUse" >
                        <stop offset={0} stopColor="#fff" stopOpacity={0} />
                        <stop offset={0.85} stopColor="#231f20" />
                    </linearGradient>
                    <linearGradient id="shadow-left" x1={59.74} y1={15.44} x2={59.74} y2={5.15} gradientTransform="rotate(90 20.3 2.85)" gradientUnits="userSpaceOnUse" >
                        <stop offset={0} stopColor="#fff" stopOpacity={0} />
                        <stop offset={0.28} stopColor="#dedede" stopOpacity={0.15} />
                        <stop offset={0.62} stopColor="#807e7e" stopOpacity={0.58} />
                        <stop offset={0.85} stopColor="#231f20" />
                    </linearGradient>
                    <linearGradient id="shadow-right" x1={41.74} y1={-162.69} x2={41.74} y2={-172.97} gradientTransform="rotate(-90 217.455 -133.435)" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#shadow-left" />
                    <linearGradient id="shadow-top" x1={100.59} y1={25.3} x2={100.59} y2={14} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#231f20" />
                        <stop offset={0.45} stopColor="#918f90" stopOpacity={0.5} />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="vertical-bar-lite" x1={97.92} y1={65.33} x2={97.92} y2={18.83} gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#e9ebeb" />
                        <stop offset={0.43} stopColor="#e9ebeb" />
                        <stop offset={0.5} stopColor="#e9ebeb" />
                        <stop offset={0.5} stopColor="#ebecec" />
                        <stop offset={0.5} stopColor="#f6f7f7" />
                        <stop offset={0.5} stopColor="#fdfdfd" />
                        <stop offset={0.5} stopColor="#fff" />
                        <stop offset={0.57} stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" />
                    </linearGradient>
                    <linearGradient id="vertical-bar-dark" x1={56.33} y1={65.33} x2={56.33} y2={18.83}
                        gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#4d5f77" />
                        <stop offset={0.43} stopColor="#4d5f77" />
                        <stop offset={0.5} stopColor="#4d5f77" />
                        <stop offset={0.5} stopColor="#4e6279" />
                        <stop offset={0.5} stopColor="#506a80" />
                        <stop offset={0.5} stopColor="#54788b" />
                        <stop offset={0.57} stopColor="#54788b" />
                        <stop offset={1} stopColor="#54788b" />
                    </linearGradient>
                </defs>

                <g className="bar-1" transform={`translate(0,${50 * index - 10})`}>
                    <g filter="url(#vertical-step-bg-shadow)"> 
                        <ellipse cx={99.41} cy={65.33} rx={64.24} ry={6.47} fill="url(#shadow-bottom)" />
                        <ellipse cx={12.86} cy={42.28} rx={5.14} ry={17.98} fill="url(#shadow-left)" />
                        <ellipse cx={183.06} cy={42.28} rx={5.14} ry={17.98} fill="url(#shadow-right)" />
                        <ellipse cx={100.59} cy={19.65} rx={64.58} ry={5.65} fill="url(#shadow-top)" />
                    </g>

                    <rect fill="url(#vertical-bar-lite)" x="14" y="18.83" width="167.83" height="46.5" />


                    <g className="index-title" transform={`translate(${trf.x1},0)`}>
                        <rect fill="url(#vertical-bar-dark)" x="35.17" y="18.83" width="42.33" height="46.5" />
                        <text className="text-index">
                            {data.index}
                        </text>
                        <text className="text-title">
                            {data.title}
                        </text>
                    </g>
                    <g className="step-content" transform={`translate(${trf.x2},0)`}>
                        <text className="text-step">
                            {data.step}
                        </text>
                        <path className="step-border" d="M100.25 33.63h20.25v1.32h-20.25z" />
                        <Text className="text-content" x={0} y={0} width={50} style={{ fontSize: '3.2' }}>
                            {data.content}
                        </Text>
                    </g>
                </g>
            </g>
        );
    }
}

export default Step;