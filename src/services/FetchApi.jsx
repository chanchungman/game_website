export default async function getApi(searchParams,setStoreData) {
    let url ="https://proj.idigitalts.com/wms/hk/api.php";
    if(searchParams.get('id')!=null){
        url = url+'?id='+searchParams.get('id');
    };
    if(searchParams.get('search')!=null){
        url = url+'?search='+searchParams.get('search');
    };
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    });

    const data = await response.json();    
    setStoreData(data);
}