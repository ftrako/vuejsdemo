
import request from "../../utils/request.js"

const icp = {
    query: function (domain){
        return request({
            url: "/api/icp",
            method: "get",
            params: {domain: domain},
        })
    },
    tt: function (){
        console.log("tt")
    }
};

export default icp;