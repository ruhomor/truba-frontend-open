import React, {useState, useEffect, useCallback} from 'react'
import './Analytics.css'
import * as echarts from "echarts";
import ReactECharts from 'echarts-for-react'
const objectScan = require('object-scan');
import MapGL from './components/GraphTree.js'
// import ColorNutrients from './components/ColorNutrients'

// const options = {
//     tooltip: {
//       trigger: "item",
//       triggerOn: "mousemove",
//     },
//     series: [
//         {
//             type: "tree",
//
//             name: "tree1",
//
//             data: [dataTree],
//
//             top: "5%",
//             left: "7%",
//             bottom: "2%",
//             right: "60%",
//
//             symbolSize: 10,
//
//             label: {
//                 position: "left",
//                 verticalAlign: "middle",
//                 align: "right"
//             },
//
//             leaves: {
//                 label: {
//                     position: "right",
//                     verticalAlign: "left",
//                     align: "left"
//                 }
//             },
//
//             // https://echarts.apache.org/en/option.html#series-tree.initialTreeDepth
//             initialTreeDepth: 2,
//
//             emphasis: {
//                 focus: "descendant"
//             },
//
//             roam: "zoom",
//
//             expandAndCollapse: true,
//
//             animationDuration: 550,
//             animationDurationUpdate: 750
//         }
//     ]
// };
// import Tree from 'react-tree-graph';
// import {easeQuadOut} from "d3-ease";
// const defaultProps = {
//     animated: false,
//     duration: 500,
//     easing: easeQuadOut,
//     getChildren: n => n.children,
//     steps: 20,
//     keyProp: 'name',
//     labelProp: 'name',
//     margins: {
//         bottom: 10,
//         left: 20,
//         right: 150,
//         top: 10
//     },
//     linkClassName: 'link',
//     nodeClassName: 'node',
//     nodeOffset: 3.5,
//     nodeRadius: 5
// };

export default function Analytics(props){
    // const [searchedData, setSearchedData] = useState('')
    // const [name, setName] = useState("");
    // const hoverStyle = {lineStyle: {color: 'black'}};
    //
    //
    // const Selected = ({ name }) => {
    //     return <>{name ? <p>{name} selected</p> : <p>No item selected</p>}</>;
    // };
    //
    // const handleChange = e => {
    //     setSearchedData(e.target.value)
    //
    // }
    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(searchedData)
    // }
    // const  handleClick = (e) => {
    //     this.click();
    // }
    // const deepSearch = (item, input) => objectScan(['**'], {
    //     abort: true,
    //     rtn: 'value',
    //     filterFn: ({ value }) => value.name === item
    // })(input);
    //
    // console.log(deepSearch(searchedData, dataTree));
    //
    // const onEvents ={
    //
    //     click: (e) => {
    //         setName(e.name);
    //     }
    // }
    // function onClick(event, nodeKey) {
    //     alert(`Left clicked ${nodeKey}`);
    // }
    //
    // function onRightClick(event, nodeKey) {
    //     event.preventDefault();
    //     alert(`Right clicked ${nodeKey}`);
    // }
    return (
        <>
            {/*<form onChange={handleChange} onSubmit={handleSubmit}>*/}
            {/*    <input type="text"*/}
            {/*           style={{width: '100px', height:'20px'}}*/}

            {/*    />*/}
            {/*    </form>*/}
            {/*<Selected name={name} />*/}
            {/*<ReactECharts*/}
            {/*    style={{ height: "100vh", width: "100%" }}*/}
            {/*    option={options}*/}
            {/*    onEvents={onEvents}*/}
            {/*    />*/}
          {/*<div className="containerDevice">*/}
              <MapGL/>

          {/*</div>*/}
          {/*  <div className="containerDevice" style={{ height: '700px', width: '100%' }}>*/}
          {/*      <ColorNutrients/>*/}
          {/*  </div>*/}
            {/*<GraphTree/>*/}
        </>

    )
}