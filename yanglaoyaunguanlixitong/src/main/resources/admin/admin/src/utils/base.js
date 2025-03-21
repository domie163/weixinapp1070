const base = {
    get() {
        return {
            url : "http://localhost:8080/yanglaoyaunguanlixitong/",
            name: "yanglaoyaunguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yanglaoyaunguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "养老院管理系统"
        } 
    }
}
export default base
