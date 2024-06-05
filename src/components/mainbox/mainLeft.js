import { useEffect, useRef } from "react";
import "./mainBox.css";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import React from "react";


export default function MainLeft() {
  return (
    <>
      <div className="column">
        <div className="panel bar">
          <h2>柱形图-就业行业</h2>
          {/* <InitChart option={{ option1 }} />
           */}
          <BarChart />
          <div className="panel-footer"></div>
        </div>
        <div className="panel line">
          <h2>
            折线图-人员变化
            <a className="a-active" href="#">
              2020
            </a>
            <a href="#">2021</a>
          </h2>
          <LineChart />
          <div className="panel-footer"></div>
        </div>
        <div className="panel pie">
          <h2>饼形图-年龄分布</h2>
          <PieChart />
          <div className="panel-footer"></div>
        </div>
      </div>
    </>
  );
}

function BarChart() {
  var option = {
    color: ["#2f89cf"],
    // 提示框组件
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    // 修改图表位置大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    // x轴相关配置
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        // 修改刻度标签，相关样式
        axisLabel: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 10,
        },
        // x轴样式不显示
        axisLine: {
          show: false,
        },
      },
    ],
    // y轴相关配置
    yAxis: [
      {
        type: "value",
        // 修改刻度标签，相关样式
        axisLabel: {
          color: "rgba(255,255,255,0.6)",
          fontSize: 12,
        },
        // y轴样式修改
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.6)",
            width: 2,
          },
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
      },
    ],
    // 系列列表配置
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        // ajax传动态数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          borderRadius: 5,
        },
      },
    ],
  };

  // echarts图标自适应容器大小

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
    <div className="chart" ref={chartRef}>
      {/* <ReactEcharts
        className="chart"
        style={{ height: "3rem" }}
        option={option}
      /> */}
    </div>
  );
}

function LineChart() {
  // 年份对应数据
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];

  var option = {
    // 修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: "#4c9bfd",
      },
      right: "10%",
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
    },
    xAxis: {
      type: "category",
      boundaryGap: false, // 去除轴间距
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      // 去除刻度线
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfb", // x轴文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
    },
    yAxis: {
      type: "value",
      // 去除刻度线
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfb", // x轴文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    series: [
      {
        type: "line",
        smooth: true, // 圆滑的线
        name: "新增粉丝",
        data: yearData[0].data[0],
      },
      {
        type: "line",
        smooth: true, // 圆滑的线
        name: "新增游客",
        data: yearData[0].data[1],
      },
    ],
  };

  return (
    <div className="chart">
      <ReactEcharts
        className="chart"
        style={{ height: "3rem" }}
        option={option}
      />
    </div>
  );
}

function PieChart() {
  let option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10",
      },
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 设置饼形图在容器中的位置
        center: ["50%", "42%"],
        // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center",
        },
        // 链接文字和图形的线
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 1,
            name: "0岁以上",
          },
          {
            value: 4,
            name: "20-29岁",
          },
          {
            value: 2,
            name: "30-39岁",
          },
          {
            value: 2,
            name: "40-49岁",
          },
          {
            value: 1,
            name: "50岁以上",
          },
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <ReactEcharts
        className="chart"
        style={{ height: "3rem" }}
        option={option}
      />
    </div>
  );
}
