//前端拿不到userid
export async function GiveFeedBack(comment, feedbacktype, itemid, timestap) {
    let urlencoded = new URLSearchParams();
    urlencoded.append("Comment", comment);
    urlencoded.append("FeedbackType", feedbacktype);
    urlencoded.append("ItemId", itemid);
    urlencoded.append("Timestamp", timestap);
    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        mode: 'cors',
        credentials: 'include',
        body: urlencoded,
        'Access-Control-Allow-Credentials':'true',
    }
    fetch("http://localhost:10081/api/feedback", requestOptions)
        .then(response => {
            if(response.json().code === 200) {
                console.log("发送feeback成功");
            } else {
                console.log("发送feedback失败");
            }
        })

}

export async function GetNearRecommend(uuid) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    }
    const data = await fetch("http://localhost:10081/api/item/" + uuid + "/neighbors", requestOptions)
        .then(response => {
            if(response.json().code === 200) {
                return response.json().data;
            } else {
                return undefined
            }
        })
    return data;
}

export async function GetPopular() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    }
    const data = await fetch("http://localhost:10081/api/popular", requestOptions)
        .then(response => {
            if(response.json().code === 200) {
                return response.json().data;
            } else {
                return undefined
            }
        })
    return data;
}

// export async function GetUserRecommend() {
//     let requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         mode: 'cors',
//         credentials: 'include',
//         'Access-Control-Allow-Credentials':'true',
//     }
//     const data = await fetch("http://localhost:10081/api/recommend", requestOptions)
//         .then(response => {
//             if(response.json().code === 200) {
//                 return response.json().data;
//             } else {
//                 return undefined
//             }
//         })
//     return data;
// }