define(['jquery','util','echarts'],function ($,util,echarts) {
//设置左侧导航栏高亮选中
  util.setSelect(location.pathname);
  //处理图表显示
  // 基于准备好的dom，初始化echarts实例
  var container = $('#main').get(0);
  var myChart = echarts.init(container);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: 'ECharts 示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
