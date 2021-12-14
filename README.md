# color2variable

获取 `@ant-design/colors` 中颜色值与变量之间的互转关系。[antd 色彩](https://ant.design/docs/spec/colors-cn)

## Api

### getColor

```
/**
* 获取变量对应的十六进制颜色值。
* @param {String} variable 变量
* @return {String} 变量对应的十六进制颜色值
*/
(variable: String) => String

```

### getVariable

```
/**
* 获取十六进制颜色值对应的变量。
* @param {String} 十六进制颜色值
* @return {String} 十六进制颜色值对应的变量
*/
(color: String) => String
```
