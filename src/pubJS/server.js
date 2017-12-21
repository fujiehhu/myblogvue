import Vue from 'vue'

// @param {[type]} id [数据id]
// @param {[Function]} callback [回调参数]
// @return {[type]} [返回类型]
//公共路径
let portUrl = "http://www.vuebook.com/port/";
//用户注册
const getRegister = (username,password,email,callback) =>{
    let url = portUrl+'login/getRegister?username='+username+'&email='+email+'&password='+password;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num)
    })

}
//用户登录
const UserLogin =  (email,password,callback) =>{
    let url = portUrl + 'login/UserLogin?email='+email+'&password='+password;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}
//文章分类查询
const ArtClassData = (callback) => {
    if(sessionStorage.getItem('classList')){
        var data = JSON.parse(sessionStorage.getItem('classList'));
        callback && callback(data)
    }else{
        let url = portUrl + 'article/ArtClassData';
        Vue.http.get(url).then(response => response.json()).then(num => {
            // console.log(num);
            if(num.code==1001){
                sessionStorage.setItem('classList',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }
}


//查询文章列表
const ShowArticleAll = (artId,cateId,articleName,callback) =>{
    let url = portUrl + 'article/ShowArticleAll?art_id='+artId+'&cate_id='+cateId+'&article_name='+articleName;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询文章详情
const getArticleInfo = (artId,callback) =>{
    let url = portUrl + 'article/getArticleInfo?art_id='+artId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询浏览量最多的10篇文章数据
const ShowBrowseCount = (callback) =>{
    let url = portUrl + 'article/ShowBrowseCount';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}

//查询文章评论量最大的10篇文章
const ShowArtCommentCount = (callback) =>{
    let url = portUrl + 'article/ShowArtCommentCount';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询文章评论数据
const ArticleComment = (artId,commentId,callback) =>{
    let url = portUrl + 'comment/ArticleComment?art_id='+artId+'&comment_id='+commentId;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询其他评论数据
const OtherComment = (leaveId,commentId,callback) =>{//分类类型ID（1：赞赏 2：友情链接 3：留言板 4：关于我）
    let url = portUrl + 'comment/OtherComment?leave_id='+leaveId+'&comment_id='+commentId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        callback && callback(num);
    })
}


//文章评论
const setArticleComment = (content,user_id,article_id,leave_pic,callback) =>{
    let url = portUrl + 'comment/setArticleComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_pic='+leave_pic;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//其他评论
const setOuthComment = (content,user_id,article_id,leave_pic,callback) =>{
    let url = portUrl + 'comment/setOuthComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_pic='+leave_pic;
    Vue.http.get(url).then(response => response.json()).then(num => {
            callback && callback(num);
    })
}


//查询网址点赞总数
const showLikeData = (callback) =>{
    let url = portUrl + 'outh/showLikeData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            // console.log(num.data,parseInt(num.data));
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//点赞功能修改
const GetLike = (like_num,callback) =>{
    let url = portUrl + 'outh/GetLike?like_num='+like_num;
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.msg);
        }else{
            alert("点赞失败");
        }
    })
}


//查询友情链接数据
const FriendUrlData = (callback) =>{
    let url = portUrl + 'outh/FriendUrlData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}


//查询关于我
const AboutMeData = (callback) =>{
    let url = portUrl + 'outh/AboutMeData';
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}

//文章点击收藏
const getArtCollect = (callback) =>{

}

export {
        getRegister,
        UserLogin,
        ArtClassData,
        ShowArticleAll,
        getArticleInfo,
        ShowBrowseCount,
        ShowArtCommentCount,
        ArticleComment,
        OtherComment,
        setArticleComment,
        setOuthComment,
        showLikeData,
        GetLike,
        FriendUrlData,
        AboutMeData
    }
