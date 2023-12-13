import React from "react";
import { useState, useEffect } from "react";


//[ ] Bir key value ve baslangicDegeri alan bir hook oluşturun.
const localStorageKullan = (key, initialValue) => {
    const [value, setValue] = useState(
        localStorage.getItem(key) || initialValue
    )
    console.log('key:',key)
    console.log('value',value)

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export default localStorageKullan;