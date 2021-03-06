// 使用 Mock
var Mock = require('mockjs');

// 获取 mock.Random 对象
const Random = Mock.Random;
var totalPageNum = 0;

let articles = [];
for (let i = 0; i < 15; i++) {
  let newsObject = {
    title: Random.csentence(5, 30), // Random.csentence( min, max )
    unit: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    types: Random.tld(), // Random.cname() 随机生成一个类型
    stated: Random.cfirst(), // Random.cname() 随机生成一个状态
    published: Random.datetime() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  articles.push(newsObject)
}
// mock一组数据
const productData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var newArticles = articles.slice((page - 1) * pageNumber, page * pageNumber);
  if (JSON.parse(opt.body).title) {
    newArticles = newArticles.filter(item => item.title === JSON.parse(opt.body).title);
    totalPageNum = newArticles.length
  }
  return {
    data: newArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/news1', /post|get/i, productData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//联盟管理
let alliances = [];
for (let i = 0; i < 15; i++) {
  let allianceObject = {
    title: Random.csentence(5, 30), // Random.csentence( min, max )
    published: Random.datetime() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  alliances.push(allianceObject)
}
// mock一组数据
const allianceData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var alliancesArticles = alliances.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = alliances.length
  // if (JSON.parse(opt.body).title) {
  //   alliancesArticles = alliancesArticles.filter(item => item.title === JSON.parse(opt.body).title);
  //   totalPageNum = alliances.length
  // }
  return {
    data: alliancesArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/alliance', /post|get/i, allianceData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//加盟机构
let joinSrchlist = [];
for (let i = 0; i < 15; i++) {
  let joinObject = {
    title: Random.csentence(5, 30), // Random.csentence( min, max )
    published: Random.datetime() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  joinSrchlist.push(joinObject)
}
// mock一组数据
const joinData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var joinArticles = joinSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = joinSrchlist.length
  return {
    data: joinArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/joinSrchlist', /post|get/i, joinData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//需求项目审核
let demandSrchlist = [];
for (let i = 0; i < 15; i++) {
  let demandObject = {
    organUnit: Random.csentence(5, 15), // Random.csentence( min, max )
    organCode: Random.natural(600, 10000), // Random.natural( min, max )
    fwxl: Random.integer(1, 5), // Random.cname() 随机生成一个常见的中文姓名
    organName: Random.csentence(5, 20), // Random.csentence( min, max )
    startDate: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    auditStartDate: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    auditState: Random.integer(1, 3)
  }
  demandSrchlist.push(demandObject)
}
// mock一组数据
const demandData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var demandArticles = demandSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = demandSrchlist.length
  return {
    data: demandArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/demandManagement', /post|get/i, demandData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//竞价项目审核
let bidSrchlist = [];
for (let i = 0; i < 15; i++) {
  let bidObject = {
    demandCompany: Random.csentence(5, 15), // Random.csentence( min, max )
    projectCode: Random.natural(600, 100000), // Random.natural( min, max )
    fwxl: Random.integer(1, 5), // Random.cname() 随机生成一个常见的中文姓名
    name: Random.csentence(5, 15), // Random.csentence( min, max )
    auditDate: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    tenderEndDate: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    remainingDate: Random.datetime(),
    auditState: Random.integer(1, 3)
  }
  bidSrchlist.push(bidObject)
}
// mock一组数据
const bidData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var bidArticles = bidSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = bidSrchlist.length;
  return {
    data: bidArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/bidManagement', /post|get/i, bidData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//竞价项目审核详情（竞价方信息）
let bidMagDetailSrchlist = [];
for (let i = 0; i < 15; i++) {
  let bidMagDetailObject = {
    companyName: Random.csentence(5, 15), // Random.csentence( min, max )
    contact: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    phone: Random.natural(600, 100000), // Random.natural( min, max )
  }
  bidMagDetailSrchlist.push(bidMagDetailObject)
}
// mock一组数据
const bidManageDetailData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var bidMagDetailArticles = bidMagDetailSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = bidMagDetailSrchlist.length;
  return {
    data: bidMagDetailArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/bidManageDetail', /post|get/i, bidManageDetailData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//服务案例管理
let caseSrchlist = [];
for (let i = 0; i < 15; i++) {
  let caseObject = {
    companyName: Random.csentence(5, 15), // Random.csentence( min, max )
    name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    applayTime: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    approvalTime: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    states: Random.integer(1, 3), // Random.cname() 随机生成一个常见的中文姓名
  }
  caseSrchlist.push(caseObject)
}
// mock一组数据
const caseData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var caseArticles = caseSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = caseSrchlist.length;
  return {
    data: caseArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/caseManagement', /post|get/i, caseData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据


//合同备案管理
let contractSrchlist = [];
for (let i = 0; i < 15; i++) {
  let contractObject = {
    demandCompany: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    organUnit: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    organCode: Random.natural(600, 100000),
    organName: Random.csentence(5, 15), // Random.csentence( min, max )
    fwxl: Random.integer(1, 5), // 随机产出1-5
    applayTime: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    approvalTime: Random.datetime(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    states: Random.integer(1, 4), // Random.cname() 随机生成一个常见的中文姓名
  }
  contractSrchlist.push(contractObject)
}
// mock一组数据
const contractData = function (opt) {
  var page = JSON.parse(opt.body).page;
  var pageNumber = JSON.parse(opt.body).pageNumber;
  var contractArticles = contractSrchlist.slice((page - 1) * pageNumber, page * pageNumber);
  totalPageNum = contractSrchlist.length;
  return {
    data: contractArticles,
    totalPage: totalPageNum
  }
}
// mock一组数据
Mock.mock('/contract', /post|get/i, contractData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
