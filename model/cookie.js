class Cookie{

    setCookie(id,val){
        document.cookie = id+"="+val;
    }

    readCookie(id){
        let arrayCookie = document.cookie.split(";");

        for (let cookie of arrayCookie) {
            let splitCookie = cookie.trim().split("=");
            if (splitCookie[0] === id) {
                return splitCookie[1];
            }
        }

        return null;
    }

    deleteCookie(id){
        if(readCookie(id)!=null){
            document.cookie = id + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            return true;
        }
        return false;
    }
}