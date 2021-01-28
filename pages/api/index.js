function whts_key(requests, response) {

    const key_admin = 'admin'
    const user_key = requests.body

    if(user_key == key_admin){
        response.json({

            "login":true,
            "body":user_key
    
        })
    }else {

    response.json({

        "login":false,
        "body":user_key

    })}

}
Access-Control-Allow-Origin: *
export default whts_key;
