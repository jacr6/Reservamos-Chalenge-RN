const encodeObject = params => {
  let query = [];
  for (let key in params) {
    let val = encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    query.push(val);
  }
  return query.join("&");
};

const fetchPostService = async (met, url, body, allow) => {
 

  if (met === "get" && body !== undefined) {
    let temp = encodeObject(body);
    url = url + "?" + temp;

   
  } 
  
  let headers = allow?{
    "Access-Control-Allow-Origin":"*"

   }:{}

  let response = await fetch(url,{
    headers,
    "method": met,
    "Content-Type": "application/json",
    "body":met!=="get"?JSON.stringify(body):undefined,
    // mode: "cors",
    referrerPolicy:allow?"strict-origin-when-cross-origin":"no-referrer-when-downgrade"
  
  }).then(response => response);

  if (response.ok) {
   
    return response.json();
  }
 
};

export default fetchPostService;
