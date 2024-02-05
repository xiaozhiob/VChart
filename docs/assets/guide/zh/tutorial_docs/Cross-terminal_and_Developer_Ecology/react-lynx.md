# ReactLynx

ReactLynx 是字节内用 Web 技术栈快速构建 Native 视图的高性能跨端框架 Lynx 的 React 语法版本，VChart 也提供了基于 ReactLynx3.0 版本的图表渲染能力支持。

## 如何获取 Lynx-VChart

### npm 包

你可以直接在 ReactLynx 项目中安装 lynx-vchart 依赖包（该包为内网包）：`@dp/lynx-vchart`。

## 统一图表标签 `<VChart />`

`<VChart />` 接收的一个完整的**spec**作为图表定义，其**spec**的数据结构完全等同于 VChart 中的定义，因此开发者可以将任何对于 VChart 合法的 spec 送入 Lynx-VChart 中进行图表渲染。

示例：

```javascript
import VChart from '@dp/lynx-vchart';
export function PieChart() {
  const spec = {
    type: 'pie',
    data: [
      {
        id: 'id0',
        values: [
          { type: 'oxygen', value: '46.60' },
          { type: 'silicon', value: '27.72' },
          { type: 'aluminum', value: '8.13' },
          { type: 'iron', value: '5' },
          { type: 'calcium', value: '3.63' },
          { type: 'sodium', value: '2.83' },
          { type: 'potassium', value: '2.59' },
          { type: 'others', value: '3.5' }
        ]
      }
    ],
    outerRadius: 0.8,
    valueField: 'value',
    categoryField: 'type',
    title: {
      visible: true,
      text: 'Statistics of Surface Element Content'
    },
    legends: {
      visible: true,
      orient: 'left'
    },
    label: {
      visible: true
    },
    tooltip: {
      mark: {
        content: [
          {
            key: datum => datum['type'],
            value: datum => datum['value'] + '%'
          }
        ]
      }
    }
  };

  return (
    <div className="cusomized-pie-chart">
      <VChart spec={spec} onReady={() => console.log('ready')} width="700rpx" height="900rpx" />
    </div>
  );
}
```

### Props

如果你已经有了 spec 图表描述信息，使用统一图表标签是比较快捷的方式，只需要引入`VChart`组件即可：

```typescript
import VChart from '@dp/lynx-vchart';
```

`VChart`组件即封装的 ReactLynx 组件，其 props 定义如下：

```typescript
interface VChartProps extends EventsProps {
  /** 图表定义 */
  spec: any;
  /** 图表配置 */
  options?: ChartOptions;
  /** 图表渲染完成事件 */
  onReady?: (instance: VChart, isInitial: boolean) => void;
  /** throw error when chart run into an error */
  onError?: (err: Error) => void;
  /**
   * 切换到同步渲染
   *
   * @since 1.8.3
   **/
  useSyncRender?: boolean;
  /**
   * props更新的时候，跳过所有函数的检查，即所有的函数都认为没有更新
   *
   * @since 1.6.5
   **/
  skipFunctionDiff?: boolean;
}
```

`EventsProps` 的定义参考事件交互章节

`onReady`是一个内置的回调事件，会在图表渲染或更新时触发，其入参分别代表图表实例对象，以及是否初次渲染。

举例来说，开发者可以在初次渲染时，将需要触发的回调事件注册在图表实例上以实现图表交互功能。

## 主题样式

如果在 VChart 中使用自定义主题，可以通过两种方式实现，分别是在 spec 中定义 theme，以及通过`ThemeManager`注册主题。因为在 Lynx-VChart 中，并不需要引用 VChart 的 npm 包。因此 Lynx-VChart 中透出了 VChart 基类，命名为`VChartCore`，方便开发者在 VChart 的基类上通过静态方法注册自定义主题。

VChart 的主题配置请参考[VChart 主题](https://visactor.io/vchart/guide/tutorial_docs/Theme/Theme)。

注意，对于按需使用 VChart 的情况，建议直接调用 VChart API 使用主题

## 总结

通过本教程，你应该已经学会了如何在 LynxVChart 项目中使用 VChart 图表创建一个简单的柱状图。同时，你还了解了如何根据需求配置图表，以满足项目中不同的场景。VChart 提供了丰富的配置选项和组件，相信你在实际项目中会更好地掌握它们的使用，并发挥出更大的作用。希望你能在项目中愉快地使用 VChart 表库！