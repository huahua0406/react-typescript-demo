import Mock from "mockjs";
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const data = Mock.mock({
  code: 0,
  message: "获取成功",
  timestamp: new Date().getTime(),
  "list|1-10": [
    {
      Boolean: Random.boolean, // 可以生成基本数据类型
      Natural: Random.natural(1, 10), // 生成1到100之间自然数
      Integer: Random.integer(1, 100), // 生成1到100之间的整数
      Float: Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      Character: Random.character(), // 生成随机字符串,可加参数定义规则
      String: Random.string(2, 10), // 生成2到10个字符之间的字符串
      Range: Random.range(0, 10, 2), // 生成一个随机数组
      Date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
      Image: Random.image("200x200", "#50B347", "#FFF", "Hello Mock.js!"), //图片
      Color: Random.color(), // 生成一个颜色随机值
      Paragraph: Random.paragraph(2, 5), //生成2至5个句子的文本
      Name: Random.name(), // 生成姓名
      Url: Random.url(), // 生成web地址
      Address: Random.province(), // 生成地址
    },
  ],
});

const data1 = Mock.mock({
    'Boolean': '@boolean', // 随机生成布尔类型
    'Natural': '@natural(1, 100)', // 随机生成1到100之间自然数
    'Integer': '@integer(1, 100)', // 生成1到100之间的整数
    'Float': '@float(0, 100, 0, 5)', // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': '@character("aeiou")', // 在aeiou中，生成随机字符，不传参表示生成随机字符
    'String': '@string( 2, 10)', // 生成2到10个字符之间的字符串
    'Range': '@range(0, 10, 2)', // 生成一个数组，数组元素从0开始到10结束，间隔为2
    'Date': '@date("yyyy yy y MM M dd d")', // 生成一个随机日期,可加参数定义日期格式，默认yyyy-mm-dd
    'Color1': '@color', // 生成一个颜色16进制随机值
    'Color2': '@rgb',   //生成一个颜色rgb随机值
    'Paragraph':'@paragraph(2, 5)', //生成2至5个句子的文本
    'Sentence':'@sentence(3, 5)',   //生成3至5个单词组成的一个句子
    'World':'@word(3, 5)',          //生成3-5个字母组成的单词
    'title':'@title(3,5)',          //生成3-5个单词组成的标题
    'cParagraph':'@cparagraph(2, 5)', //生成2至5个句子的中文文本
    'cSentence':'@csentence(3, 5)',   //生成3至5个词语组成的一个中文句子
    'cWorld':'@cword(3, 5)',          //生成3-5个字组成的中文词语
    'ctitle':'@ctitle(3,5)',          //生成3-5个词语组成的中文标题
    'Name': '@name', // 生成姓名
    'cName': '@cname', // 生成中文姓名
    'Url': '@url', // 生成url地址
    'Email':'@email',//生成邮箱
    'Address': '@county(true)', // 生成省 市 县组成的地址
    'Guid':'@guid()',         //生成Guid值
})

export const HomeData = Mock.mock({
    code: 0,
    message: '获取成功',
    timestamp: new Date().getTime(),
    'list|1-20': [
        {
            'id|+1': 1,
            'name': '@name',
            'nickName': '@last',
            'gener':'@boolean',
            'email': '@email',
            'phone': /^1[34578]\d{9}$/,
            'address': '@county(true)', 
            'createTime':'@datetime',
            avatar() {
                //用户头像
                return Mock.Random.image('100×100',Mock.Random.color(),'#757575','png',this.nickName)
            }
        }
    ]
})

export const mockData = (req) => {
  req = JSON.parse(req.body);
  console.log('req===',req);
  return data;
};

export const mockData1 = (req) => {
  req = JSON.parse(req.body);
  console.log("req===", req);
  return data1;
};

