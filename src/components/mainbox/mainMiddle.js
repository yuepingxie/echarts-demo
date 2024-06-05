import "./mainBox.css";
import ReactEcharts from "echarts-for-react";
import "../../js/china.js";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function MainMiddle() {
  let option = {
    tooltip: {
      show: false,
    },
    geo: {
      map: "china",
      roam: false, // 一定要关闭拖拽
      zoom: 1.23,
      center: [105, 36], // 调整地图位置
      label: {
        normal: {
          show: false, //关闭省份名展示
          fontSize: "10",
          color: "rgba(0,0,0,0.7)",
        },
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          areaColor: "#0d0059",
          borderColor: "#389dff",
          borderWidth: 1, //设置外层边框
          shadowBlur: 5,
          shadowOffsetY: 8,
          shadowOffsetX: 0,
          shadowColor: "#01012a",
        },
        emphasis: {
          areaColor: "#184cff",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
    series: [
      {
        type: "map",
        map: "china",
        roam: false,
        zoom: 1.23,
        center: [105, 36],
        // geoIndex: 1,
        // aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },
        itemStyle: {
          normal: {
            areaColor: "#0d0059",
            borderColor: "#389dff",
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: "#17008d",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 5,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const chartRef = useRef(null);
  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    chart.setOption(option);
  }, []);

  //创建-个resize 事件
  const echartsResize = () => {
    echarts.init(chartRef.current).resize();
    window.addEventListener("resize", echartsResize);
  };
  //页面卸载，销毁监所
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", echartsResize);
    };
  }, [option]);

  return (
    <>
      <div className="column">
        <div className="no">
          <div className="no-hd">
            <ul>
              <li>12434</li>
              <li>10983</li>
            </ul>
          </div>
          <div className="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <div className="map" ref={chartRef}>
          <div className="map1"></div>
          <div className="map2"></div>
          <div className="map3"></div>
          <div className="chart"></div>
        </div>
      </div>
    </>
  );
}
