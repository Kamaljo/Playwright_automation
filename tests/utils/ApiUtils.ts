import { APIRequestContext } from "@playwright/test";

export class ApiUtils
{
    webapicontext: any;
    loginpaylod: any;

    constructor(webapicontext: APIRequestContext, loginpaylod: any)
    {
        this.webapicontext =webapicontext;
        this.loginpaylod = loginpaylod;

    }

async gettoken()
{
const webapiresponse = await this.webapicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
   { data :this.loginpaylod
    
   });

//expect( webapiresponse.ok()).toBeTruthy();

const webapiresponsejson = await webapiresponse.json();
let token = webapiresponsejson.token;

console.log(token);
return token;
}

async getorderid(orderidpayload :any)
{

    const createorderApireponse = await this.webapicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
    data : orderidpayload,
    headers: {
    
       'Authorization' : await this.gettoken(),
       'Content-Type' : 'application/json'
    }
    
    });
    
    
    const createorderApireponsejson = await createorderApireponse.json();
    const orderid = createorderApireponsejson.orders;

    return orderid;

}



}

