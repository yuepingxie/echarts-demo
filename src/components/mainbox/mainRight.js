import "./mainBox.css";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import React from "react";

export default function MainRight() {
  return (
    <>
      <div className="column">
        <div className="panel bar2">
          <h2>柱形图-就业行业</h2>
          <BarChart />
          <div className="panel-footer"></div>
        </div>
        <div className="panel line2">
          <h2>折线图-播放量</h2>
          <LineChart />
          <div className="panel-footer"></div>
        </div>
        <div className="panel pie2">
          <h2>饼形图-地区分布</h2>
          <PieChart />
          <div className="panel-footer"></div>
        </div>
      </div>
    </>
  );
};

function BarChart() {
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false,
    },
    yAxis: [
      {
        type: "category",
        // y轴数据反转，与数组的顺序一致
        inverse: true,
        // 不显示y轴线和刻度
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        // 将刻度标签文字设置为白色
        axisLabel: {
          color: "#fff",
        },
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
      },
      {
        // y轴数据反转，与数组的顺序一致
        inverse: true,
        show: true,
        // 不显示y轴线和刻度
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        // 将刻度标签文字设置为白色
        axisLabel: {
          color: "#fff",
        },
        data: [702, 350, 610, 793, 664],
      },
    ],
    series: [
      {
        // 第一组柱子（条状）
        name: "条",
        type: "bar",
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          borderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          },
        },
        data: [70, 34, 60, 78, 69],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%",
        },
      },
      {
        // 第二组柱子（框状 border）
        name: "框",
        type: "bar",
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          borderRadius: 15,
        },
        data: [100, 100, 100, 100, 100],
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

function LineChart() {
  var option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },
    grid: {
      top: "30",
      left: "10",
      right: "30",
      bottom: "10",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          // 不显示刻度线
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2,
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        // 拐点设置为小圆点
        symbol: "circle",
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30,
          60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40,
        ],
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130,
          20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
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

function PieChart() {
  var option = {
    color: [
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10,
      },
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "60%"],
        center: ["50%", "40%"],
        // 半径模式  area面积模式
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontsize: 10,
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长(斜线)
          length: 6,
          // 连接文字线长(横线)
          length2: 8,
        },
        data: [
          {
            value: 26,
            name: "北京",
          },
          {
            value: 24,
            name: "山东",
          },
          {
            value: 25,
            name: "河北",
          },
          {
            value: 20,
            name: "江苏",
          },
          {
            value: 25,
            name: "浙江",
          },
          {
            value: 30,
            name: "四川",
          },
          {
            value: 42,
            name: "湖北",
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
