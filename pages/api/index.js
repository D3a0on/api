function whts_key(requests, response) {

    const key_admin = 'admin'
    const user_key = requests.body.key

    if(user_key == key_admin){
        response.json({

            "login":true,
            "redirect":"https://painel.d3a0on.vercel.app/"
    
        })
    }else {

    response.json({

        "login":false,

    })}

}
Access-Control-Allow-Origin: 'https://deamon.vercel.app/';
export default whts_key
