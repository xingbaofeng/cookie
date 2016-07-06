/**
 * Created by sks on 2016/7/4.
 */
$(function(){



    $("#check").click(function(){
            var COOKIE_NAME=$("#username").val();
            var COOKIE_PAS=$("#password").val();
            if(this.click){
                if(COOKIE_NAME==""||COOKIE_PAS==""){
                    $("#queryShow").html("输入完整");
                }else{
                    var the_date = new Date('08-09-2017 20:13:14');//����ʱ��

                    //ת���� GMT ��ʽ��
                    $.cookie(COOKIE_NAME,COOKIE_PAS,{path:"jquery.min.js",expires:the_date});    //cookie��ʱ��Ϊ����ʱ��-8Сʱ
//path ·��
                }}
        });

    $("#query").click(function(){
        var query_name=$("#username").val();
        if(query_name==""){
            $("#queryShow").html("没有要查询的内容")

        }else{
            var query_val=$.cookie(query_name);
            $("#password").val(query_val);
        }
    });

    $("#delete").click(function(){
        var delete_name=$("#username").val();
        if(delete_name==""){
            $("#queryShow").html("没有要铲除的内容")
        }else{
            var delete_val= $.cookie(delete_name);
            $.cookie(delete_name,delete_val,{expires:-1})
        }})


})